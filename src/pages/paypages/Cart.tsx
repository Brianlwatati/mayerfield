// src/pages/paypages/Cart.tsx

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../../context/CartContext";
import { createCheckoutSession } from "../../services/api";

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Inside Cart.tsx:
  const handleCheckout = async () => {
    setError(null);
    setLoading(true);

    try {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        navigate("/signin");
        return;
      }

      const payloadItems = cart.map((ci) => ({
        item_id: ci.item.id,
        name: ci.item.name,
        quantity: ci.quantity,
        price_at_purchase: Number(ci.item.price),
      }));

      // Service handles URL, headers, and error checking cleanly
      const data = await createCheckoutSession(payloadItems);

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Stripe checkout URL missing");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong during checkout.");
      setLoading(false);
    }
  };
  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl border border-amber-100 p-12 shadow-sm max-w-lg mx-auto">
          <span className="text-5xl">🛒</span>
          <h2 className="text-2xl font-bold text-amber-950 mt-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Explore our freshly brewed menu and add some delicious items to your
            cart!
          </p>
          <Link
            to="/menu"
            className="mt-6 inline-block bg-amber-900 hover:bg-amber-950 text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-amber-950 tracking-tight mb-8">
        Your Shopping Cart
      </h1>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((cartItem) => (
            <div
              key={cartItem.item.id}
              className="bg-white rounded-xl border border-amber-100 p-4 shadow-sm flex items-center justify-between gap-4"
            >
              <img
                src={cartItem.item.image}
                alt={cartItem.item.name}
                className="w-20 h-20 object-cover rounded-lg bg-amber-50 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-amber-950 text-base truncate">
                  {cartItem.item.name}
                </h3>
                <p className="text-amber-900 text-sm font-semibold mt-0.5">
                  ${Number(cartItem.item.price).toFixed(2)}
                </p>
                <div className="flex items-center space-x-3 mt-2">
                  <div className="flex items-center border border-amber-200 rounded-lg bg-amber-50/50">
                    <button
                      onClick={() => {
                        if (cartItem.quantity > 1) {
                          addToCart(cartItem.item, -1);
                        }
                      }}
                      className="px-2.5 py-1 text-amber-900 font-bold hover:bg-amber-200/50 rounded-l-lg transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-semibold text-gray-800">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(cartItem.item, 1)}
                      className="px-2.5 py-1 text-amber-900 font-bold hover:bg-amber-200/50 rounded-r-lg transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(cartItem.item.id)}
                    className="text-xs text-red-600 hover:underline font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="font-bold text-amber-950 text-base">
                  $
                  {(Number(cartItem.item.price) * cartItem.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-xs text-gray-500 hover:text-red-600 font-medium transition-colors"
          >
            Clear entire cart
          </button>
        </div>

        {/* Order Summary Box */}
        <div className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm h-fit space-y-4">
          <h3 className="text-lg font-bold text-amber-950 border-b border-amber-100 pb-3">
            Order Summary
          </h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Tax & Processing</span>
            <span>$0.00</span>
          </div>
          <div className="border-t border-amber-100 pt-3 flex justify-between text-base font-bold text-amber-950">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={handleCheckout}
            className="w-full bg-amber-900 hover:bg-amber-950 text-white font-medium py-3 rounded-xl text-sm transition-colors shadow-sm disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Redirecting to Stripe...</span>
              </>
            ) : (
              <span>Proceed to Checkout</span>
            )}
          </button>
          <p className="text-[11px] text-center text-gray-500 mt-2">
            Secure payments processed by Stripe. Test cards accepted.
          </p>
        </div>
      </div>
    </div>
  );
}
