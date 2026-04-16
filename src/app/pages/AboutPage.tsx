import { MapPin, Building2, Heart, Users } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-700 to-teal-600 text-white rounded-2xl p-8 md:p-12 mb-8">
          <h1 className="text-3xl md:text-5xl mb-4">
            About Souk Malaibar
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl">
            A Complete Shopping Experience at the Heart of Markaz Knowledge City
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <MapPin className="size-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl text-gray-900">
                  Strategic Location
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Souk Malaibar is strategically located at the very nucleus of Markaz Knowledge City, making it a vibrant commercial hub that blends convenience, culture and community. Designed to offer more than just shopping, Souk Malaibar delivers a truly memorable experience for visitors from all walks of life.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Building2 className="size-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl text-gray-900">
                  Vast Marketplace
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Spread across a vast area, Souk Malaibar features over 140 shops, each offering a diverse range of products and services. The marketplace is known for its wide variety and carefully curated selection, making it a one-stop destination for everyday needs as well as unique finds.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Heart className="size-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl text-gray-900">
                  Cultural Heritage
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Souk Malaibar gracefully surrounds Jamiul Futuh, the Indian Grand Masjid, adding a spiritual and cultural dimension to the shopping experience. This unique setting enhances the atmosphere, making it not just a marketplace, but a destination where commerce meets community and tradition.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Users className="size-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl text-gray-900">
                  Inspired by Tradition
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Inspired by the historic Prophet's Souk in Madina, Souk Malaibar reflects the timeless values of ethical trade, fairness and community-centered commerce. It carries forward a legacy where marketplaces were not only centers of business, but also spaces of trust, simplicity and social harmony.
              </p>
            </div>
          </div>
        </div>

        {/* What You Can Explore */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-900">
            What You Can Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg mb-3 text-gray-900">Product Categories</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Premium collections of perfumes
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Islamic cultural and lifestyle products
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Stationery and educational supplies
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Groceries and daily essentials
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Electrical and electronic items
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Cosmetics and personal care
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-3 text-gray-900">And More</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Automobile accessories
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Fashion and modest wear
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Jewelry and luxury watches
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Fresh bakery and pastries
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Mobile phone accessories
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Home decor and furniture
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">
            The diversity of shops is the true speciality of Souk Malaibar, ensuring that every visitor finds something of value and interest.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600383963284-91ef78fc9b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYXJjaGl0ZWN0dXJlJTIwbW9zcXVlfGVufDF8fHx8MTc3NjMxNjA3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Jamiul Futuh Masjid"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1770023895508-ac4a715e7a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMG1hbGwlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzYzMTYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Souk Malaibar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
