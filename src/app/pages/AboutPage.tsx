import { MapPin, Building2, Heart, Users } from "lucide-react";
import { useState, useEffect } from "react";
import gif1 from "../../imports/gif1.gif";
import gif2 from "../../imports/gif2.gif";
import gif3 from "../../imports/gif3.gif";
import gif4 from "../../imports/gif4.gif";
import gif5 from "../../imports/gif5.gif";
import gif6 from "../../imports/gif6.gif";
import gif7 from "../../imports/gif7.gif";
import gif8 from "../../imports/gif8.gif";
import gif9 from "../../imports/gif9.gif";
import gif10 from "../../imports/gif10.gif";
import gif11 from "../../imports/gif11.gif";

export function AboutPage() {
  const backgroundGifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11];
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % backgroundGifs.length);
    }, 3000); // Change GIF every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundGifs.length]);
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-700 to-rose-600 text-white rounded-2xl p-8 md:p-12 mb-8">
          <h1 className="text-3xl md:text-5xl mb-4">
            About Souk Malaibar
          </h1>
          <p className="text-xl text-red-50 max-w-3xl">
            A Complete Shopping Experience at the Heart of Markaz Knowledge City
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <MapPin className="size-8 text-red-600 mr-3" />
                <a 
                  href="https://maps.app.goo.gl/q5DVN4bHnBXEREjL6?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-900 hover:text-red-600 transition-colors cursor-pointer"
                >
                  Strategic Location
                </a>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Souk Malaibar is strategically located at the very nucleus of Markaz Knowledge City, making it a vibrant commercial hub that blends convenience, culture and community. Designed to offer more than just shopping, Souk Malaibar delivers a truly memorable experience for visitors from all walks of life.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Building2 className="size-8 text-red-600 mr-3" />
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
                <Heart className="size-8 text-red-600 mr-3" />
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
                <Users className="size-8 text-red-600 mr-3" />
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
                  <span className="text-red-600 mr-2">•</span>
                  Premium collections of perfumes
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Islamic cultural and lifestyle products
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Stationery and educational supplies
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Groceries and daily essentials
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Electrical and electronic items
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Cosmetics and personal care
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-3 text-gray-900">And More</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Automobile accessories
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Fashion and modest wear
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Jewelry and luxury watches
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Fresh bakery and pastries
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Mobile phone accessories
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-video rounded-xl overflow-hidden">
            <img
              src="/masjid.jpg"
              alt="Jamiul Futuh Masjid"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden relative">
            {backgroundGifs.map((gif, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{
                  opacity: currentGifIndex === index ? 1 : 0,
                  backgroundImage: `url('${gif}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            ))}
          </div>
          <div className="aspect-video rounded-xl overflow-hidden">
            <img
              src="/nightview.gif"
              alt="Night View"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
