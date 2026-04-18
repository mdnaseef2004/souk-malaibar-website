import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Phone, Mail, MapPin, ShoppingBag, Youtube, Instagram } from "lucide-react";
import { shops } from "../data/shops";
import { useState, useEffect } from "react";

export function ShopDetailPage() {
  const { id } = useParams();
  const shop = shops.find((s) => s.id === id);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const shopSlides: string[] = shop?.id === "1"
    ? ["/MS OIL1.png", "/MS OIL2.png", "/MS OIL3.png", "/MS OIL4.jpg"]
    : shop?.id === "2"
      ? ["/Ajmal1.jpg", "/Ajmal2.jpg", "/Ajmal3.jpg", "/Ajmal4.jpg", "/Ajmal5.jpg", "/Ajmal6.jpg"]
      : shop?.id === "3" || shop?.id === "5"
        ? ["/aydi1.jpg", "/aydi2.jpg", "/aydi3.jpg"]
        : shop?.id === "4"
          ? ["/hijabi1.jpg", "/hijabi2.jpg", "/hijabi3.jpg", "/hijabi4.jpg", "/hijabi5.jpg", "/hijabi6.jpg"]
          : shop?.id === "13"
            ? ["/Cafesufi1.jpg", "/Cafesufi2.jpg", "/Cafesufi3.jpg", "/Cafesufi4.jpg", "/Cafesufi5.jpg", "/Cafesufi6.jpg", "/Cafesufi7.jpg"]
            : shop?.id === "14"
              ? ["/jibruworld1.jpg", "/jibruworld2.jpg", "/jibruworld3.jpg", "/jibruworld4.jpg"]
              : shop?.id === "15"
                ? ["/gencondigital1.jpg", "/gencondigital2.jpg", "/gencondigital3.jpg", "/gencondigital4.jpg", "/gencondigital5.jpg", "/gencondigital6.jpg"]
                : shop?.id === "16"
                  ? ["/alraiqa1.jpg", "/alraiqa2.jpg", "/alraiqa3.jpg", "/alraiqa4.jpg", "/alraiqa5.jpg", "/alraiqa6.jpg"]
                  : [];

  useEffect(() => {
    if (shopSlides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % shopSlides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [shop?.id, shopSlides.length]);

  if (!shop) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl mb-4 text-gray-900">Shop Not Found</h1>
          <Link
            to="/shops"
            className="inline-flex items-center text-red-600 hover:text-red-700"
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
            <div className="aspect-video md:aspect-square overflow-hidden bg-gray-100 relative">
              {shopSlides.length > 0 ? (
                shopSlides.map((slide, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{
                      opacity: currentSlideIndex === index ? 1 : 0,
                      backgroundImage: `url('${slide}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                ))
              ) : (
                <img
                  src={shop.logo}
                  alt={shop.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Shop Info */}
            <div className="p-8">
              <div className="mb-4">
                <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm mb-2">
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
                    className="flex items-center text-red-600 hover:text-red-700"
                  >
                    <ExternalLink className="size-5 mr-3" />
                    {shop.website}
                  </a>
                )}
                {shop.phone && (
                  <div className="flex items-center space-x-6 text-gray-700">
                    <a
                      href={`tel:${shop.phone.replace(/\s+/g, "")}`}
                      className="flex items-center hover:text-red-600 transition-colors"
                    >
                      <Phone className="size-5 mr-3" />
                      {shop.phone}
                    </a>
                    <a
                      href={`https://wa.me/${shop.phone.replace(/[\p{Z}\s+-]/gu, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 hover:text-green-700 transition-colors font-medium text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                )}
                {shop.email && (
                  <a
                    href={`mailto:${shop.email}`}
                    className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <Mail className="size-5 mr-3" />
                    {shop.email}
                  </a>
                )}
                {shop.youtube && (
                  <a
                    href={shop.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <Youtube className="size-5 mr-3 text-red-600" />
                    YouTube Channel
                  </a>
                )}
                {shop.instagram && (
                  <a
                    href={shop.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    <Instagram className="size-5 mr-3 text-pink-600" />
                    Instagram
                  </a>
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
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Visit Website
                  <ExternalLink className="ml-2 size-5" />
                </a>
              )}
            </div>
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
                  <h3 className="text-gray-900 group-hover:text-red-600 transition-colors">
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
