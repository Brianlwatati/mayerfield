// src/pages/paypages/OrderHistory.tsx

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { fetchUserOrders } from "../../services/api";

interface OrderItem {
  id: string;
  name?: string;
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

export default function OrderHistory() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      navigate("/signin");
      return;
    }

    fetchUserOrders()
      .then((data) => {
        // Adapt depending on whether backend returns array directly or { data: [...] }
        const orderList = Array.isArray(data) ? data : data.data || [];
        setOrders(orderList);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching order history:", err);
        setError(err.message || "Could not load order history.");
        setLoading(false);
      });
  }, [navigate]);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return (
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-green-200">
            ✓ Paid
          </span>
        );
      case "pending":
        return (
          <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-amber-200">
            ⏳ Pending
          </span>
        );
      case "failed":
      case "cancelled":
        return (
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-red-200">
            ✕ {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      default:
        return (
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-amber-950 tracking-tight">
            Order History
          </h1>
          <p className="text-xs text-gray-600 mt-1">
            Track and review your past coffee & bakery orders.
          </p>
        </div>
        <Link
          to="/menu"
          className="text-xs font-semibold text-amber-900 hover:text-amber-950 bg-amber-100/70 hover:bg-amber-200/70 px-4 py-2 rounded-lg transition-colors"
        >
          + New Order
        </Link>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4 bg-white rounded-2xl border border-amber-100 shadow-sm">
          <div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-amber-900">
            Fetching your order records...
          </p>
        </div>
      ) : error ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-red-200 p-6 shadow-sm">
          <span className="text-3xl">⚠️</span>
          <h3 className="text-base font-bold text-red-700 mt-2">
            Failed to load orders
          </h3>
          <p className="text-xs text-gray-600 mt-1">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-amber-900 text-white text-xs font-medium rounded-lg hover:bg-amber-950 transition-colors"
          >
            Retry
          </button>
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-amber-100 p-8 shadow-sm">
          <span className="text-5xl">☕</span>
          <h3 className="text-lg font-bold text-amber-950 mt-3">
            No orders found yet
          </h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            You haven't placed any orders with us yet. Visit the menu to order
            your first brew!
          </p>
          <Link
            to="/menu"
            className="mt-6 inline-block bg-amber-900 hover:bg-amber-950 text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl border border-amber-100 p-5 shadow-sm hover:border-amber-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs text-amber-900 font-bold">
                    Order #{order.id.slice(0, 8)}...
                  </span>
                  {getStatusBadge(order.status)}
                </div>
                <p className="text-xs text-gray-500">
                  Placed on:{" "}
                  {new Date(order.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <div className="flex items-center justify-between md:justify-end space-x-6 border-t md:border-t-0 pt-3 md:pt-0 border-amber-50">
                <div className="text-left md:text-right">
                  <span className="text-xs text-gray-500 block">
                    Total Amount
                  </span>
                  <span className="font-bold text-amber-950 text-base">
                    ${Number(order.total_amount).toFixed(2)}
                  </span>
                </div>
                <Link
                  to={`/orders/${order.id}`}
                  className="bg-amber-900 hover:bg-amber-950 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
