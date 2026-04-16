import { useParams, Link } from "react-router";
import { ArrowLeft, Store } from "lucide-react";
import { shops } from "../data/shops";

export function CategoryPage() {
  const { category } = useParams();
  const categoryShops = shops.filter((shop) => shop.category === category);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="size-5 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Store className="size-8 mr-3 text-emerald-600" />
            <h1 className="text-3xl md:text-4xl text-gray-900">
              {category}
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Discover {categoryShops.length} {categoryShops.length === 1 ? "shop" : "shops"} in this category
          </p>
        </div>

        {/* Shops Grid */}
        {categoryShops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryShops.map((shop) => (
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
                  <h3 className="text-xl mb-2 text-gray-900">
                    {shop.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {shop.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {shop.products.length} products
                    </span>
                    <Link
                      to={`/shops/${shop.id}`}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                    >
                      View Shop
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl">
            <p className="text-gray-600 text-lg">
              No shops found in this category
            </p>
            <Link
              to="/shops"
              className="inline-block mt-4 text-emerald-600 hover:text-emerald-700"
            >
              View All Shops
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
