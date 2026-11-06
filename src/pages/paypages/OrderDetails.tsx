// src/pages/paypages/OrderDetails.tsx

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { fetchOrderById } from "../../services/api";

interface OrderItem {
  id: string;
  item_id?: string;
  name: string;
  quantity: number;
  price_at_purchase: number;
}

interface Order {
  id: string;
  status: "pending" | "paid" | "failed" | "cancelled";
  total_amount: number;
  created_at: string;
  items?: OrderItem[];
}

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      navigate("/signin");
      return;
    }

    if (!id) {
      setError("Invalid order ID");
      setLoading(false);
      return;
    }

    fetchOrderById(id)
      .then((data) => {
        // Adapt depending on whether backend returns { data: order } or order directly
        const orderData = data.data || data;
        setOrder(orderData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching order details:", err);
        setError(err.message || "Could not load order details.");
        setLoading(false);
      });
  }, [id, navigate]);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return (
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
            ✓ Paid (Webhook Verified)
          </span>
        );
      case "pending":
        return (
          <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
            ⏳ Pending Payment
          </span>
        );
      case "failed":
      case "cancelled":
        return (
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full border border-red-200">
            ✕ {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      default:
        return (
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back navigation */}
      <div className="mb-6">
        <Link
          to="/orders"
          className="text-xs font-semibold text-amber-800 hover:text-amber-950 flex items-center space-x-1"
        >
          <span>← Back to Order History</span>
        </Link>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4 bg-white rounded-2xl border border-amber-100 shadow-sm">
          <div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-amber-900">
            Loading order summary...
          </p>
        </div>
      ) : error || !order ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-red-200 p-6 shadow-sm">
          <span className="text-3xl">⚠️</span>
          <h3 className="text-base font-bold text-red-700 mt-2">
            Could not load order
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            {error || "Order not found."}
          </p>
          <Link
            to="/orders"
            className="mt-4 inline-block px-4 py-2 bg-amber-900 text-white text-xs font-medium rounded-lg hover:bg-amber-950 transition-colors"
          >
            Return to Orders
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          {/* Header section */}
          <div className="bg-amber-50/50 p-6 border-b border-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block">
                Order Reference
              </span>
              <h1 className="font-mono text-base font-bold text-amber-950 mt-0.5">
                #{order.id}
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Placed on{" "}
                {new Date(order.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div>{getStatusBadge(order.status)}</div>
          </div>

          {/* Items breakdown */}
          <div className="p-6 space-y-6">
            <h3 className="text-sm font-bold text-amber-950 uppercase tracking-wide border-b border-amber-100 pb-2">
              Purchased Items
            </h3>

            {order.items && order.items.length > 0 ? (
              <div className="divide-y divide-amber-50">
                {order.items.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="py-3 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-semibold text-amber-950 text-sm">
                        {item.name || "Coffee / Bakery Item"}
                      </h4>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity} × $
                        {Number(item.price_at_purchase).toFixed(2)}
                      </p>
                    </div>
                    <span className="font-bold text-amber-950 text-sm">
                      $
                      {(Number(item.price_at_purchase) * item.quantity).toFixed(
                        2,
                      )}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">
                Item details are processed securely via backend reference.
              </p>
            )}

            {/* Total calculation summary */}
            <div className="border-t border-amber-100 pt-4 space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Subtotal</span>
                <span>${Number(order.total_amount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Taxes & Fees</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-amber-950 pt-2 border-t border-amber-100">
                <span>Total Paid</span>
                <span>${Number(order.total_amount).toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-amber-50/30 px-6 py-4 border-t border-amber-100 flex items-center justify-between">
            <Link
              to="/menu"
              className="text-xs font-medium text-amber-900 hover:underline"
            >
              Order more items →
            </Link>
            <Link
              to="/orders"
              className="bg-amber-900 hover:bg-amber-950 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors"
            >
              View All Orders
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
