import { useState } from "react";
import { Link } from "react-router";
import { Search, ExternalLink, Phone, Mail, Youtube, Instagram, Grid, List } from "lucide-react";
import { shops, categories } from "../data/shops";

export function ShopsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredShops = shops.filter((shop) => {
    const matchesSearch =
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || shop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2 text-gray-900">
            All Shops
          </h1>
          <p className="text-gray-600">
            Explore our collection of 140+ shops across various categories
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search shops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid"
                    ? "bg-white shadow-sm text-red-600"
                    : "text-gray-600"
                  }`}
              >
                <Grid className="size-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list"
                    ? "bg-white shadow-sm text-red-600"
                    : "text-gray-600"
                  }`}
              >
                <List className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredShops.length} {filteredShops.length === 1 ? "shop" : "shops"}
          </p>
        </div>

        {/* Shops Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map((shop) => (
              <div
                key={shop.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={shop.logo}
                    alt={shop.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl text-gray-900">
                      {shop.name}
                    </h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                      {shop.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {shop.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {shop.website && (
                      <a
                        href={shop.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-red-600 hover:text-red-700"
                      >
                        <ExternalLink className="size-4 mr-1" />
                        Website
                      </a>
                    )}
                    {shop.phone && (
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <Phone className="size-4 mr-1" />
                        {shop.phone}
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/shops/${shop.id}`}
                    className="block w-full text-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    View Shop
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredShops.map((shop) => (
              <div
                key={shop.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 shrink-0 aspect-video md:aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={shop.logo}
                      alt={shop.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl text-gray-900 mb-1">
                          {shop.name}
                        </h3>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                          {shop.category}
                        </span>
                      </div>
                      <Link
                        to={`/shops/${shop.id}`}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        View Shop
                      </Link>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {shop.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {shop.website && (
                        <a
                          href={shop.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-red-600 hover:text-red-700 truncate"
                        >
                          <ExternalLink className="size-4 mr-1 shrink-0" />
                          <span className="truncate">Website</span>
                        </a>
                      )}
                      {shop.youtube && (
                        <a
                          href={shop.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-red-600 hover:text-red-700"
                        >
                          <Youtube className="size-4 mr-1 shrink-0" />
                          YouTube
                        </a>
                      )}
                      {shop.instagram && (
                        <a
                          href={shop.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-pink-600 hover:text-pink-700"
                        >
                          <Instagram className="size-4 mr-1 shrink-0" />
                          Instagram
                        </a>
                      )}
                      {shop.phone && (
                        <span className="inline-flex items-center text-gray-600">
                          <Phone className="size-4 mr-1 shrink-0" />
                          <span className="truncate">{shop.phone}</span>
                        </span>
                      )}
                      {shop.email && (
                        <span className="inline-flex items-center text-gray-600 truncate max-w-xs">
                          <Mail className="size-4 mr-1 shrink-0" />
                          <span className="truncate">{shop.email}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredShops.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No shops found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
