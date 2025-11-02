import { useEffect, useState } from 'react';

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0E0E0E] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#C9A227] mb-4 animate-pulse">
          JA
        </h1>
        <p className="text-[#F4F4F4] text-sm tracking-[0.3em]">JAPREND AUTHENTIC</p>
      </div>
    </div>
  );
}
