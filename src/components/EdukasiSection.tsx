import React, { useState } from "react";

interface Materi {
  id: number;
  title: string;
  shortDesc: string;
  content: string;
}

const materiList: Materi[] = [
  {
    id: 1,
    title: "Budaya Jawa: Bahasa Sunyi yang Menyentuh Batin",
    shortDesc:
      "Budaya Jawa bukan sekadar warisan, tapi cara memahami diri lewat kesadaran dan keseimbangan hidup.",
    content: `
Budaya Jawa bukan cuma wayang, batik, atau tembang. Ia adalah bahasa sunyi yang digunakan manusia untuk mengenal dirinya. 
Dalam budaya Jawa, diam bukan pasrah — tapi bentuk tertinggi dari kesadaran. Nilai seperti "tepa slira", "eling lan waspada", dan "nrimo ing pandum" 
bukan berarti menyerah, tapi mengajak manusia untuk hidup selaras dengan ritme alam.

Di tengah hiruk-pikuk modernitas, Japrend Authentic menghidupkan kembali nada tenang budaya Jawa dalam desain streetwear.
Karena bagi kami, "cool" bukan tentang terlihat keras — tapi tentang mampu tenang di tengah kebisingan.
    `,
  },
  {
    id: 2,
    title: "Nilai Santri: Jiwa yang Tidak Pernah Padam",
    shortDesc:
      "Santri adalah simbol kejujuran, kesabaran, dan kesungguhan — wajah Indonesia yang sesungguhnya.",
    content: `
Santri adalah jiwa yang tenang tapi menyala. Dari mereka kita belajar disiplin, adab, dan kesederhanaan.
Nilai-nilai santri tidak lekang oleh waktu — "al-adabu fauqal ‘ilmi" (adab di atas ilmu) menjadi pondasi Japrend Authentic dalam setiap karya.

Setiap jahitan bukan hanya pola kain, tapi doa yang dijahit dalam diam. 
Dari pesantren ke jalanan, Japrend Authentic membawa semangat bahwa kesungguhan adalah gaya, dan kesederhanaan adalah kekuatan.
    `,
  },
  {
    id: 3,
    title: "Menjembatani Tradisi dan Modernitas",
    shortDesc:
      "Fashion adalah bahasa baru budaya — tempat tradisi dan modernitas berdialog tanpa saling meniadakan.",
    content: `
Banyak yang takut budaya akan hilang dalam arus modernitas. Padahal budaya tidak mati — ia hanya menunggu cara baru untuk bicara. 
Dan fashion adalah medianya.

Japrend Authentic menjembatani dua dunia: spiritualitas dan modernitas. 
Kami membuktikan bahwa kaligrafi Arab bisa selaras dengan potongan streetwear, dan huruf-huruf sakral bisa tampil dengan gaya yang berani. 
Kita tidak menolak dunia — kita memaknainya ulang dengan adab.
    `,
  },
  {
    id: 4,
    title: "Makna Busana: Dari Penutup Tubuh ke Pembuka Makna",
    shortDesc:
      "Busana bukan hanya pelindung tubuh, tapi pernyataan nilai — setiap warna membawa doa dan arah.",
    content: `
Dalam pandangan Jawa dan santri, busana adalah tanda jati diri.
Hitam melambangkan kedalaman, putih kesucian niat, emas kemuliaan hasil laku panjang.

Maka setiap produk Japrend Authentic dibuat bukan sekadar dengan desain, tapi dengan niat. 
Dari pesantren ke jalanan — kami ingin setiap orang yang mengenakannya merasa:
"Gue bukan cuma pakai brand, gue pakai makna."
    `,
  },
  {
    id: 5,
    title: "Spiritualitas dalam Gaya Hidup Modern",
    shortDesc:
      "Ketenangan bukan milik masa lalu. Ia hidup di hati mereka yang sadar — bahkan di tengah dunia urban.",
    content: `
Zaman makin cepat, tapi banyak jiwa makin kosong. 
Spiritualitas bukan soal baju putih dan duduk bersila — tapi tentang kesadaran di tengah keramaian. 
Nilai santri dan filosofi Jawa mengajarkan keseimbangan antara lahir dan batin.

Japrend Authentic mengubah nilai itu jadi gaya hidup baru: keren yang berpikir, simple yang bermakna.
Karena modern tidak harus kehilangan akar.
    `,
  },
  {
    id: 6,
    title: "Cerpen Santri: Sarung, Sneakers, dan Setitik Kopi di Al-Fithrah",
    shortDesc:
      "Tiga santri dan satu sore di Pesantren Assalafi Al-Fithrah. Sebuah kisah ringan tentang arah, adab, dan sneakers.",
    content: `
  Sore itu di Pesantren Assalafi Al-Fithrah Surabaya, langit oranye redup. Di serambi pondok, tiga santri — Liem, Iskandar, dan Ipung — 
nongkrong sambil ngopi sachet dan makan tahu goreng. Liem paling nyentrik, pakai hoodie hitam bertuliskan *Faith & Street* 
dan sneakers putih yang kinclong.

> Ipung: "Wih, sepatu baru, bro. Kinclong banget, kayak niatmu yang kadang belum disemir."
> Liem: (ketawa) "Hehe, tampil rapi kan nggak dosa."
> Iskandar: "Nggak dosa, asal niatnya bukan buat dilihat orang."

  Mereka ketawa sampai langkah sandal jepit terdengar — K.H. Husni datang dari arah maqbarah. 
Beliau berhenti, senyum, dan bilang:
> "Bagus sepatumu, Nak. Tapi jangan sampai yang bersih cuma alas kaki, sementara langkahnya belum tentu bersih."

  Semua terdiam. Setelah Kyai berlalu, Ipung nyeletuk,
> "Berat, tapi adem juga ya nasihat Kyai."
> Liem: "Gue kira cuma sepatu yang bisa kinclong, ternyata hati juga bisa — asal disemir pakai istighfar."

  Mereka bertiga tertawa. Sore itu kopi mereka terasa lebih manis. 
Besoknya, Liem datang ngaji pakai sarung rapi, koko hitam, dan sneakers yang udah kotor. 
Ipung ngeledek, "Sepatumu udah gak kinclong, bro."
Liem senyum, "Iya, tapi langkahnya udah lebih bersih."

"Keren itu bukan tentang dilihat orang, tapi tentang tahu arah."
Iman boleh klasik, tapi langkah harus modern.
    `,
  },
];

const EdukasiSection: React.FC = () => {
  const [selected, setSelected] = useState<Materi | null>(null);

  return (
    <section id="edukasi" className="bg-[#0E0E0E] text-[#F4F4F4] py-24 px-6 relative">
      {/* === HEADER === */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-3 tracking-tight">
          Refleksi <span className="text-[#C9A227]">Budaya & Santri</span>
        </h2>
        <p className="text-[#F4F4F4]/70 text-lg max-w-3xl mx-auto">
          Sebuah perjalanan makna — dari pesantren ke jalanan, dari adab ke gaya.  
          Kenapa Japrend Authentic memilih budaya Jawa dan nilai santri sebagai ruh setiap desainnya.
        </p>
      </div>

      {/* === GRID === */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {materiList.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="bg-[#1A1A1A] p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A227]/20"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#C9A227]">
              {item.title}
            </h3>
            <p className="text-[#F4F4F4]/80 leading-relaxed text-base">
              {item.shortDesc}
            </p>
          </div>
        ))}
      </div>

      {/* === POPUP === */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 transition-all duration-300"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gradient-to-b from-[#1A1A1A] to-[#0E0E0E] rounded-2xl max-w-3xl w-full p-10 relative text-left shadow-lg shadow-[#C9A227]/20 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-[#C9A227] text-3xl font-bold hover:text-[#F4F4F4] transition"
            >
              ×
            </button>
            <h3 className="text-3xl font-bold mb-6 text-[#C9A227] border-b border-[#C9A227]/30 pb-3">
              {selected.title}
            </h3>
            <div className="text-[#F4F4F4]/85 leading-relaxed whitespace-pre-line text-lg space-y-4 overflow-y-auto max-h-[70vh] pr-2">
              {selected.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EdukasiSection;
