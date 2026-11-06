// src/pages/paypages/CheckoutCancel.tsx

import { Link } from "react-router";

export default function CheckoutCancel() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-2xl border border-amber-100 p-8 shadow-sm">
        <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          !
        </div>
        <h1 className="text-2xl font-extrabold text-amber-950 tracking-tight">
          Payment Canceled
        </h1>
        <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
          Your order was not completed. Don't worry—your cart items are still
          saved if you wish to try again.
        </p>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <Link
            to="/cart"
            className="bg-amber-900 hover:bg-amber-950 text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-colors"
          >
            Return to Cart
          </Link>
          <Link
            to="/menu"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm px-6 py-2.5 rounded-xl transition-colors"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
