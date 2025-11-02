import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []); 

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/videos/japrend-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/40 via-transparent to-[#0E0E0E]/80"></div>

      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="block text-white">JAPREND</span>
          <span className="block text-[#C9A227]">AUTHENTIC</span>
        </h1>

        <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
          Wear What You Believe.<br />
          Learn What You Wear.
        </p>

        <p className="text-base md:text-lg text-[#F4F4F4]/70 mb-12 max-w-2xl mx-auto font-light">
          From pesantren to the streets — from meaning to style.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-10 py-4 bg-[#C9A227] text-[#0E0E0E] font-bold text-lg tracking-wide hover:bg-[#F4F4F4] transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
          <button className="px-10 py-4 border-2 border-[#F4F4F4] text-[#F4F4F4] font-bold text-lg tracking-wide hover:bg-[#F4F4F4] hover:text-[#0E0E0E] transition-all duration-300 transform hover:scale-105">
            Explore the Culture
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10 text-[#C9A227]" />
      </button>
    </section>
  );
}