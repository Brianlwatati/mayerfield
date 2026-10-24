interface MenuSearchFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function MenuSearchFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: MenuSearchFilterProps) {
  return (
    <div className="space-y-6 mb-10">
      {/* Search Bar Input */}
      <div className="max-w-md mx-auto relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          🔍
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search espresso, croissant, cold brew..."
          className="w-full pl-10 pr-4 py-3 rounded-full border border-amber-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm text-gray-800 placeholder-gray-400 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 text-xs font-bold"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-amber-900 text-white shadow-md scale-105"
                  : "bg-amber-100/60 text-amber-900 hover:bg-amber-200/80"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
