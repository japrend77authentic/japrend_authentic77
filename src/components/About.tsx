import { useEffect, useState, useRef } from 'react';

export default function About() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-4 bg-[#2B2B2B]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#C9A227]">
              About the Brand
            </h2>
            <p className="text-lg md:text-xl text-[#F4F4F4] mb-6 leading-relaxed">
              Japrend Authentic was born from the spirit of Indonesian youth who carry{' '}
              <span className="text-[#C9A227] font-semibold">faith, culture, and creativity</span>{' '}
              into every stitch.
            </p>
            <p className="text-lg md:text-xl text-[#F4F4F4] mb-6 leading-relaxed">
              We don't just design clothes — we express values. Each piece tells a story of{' '}
              <span className="font-semibold">identity, courage, and authenticity.</span>
            </p>
            <div className="mt-10 space-y-4">
              <p className="text-2xl font-serif italic text-[#C9A227]">
                "We wear culture. We live meaning."
              </p>
              <p className="text-xl text-[#F4F4F4]">
                From tradition to streetwear — Japrend Authentic keeps it real.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative h-[500px] md:h-[600px] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Japrend Authentic Culture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
