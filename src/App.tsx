import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setButtonVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (buttonRef.current) observer.observe(buttonRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToCatalog = () => {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0E0E0E] text-[#F4F4F4] font-sans">
      {/* === HERO SECTION (with Video Background) === */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-[#C9A227]">JAPREND</span> <br />
            <span className="text-[#F4F4F4]">AUTHENTIC</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#F4F4F4]/90 mb-12 max-w-3xl mx-auto font-light tracking-wide">
            Wear What You Believe. Learn What You Wear.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToCatalog}
              className="px-10 py-4 bg-[#C9A227] text-[#0E0E0E] font-bold text-lg tracking-wide hover:bg-[#F4F4F4] transition-all duration-300 transform hover:scale-105"
            >
              View Catalog
            </button>
            <a
              href="https://www.linkedin.com/in/liem-hao-6a5273383/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-[#F4F4F4] text-[#F4F4F4] font-bold text-lg tracking-wide hover:bg-[#F4F4F4] hover:text-[#0E0E0E] transition-all duration-300 transform hover:scale-105"
            >
              Visit LinkedIn
            </a>
          </div>
        </div>

        <button
          onClick={scrollToCatalog}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-10 h-10 text-[#C9A227]" />
        </button>
      </section>

      {/* === CATALOG GRID SECTION === */}
      <section id="catalog" className="py-24 bg-[#0E0E0E]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-3">
            Ethnotech <span className="text-[#C9A227]">Wear</span>
          </h2>
          <p className="text-[#F4F4F4]/70 text-lg">
            From pesantren to the streets — timeless culture in every stitch.
          </p>
        </div>

        {/* === Product Grid === */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <img
                src={`/images/ethnotech${i + 1}.png`}
                alt={`Ethnotech Wear ${i + 1}`}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Ethnotech Wear #{i + 1}
                </h3>
                <p className="text-[#C9A227] mb-4 font-medium">Rp 519.000</p>
                <a
                  href="https://wa.me/6285792280283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#C9A227] text-black font-bold rounded-md hover:bg-[#F4F4F4] transition-all"
                >
                  View Product
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* === Description below catalog === */}
        <div className="text-center mt-20 max-w-3xl mx-auto text-[#F4F4F4]/80 leading-relaxed text-lg">
         <p>
  Setiap karya <span className="text-[#C9A227] font-semibold">Japrend Authentic</span> dibuat dengan ketelitian dan makna spiritual yang mendalam — 
  memadukan nilai budaya <span className="text-[#C9A227] font-semibold">Jawa</span> yang elegan dengan sentuhan 
  <span className="text-[#C9A227] font-semibold"> kaligrafi Arab</span> sebagai simbol identitas santri dan pesan moral.
  <br /><br />
  Dengan sentuhan teknologi <span className="text-[#C9A227] font-semibold">NFC terintegrasi</span>, setiap produk tidak hanya menjamin 
  keaslian, tapi juga membuka akses ke <span className="text-[#C9A227] font-semibold">layanan edukatif interaktif</span> 
  — menghadirkan pengalaman belajar, nilai, dan filosofi di balik setiap desain.
  <br /><br />
  Kami juga menyediakan layanan <span className="text-[#C9A227] font-semibold">custom dan konveksi profesional</span> 
  untuk kebutuhan merek, komunitas, atau institusi Anda. 
  Setiap jahitan adalah pernyataan: perpaduan antara <span className="text-[#C9A227] font-semibold">modest streetwear</span>, 
  warisan budaya, dan nilai spiritual yang autentik.
</p>
        </div>

        {/* === ORDER CUSTOM BUTTON (fade-in animation) === */}
        <div
          ref={buttonRef}
          className={`text-center mt-16 transition-all duration-1000 transform ${
            buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://wa.me/6285792280283?text=Halo%20Japrend%20Authentic%2C%20saya%20tertarik%20pesan%20custom%20%2F%20konveksi%20streetwear."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A227] text-[#0E0E0E] px-8 py-3 font-semibold text-lg rounded-md hover:bg-[#F4F4F4] transition-all duration-300"
          >
            Order Custom / Konveksi
          </a>
        </div>
      </section>

      {/* === SHOWCASE SLIDER SECTION === */}
      <section className="py-24 bg-[#111]">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-3">
            Showcase <span className="text-[#C9A227]">Collection</span>
          </h2>
          <p className="text-[#F4F4F4]/70 text-lg">
            Slide through the culture — experience every detail.
          </p>
        </div>
        <div className="flex overflow-x-auto gap-8 px-8 snap-x scrollbar-hide">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] bg-[#1A1A1A] rounded-2xl overflow-hidden snap-center hover:scale-105 transition-all duration-300"
            >
              <img
                src={`/images/showcase${i + 13}.png`}
                alt={`Showcase ${i + 13}`}
                className="w-full h-[450px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* === URBAN CORE DROP === */}
      <section className="bg-[#0E0E0E] text-[#F4F4F4] py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-3">
            Urban <span className="text-[#C9A227]">Culture</span> Drop
          </h2>
          <p className="text-[#F4F4F4]/70 text-lg">
            Where modest roots meet modern expression.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
            <img
              src="/images/ethnotech20.png"
              alt="Ethnotech Wear – Urban Core Edition"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-2">
                Ethnotech Wear – Urban Core Edition
              </h3>
              <p className="text-[#C9A227] mb-4 font-medium">Rp 539.000</p>
              <a
                href="https://wa.me/6285792280283"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#C9A227] text-black font-bold rounded-md hover:bg-[#F4F4F4] transition-all"
              >
                View Product
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-[#0A0A0A] text-[#F4F4F4]/70 py-10 text-center text-sm">
        <p>© 2025 Japrend Authentic — THE LIVING HERITAGE WEAR</p>
      </footer>
            {/* === GET IN TOUCH SECTION === */}
      <section className="bg-[#0E0E0E] text-center py-24 px-6">
        <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-[#F4F4F4]/80 mb-10 text-lg">
          Have questions or want to collaborate? Reach out to us.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a
            href="https://instagram.com/japrend_authentic"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C9A227] text-[#C9A227] px-8 py-3 font-semibold hover:bg-[#C9A227] hover:text-[#0E0E0E] transition-all duration-300"
          >
            @japrend_authentic
          </a>

          <a
            href="https://wa.me/6285792280283"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C9A227] text-[#C9A227] px-8 py-3 font-semibold hover:bg-[#C9A227] hover:text-[#0E0E0E] transition-all duration-300"
          >
            WhatsApp Chat
          </a>

          <a
            href="mailto:japrend77authentic@gmail.com"
            className="border border-[#C9A227] text-[#C9A227] px-8 py-3 font-semibold hover:bg-[#C9A227] hover:text-[#0E0E0E] transition-all duration-300"
          >
            Email Us
          </a>
        </div>

        <p className="italic text-[#C9A227] text-xl mb-20">
          "Stay real. Stay authentic."
        </p>
      </section>

      {/* === FOOTER SECTION === */}
      <footer className="bg-[#0A0A0A] text-center py-10 text-[#F4F4F4]/70">
        <h3 className="text-[#C9A227] font-bold text-lg mb-2">
          JAPREND AUTHENTIC
        </h3>
        <p className="uppercase tracking-wide mb-3 text-sm">
          WEAR WHAT YOU BELIEVE • LEARN WHAT YOU WEAR
        </p>
        <p className="text-xs mb-4">
          © 2025 Japrend Authentic. All Rights Reserved.
        </p>
        <p className="italic text-[#C9A227]">"Stay real. Stay authentic."</p>
      </footer>
    </div>
    
  );
}
