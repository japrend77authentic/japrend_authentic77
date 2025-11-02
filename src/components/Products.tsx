import { useEffect, useState, useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Heritage Hoodie',
    subtitle: 'Fleece Colombia',
    image: 'https://images.pexels.com/photos/8142970/pexels-photo-8142970.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Layered Street Jacket',
    subtitle: 'Urban Edition',
    image: 'https://images.pexels.com/photos/1192335/pexels-photo-1192335.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Zipper Culture Edition',
    subtitle: 'Signature Series',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Authentic Batik Street Tee',
    subtitle: 'Heritage Print',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'NFC Patch Accessory',
    subtitle: 'Tech Meets Culture',
    image: 'https://images.pexels.com/photos/6069932/pexels-photo-6069932.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    name: 'EthnoTech Wear',
    subtitle: 'Flagship Product',
    image: 'https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section ref={sectionRef} className="py-24 md:py-32 px-4 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#F4F4F4]">
            Featured Collection
          </h2>
          <p className="text-xl text-[#C9A227] font-light">
            Limited pieces. Limitless meaning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative overflow-hidden bg-[#2B2B2B] transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#F4F4F4] mb-2 group-hover:text-[#C9A227] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-[#F4F4F4] text-sm tracking-wide opacity-80">
                  {product.subtitle}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="px-12 py-4 bg-transparent border-2 border-[#C9A227] text-[#C9A227] font-bold text-lg hover:bg-[#C9A227] hover:text-[#0E0E0E] transition-all duration-300 transform hover:scale-105">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}
