import { useEffect, useState, useRef } from 'react';
import { Instagram } from 'lucide-react';

const communityImages = [
  'https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export default function Community() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-4 bg-[#2B2B2B]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#F4F4F4]">
            Join the Movement.
            <br />
            <span className="text-[#C9A227]">Stay Authentic.</span>
          </h2>
          <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto leading-relaxed font-light">
            We're more than a brand — we're a movement of cultural expression.
            <br />
            Follow our journey, share your style, and be part of Japrend Authentic.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {communityImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden aspect-square group cursor-pointer"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={image}
                alt={`Community ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0E0E0E] opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-[#C9A227]" />
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://instagram.com/japrend_authentic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A227] text-[#0E0E0E] font-bold text-lg hover:bg-[#B34B34] transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Instagram className="w-6 h-6" />
            Follow @japrend_authentic
          </a>

          <p className="mt-8 text-2xl font-serif italic text-[#C9A227]">
            "Not just fashion, it's a reflection."
          </p>
        </div>
      </div>
    </section>
  );
}
