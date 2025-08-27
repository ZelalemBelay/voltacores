// src/App.jsx
import React, { useState } from "react";
import { Button } from "./Components/ui/Button";
import { Card, CardContent } from "./Components/ui/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const houses = [
  {
    id: 1,
    title: "Glass Horizon Villa",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    desc: "Where modern design meets serene luxury. Floor-to-ceiling glass, open spaces, and breathtaking sunset views.",
  },
  {
    id: 2,
    title: "Minimalist Sanctuary",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    desc: "Clean lines, elegant simplicity, and refined textures — a lifestyle of sophistication.",
  },
  {
    id: 3,
    title: "Lakeside Serenity",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    desc: "Wake up to still waters and modern luxury. Seamless harmony between nature and contemporary design.",
  },
  {
    id: 4,
    title: "Urban Sky Loft",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    desc: "Sleek interiors, panoramic city views, and energetic urban living with a touch of elegance.",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + houses.length) % houses.length);
  const nextSlide = () => setCurrent((current + 1) % houses.length);

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-28 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          <span className="text-white">VOLTA</span>
          <span className="text-yellow-300">CORES</span>.
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-white/90">
          Discover the pinnacle of modern living. Contemporary homes designed for elegance, luxury, and lifestyle.
        </p>
      </header>

      {/* Houses Carousel */}
      <section id="homes" className="flex flex-col items-center py-20 px-4 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
          Modern Homes for Discerning Tastes
        </h2>

        <div className="relative w-full max-w-5xl flex justify-center items-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 -translate-x-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors z-10"
          >
            <ArrowLeft className="w-6 h-6 text-indigo-600" />
          </button>

          {/* Card */}
          <Card className="rounded-3xl overflow-hidden shadow-2xl max-w-3xl transform hover:scale-105 transition-transform duration-500">
            <img
              src={houses[current].img}
              alt={houses[current].title}
              className="w-full h-80 md:h-96 object-cover"
            />
            <CardContent className="p-8 bg-white">
              <h3 className="text-3xl font-semibold mb-3 text-gray-900">{houses[current].title}</h3>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">{houses[current].desc}</p>
            </CardContent>
          </Card>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 translate-x-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors z-10"
          >
            <ArrowRight className="w-6 h-6 text-indigo-600" />
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Let's Make It Happen
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
          Have questions or want a tour? Fill out the form below and experience modern living like never before.
        </p>

        <form className="max-w-3xl mx-auto grid gap-6">
          {["Your Name", "Your Email", "Your Message"].map((placeholder, idx) => (
            <div key={idx} className="relative">
              {placeholder === "Your Message" ? (
                <textarea
                  placeholder={placeholder}
                  rows="5"
                  className="peer w-full p-5 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition-all"
                ></textarea>
              ) : (
                <input
                  type={placeholder === "Your Email" ? "email" : "text"}
                  placeholder={placeholder}
                  className="peer w-full p-5 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
              )}
              <label className="absolute left-5 top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-indigo-500 peer-focus:text-sm">
                {placeholder}
              </label>
            </div>
          ))}

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg py-4 rounded-2xl transition-all"
          >
            Send Message
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm md:text-base bg-white shadow-inner">
        © {new Date().getFullYear()} Voltacores. All rights reserved.
      </footer>
    </div>
  );
}