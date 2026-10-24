import { useState } from "react";
import type { MenuItem } from "../../data/coffeeData";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Image Container with Popular Badge */}
      <div className="relative h-48 w-full overflow-hidden bg-amber-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {item.isPopular && (
          <span className="absolute top-3 right-3 bg-amber-800 text-amber-50 text-xs px-2.5 py-1 rounded-full font-medium shadow">
            Popular ★
          </span>
        )}
        <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md font-medium">
          {item.category}
        </span>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-lg text-amber-950 group-hover:text-amber-800 transition-colors">
              {item.name}
            </h3>
            <span className="font-bold text-amber-900 text-lg">
              ${item.price.toFixed(2)}
            </span>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed mt-2 line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Quantity Controls & Add to Cart Button */}
        <div className="pt-2 flex items-center justify-between gap-3">
          {/* Quantity Counter */}
          <div className="flex items-center border border-amber-200 rounded-lg bg-amber-50/50 p-1">
            <button
              onClick={handleDecrement}
              className="w-7 h-7 flex items-center justify-center rounded text-amber-900 hover:bg-amber-200/60 font-bold transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-semibold text-gray-800">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="w-7 h-7 flex items-center justify-center rounded text-amber-900 hover:bg-amber-200/60 font-bold transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            type="button"
            onClick={() => alert(`Added ${quantity} x ${item.name} to cart!`)}
            className="flex-1 bg-amber-900 hover:bg-amber-950 text-white text-xs font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-sm"
          >
            <span>Add to Cart</span>
            <span className="text-amber-300 font-bold">
              • ${(item.price * quantity).toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
