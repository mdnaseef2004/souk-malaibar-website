import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Phone, Mail, MapPin, ShoppingBag } from "lucide-react";
import { shops } from "../data/shops";

export function ShopDetailPage() {
  const { id } = useParams();
  const shop = shops.find((s) => s.id === id);

  if (!shop) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl mb-4 text-gray-900">Shop Not Found</h1>
          <Link
            to="/shops"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <ArrowLeft className="size-5 mr-2" />
            Back to All Shops
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/shops"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="size-5 mr-2" />
          Back to All Shops
        </Link>

        {/* Shop Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shop Image */}
            <div className="aspect-video md:aspect-square overflow-hidden bg-gray-100">
              <img
                src={shop.logo}
                alt={shop.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Shop Info */}
            <div className="p-8">
              <div className="mb-4">
                <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm mb-2">
                  {shop.category}
                </span>
                <h1 className="text-3xl md:text-4xl mb-4 text-gray-900">
                  {shop.name}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {shop.description}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                {shop.website && (
                  <a
                    href={shop.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-emerald-600 hover:text-emerald-700"
                  >
                    <ExternalLink className="size-5 mr-3" />
                    {shop.website}
                  </a>
                )}
                {shop.phone && (
                  <div className="flex items-center text-gray-700">
                    <Phone className="size-5 mr-3" />
                    {shop.phone}
                  </div>
                )}
                {shop.email && (
                  <div className="flex items-center text-gray-700">
                    <Mail className="size-5 mr-3" />
                    {shop.email}
                  </div>
                )}
                <div className="flex items-center text-gray-700">
                  <MapPin className="size-5 mr-3" />
                  Souk Malaibar, Markaz Knowledge City
                </div>
              </div>

              {/* Visit Website Button */}
              {shop.website && (
                <a
                  href={shop.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Visit Website
                  <ExternalLink className="ml-2 size-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <ShoppingBag className="size-6 mr-2 text-gray-900" />
            <h2 className="text-2xl md:text-3xl text-gray-900">
              Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shop.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-emerald-600">
                      AED {product.price}
                    </span>
                    {shop.website && (
                      <a
                        href={shop.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                      >
                        Inquire
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Shops */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl mb-6 text-gray-900">
            More {shop.category} Shops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shops
              .filter((s) => s.category === shop.category && s.id !== shop.id)
              .slice(0, 3)
              .map((relatedShop) => (
                <Link
                  key={relatedShop.id}
                  to={`/shops/${relatedShop.id}`}
                  className="group"
                >
                  <div className="aspect-video overflow-hidden bg-gray-100 rounded-lg mb-3">
                    <img
                      src={relatedShop.logo}
                      alt={relatedShop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {relatedShop.name}
                  </h3>
                  <p className="text-sm text-gray-600">{relatedShop.description}</p>
                </Link>
              ))}
          </div>
          {shops.filter((s) => s.category === shop.category && s.id !== shop.id)
            .length === 0 && (
            <p className="text-gray-600">No other shops in this category yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
