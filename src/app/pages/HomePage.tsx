import { Link } from "react-router";
import { ArrowRight, Store, ShoppingBag, MapPin, Sparkles } from "lucide-react";
import { categories } from "../data/shops";
import { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const nodeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimer: number;
          let startTime: number;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              startTimer = requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          startTimer = requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);

    return () => {
      if (nodeRef.current) observer.unobserve(nodeRef.current);
    };
  }, [end, duration, hasAnimated]);

  return <h3 ref={nodeRef} className="text-4xl mb-2 text-gray-900">{count}{suffix}</h3>;
};

const RevealOnScroll = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

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

export function HomePage() {
  const displayCategories = categories.filter(c => c !== "All");
  const backgroundGifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11];
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % backgroundGifs.length);
    }, 3000); // Change GIF every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundGifs.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-red-700 via-rose-600 to-red-800 text-white pt-12 pb-32 md:pt-20 md:pb-48 min-h-[400px] flex items-center overflow-hidden"
      >
        {/* Animated GIF Background */}
        <div className="absolute inset-0 z-0">
          {backgroundGifs.map((gif, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: currentGifIndex === index ? 1 : 0,
                backgroundImage: `url('${gif}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom'
              }}
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mt-16 md:mt-24">
            <h1 className="text-4xl md:text-6xl mb-6">
              Souk Malaibar
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-50">
              A Complete Shopping Experience at the Heart of Markaz Knowledge City
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shops"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-700 rounded-lg hover:bg-red-50 transition-colors"
              >
                Explore Shops
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3 bg-red-600/30 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-red-600/40 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white overflow-hidden">
        <RevealOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="size-8 text-red-600" />
              </div>
              <AnimatedCounter end={150} suffix="+" />
              <p className="text-gray-600">Shops</p>
            </div>
            <div className="p-6">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="size-8 text-rose-600" />
              </div>
              <AnimatedCounter end={12} suffix="+" />
              <p className="text-gray-600">Categories</p>
            </div>
            <div className="p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="size-8 text-red-600" />
              </div>
              <h3 className="text-4xl mb-2 text-gray-900">Premium</h3>
              <p className="text-gray-600">Shopping Experience</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <RevealOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
              More Than Just Shopping
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Strategically located at the very nucleus of Markaz Knowledge City, Souk Malaibar is a vibrant commercial hub that blends convenience, culture, and community. Designed to offer more than just shopping, we deliver a truly memorable experience for visitors from all walks of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl mb-4 text-gray-900">Vast Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Spread across a vast area, Souk Malaibar features over 150 shops, each offering a diverse range of products and services. The marketplace is known for its wide variety and carefully curated selection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl mb-4 text-gray-900">Cultural Heritage</h3>
              <p className="text-gray-600 leading-relaxed">
                Gracefully surrounding Jamiul Futuh, the Indian Grand Masjid, our souk adds a spiritual and cultural dimension to the shopping experience, creating a unique destination where commerce meets community and tradition.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
                What You Can Explore
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The diversity of shops is the true speciality of Souk Malaibar, ensuring that every visitor finds something of value and interest.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayCategories.map((category, index) => {
              const bgImages: Record<string, string> = {
                "Perfumes": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
                "Islamic Products": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80",
                "Stationery": "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&w=600&q=80",
                "Groceries": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
                "Electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
                "Cosmetics": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80",
                "Dry Fruits": "/alraiqa1.jpg",
                "Fashion": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80",
                "Jewelry": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
                "Cafe/Bakes": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
                "Mobile Accessories": "https://images.unsplash.com/photo-1601524909162-ae8725290836?auto=format&fit=crop&w=600&q=80",
                "Home Decor": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
              };
              const bgImg = bgImages[category] || "https://images.unsplash.com/photo-1472851294608-062f124dcb02?auto=format&fit=crop&w=600&q=80";

              return (
                <RevealOnScroll key={category} delay={index * 100}>
                  <Link
                    to={`/category/${encodeURIComponent(category)}`}
                    className="relative block h-32 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url('${bgImg}')` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <p className="text-white font-medium text-lg text-center tracking-wide shadow-black drop-shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        {category}
                      </p>
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-rose-600 text-white overflow-hidden">
        <RevealOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Inspired by Tradition
          </h2>
          <p className="text-lg mb-8 text-red-50 leading-relaxed">
            Inspired by the historic Prophet's Souk in Madina, Souk Malaibar reflects the timeless values of ethical trade, fairness, and community-centered commerce. It carries forward a legacy where marketplaces were not only centers of business, but also spaces of trust, simplicity, and social harmony.
          </p>
          <Link
            to="/shops"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-700 rounded-lg hover:bg-red-50 transition-colors"
          >
            Discover All Shops
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  );
}
