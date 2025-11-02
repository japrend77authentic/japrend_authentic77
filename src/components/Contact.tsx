import { useEffect, useState, useRef } from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      ref={sectionRef}
      className="py-24 md:py-32 px-4 bg-[#0E0E0E] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B34B34] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#F4F4F4]">
            Get in Touch
          </h2>
          <p className="text-xl text-[#F4F4F4] mb-12 font-light">
            Have questions or want to collaborate? Reach out to us.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="https://instagram.com/japrend_authentic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#C9A227] text-[#C9A227] font-semibold hover:bg-[#C9A227] hover:text-[#0E0E0E] transition-all duration-300 transform hover:scale-105 w-full md:w-auto justify-center"
            >
              <Instagram className="w-5 h-5" />
              @japrend_authentic
            </a>

            <a
              href="https://wa.me/6285792280283"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#C9A227] text-[#C9A227] font-semibold hover:bg-[#C9A227] hover:text-[#0E0E0E] transition-all duration-300 transform hover:scale-105 w-full md:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Chat
            </a>

            <a
              href="mailto:japrend77authentic@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#C9A227] text-[#C9A227] font-semibold hover:bg-[#C9A227] hover:text-[#0E0E0E] transition-all duration-300 transform hover:scale-105 w-full md:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>

          <div className="mt-16 space-y-4">
            <p className="text-3xl md:text-4xl font-serif italic text-[#C9A227]">
              "Stay real. Stay authentic."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
