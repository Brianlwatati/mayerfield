import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import MenuSearchFilter from "./MenuSearchFilter";
import { fetchMenuItems } from "../../../services/api";
import type { MenuItem } from "../../../types/menutype";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // State for data returned from the backend
  const [items, setItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMenuItems()
      .then((data) => {
        // data matches: { categories: [...], items: [...] }
        setItems(data.items || []);

        // If categories are returned from API, use them (ensuring "All" is included)
        if (data.categories) {
          setCategories(data.categories);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading menu:", err);
        setError(err.message || "Failed to load menu items.");
        setLoading(false);
      });
  }, []);

  // Filter items based on category and search query
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-16 bg-amber-50/30 min-h-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
            Our Menu
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950 mt-3 tracking-tight">
            Explore Freshly Brewed Delights
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Handcrafted beverages and freshly baked treats prepared with love
            every single morning.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium text-amber-900">
              Brewing your menu items...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-red-200 shadow-sm max-w-xl mx-auto p-6">
            <span className="text-4xl">⚠️</span>
            <h3 className="text-lg font-bold text-red-700 mt-2">
              Could not load menu
            </h3>
            <p className="text-sm text-gray-600 mt-1">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-amber-900 text-white text-xs font-medium rounded-lg hover:bg-amber-950 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Search & Dynamic Categories Filter Component */}
            <MenuSearchFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* Menu Item Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-amber-200">
                <span className="text-4xl">☕</span>
                <h3 className="text-lg font-bold text-amber-900 mt-2">
                  No coffee found
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Try searching for something else or change category filter.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-amber-800 text-white text-xs font-medium rounded-lg hover:bg-amber-900 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
