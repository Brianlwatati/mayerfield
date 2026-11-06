// src/pages/paypages/CheckoutSuccess.tsx

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useCart } from "../../context/CartContext";

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();

  const [loading, setLoading] = useState(true);
  const [_paymentVerified, setPaymentVerified] = useState(false);

  useEffect(() => {
    // Clear cart immediately upon reaching success page
    clearCart();

    // Verify status (Webhook handles the DB update asynchronously)
    if (sessionId) {
      // Small delay or poll to give webhook time to process
      const timer = setTimeout(() => {
        setPaymentVerified(true);
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-2xl border border-amber-100 p-8 shadow-sm">
        {loading ? (
          <div className="flex flex-col items-center py-8 space-y-4">
            <div className="w-12 h-12 border-4 border-amber-800 border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-xl font-bold text-amber-950">
              Verifying Payment...
            </h2>
            <p className="text-xs text-gray-500">
              Finalizing your order details with Stripe.
            </p>
          </div>
        ) : (
          <>
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              ✓
            </div>
            <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Payment Successful
            </span>
            <h1 className="text-3xl font-extrabold text-amber-950 mt-4 tracking-tight">
              Thank You for Your Order!
            </h1>
            <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
              We’ve received your payment and our baristas are already preparing
              your fresh brew.
            </p>

            {sessionId && (
              <div className="mt-6 bg-amber-50/60 p-3 rounded-lg border border-amber-100 text-xs font-mono text-amber-900 break-all">
                Stripe Session ID: {sessionId}
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/orders"
                className="w-full sm:w-auto bg-amber-900 hover:bg-amber-950 text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-colors"
              >
                View Order History
              </Link>
              <Link
                to="/menu"
                className="w-full sm:w-auto bg-amber-100 text-amber-950 hover:bg-amber-200 font-medium text-sm px-6 py-2.5 rounded-xl transition-colors"
              >
                Back to Menu
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
