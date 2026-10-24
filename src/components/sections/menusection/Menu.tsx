import { useState } from "react";
import { MENU_ITEMS, CATEGORIES } from "../../data/coffeeData";
import MenuItemCard from "./MenuItemCard";
import MenuSearchFilter from "./MenuSearchFilter";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter items based on category and search query
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-16 bg-amber-50/30">
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

        {/* 1. Search & Category Filters Component */}
        <MenuSearchFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 2. Menu Item Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
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
      </div>
    </section>
  );
}
