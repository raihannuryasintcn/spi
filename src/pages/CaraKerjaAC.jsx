import React from 'react';
import { Heading } from '../components/Heading.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import { Helmet } from 'react-helmet-async';
import LogoMarquee from '../components/LogoMarquee.jsx';

export function CaraKerjaAC() {
  // Schema data untuk artikel How-To
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cara Kerja AC dan Perbaikannya",
    "description": "Pahami cara kerja AC dengan mudah, komponen-komponen penting, dan langkah perbaikan yang bisa Anda lakukan sendiri.",
    "image": "https://scarletpowerindonesia.com/assets/images/ac/ac-components.webp",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Memahami Komponen AC",
        "text": "AC memiliki komponen utama: kompresor, kondensor, katup ekspansi, dan evaporator."
      },
      {
        "@type": "HowToStep",
        "name": "Proses Refrigerasi",
        "text": "Refrigeran mengalami 4 tahap: kompresi, kondensasi, ekspansi, dan evaporasi."
      },
      {
        "@type": "HowToStep",
        "name": "Perbaikan AC Tidak Dingin",
        "text": "Periksa filter udara, pastikan tidak ada kebocoran refrigeran, dan cek kondisi kompresor."
      },
      {
        "@type": "HowToStep",
        "name": "Perawatan Rutin",
        "text": "Bersihkan filter AC setiap 2 minggu dan lakukan servis lengkap setiap 6 bulan."
      }
    ]
  };

  return (
    <div className="grid grid-cols-12 w-full h-auto">
      <Helmet>
        <title>Cara Kerja AC: Panduan Lengkap + Tips Perbaikan [2025]</title>
        <meta name="description" content="Pahami cara kerja AC dengan mudah, komponen-komponen penting, dan langkah perbaikan yang bisa Anda lakukan sendiri. Solusi lengkap masalah AC Anda!" />
        <meta name="keywords" content="cara kerja AC, komponen AC, perbaikan AC, servis AC, AC tidak dingin, refrigeran, kompresor AC" />
        <link rel="canonical" href="https://scarletpowerindonesia.com/cara-kerja-ac" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cara Kerja AC: Panduan Lengkap + Tips Perbaikan [2025]" />
        <meta property="og:description" content="Pahami cara kerja AC dengan mudah, komponen-komponen penting, dan langkah perbaikan." />
        <meta property="og:url" content="https://scarletpowerindonesia.com/cara-kerja-ac" />
        <meta property="og:image" content="https://scarletpowerindonesia.com/assets/images/ac/ac-components.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cara Kerja AC: Panduan Lengkap [2025]" />
        <meta name="twitter:description" content="Panduan lengkap memahami cara kerja AC dan tips perbaikannya." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Konten utama */}
      <div className="bg-gray-100 w-full p-4 col-span-9">
        {/* Marquee teks berjalan diganti dengan animasi */}
        <div className="text-red-500 italic overflow-hidden whitespace-nowrap">
          <div className="animate-marquee">
            Selamat Datang di Panduan Cara Kerja AC. Semoga informasi ini bermanfaat!
          </div>
        </div>

        {/* Gambar utama */}
        <div className="flex items-center pb-4">
          <img src="/assets/main.png" alt="Diagram cara kerja AC dan komponennya" className="object-fill w-full" />
        </div>

        {/* Heading untuk artikel */}
        <article itemScope itemType="https://schema.org/Article">
          <h1 itemProp="headline" className="text-3xl font-bold text-center mb-6">CARA KERJA AC: PANDUAN LENGKAP + TIPS PERBAIKAN [2025]</h1>

          <div itemProp="articleBody">
            <p className="text-gray-600 py-4 text-left" style={{ textAlign: "justify" }}>
              <strong>Air Conditioner (AC)</strong> bekerja berdasarkan prinsip perpindahan panas melalui siklus refrigerasi. Proses ini melibatkan perubahan wujud refrigeran dari gas menjadi cair dan sebaliknya, yang memungkinkan pemindahan panas dari dalam ruangan ke luar. Dalam artikel ini, kita akan membahas secara detail cara kerja AC dan tips perbaikannya.
            </p>

            {/* Latar Belakang */}
            <div className="grid grid-cols-12 justify-center my-6">
              <div className="flex flex-col col-span-12 md:col-span-6 text-left justify-center">
                <h2 id="latar-belakang" className="text-gray-700 text-2xl pb-4 font-semibold">LATAR BELAKANG</h2>
                <p className="text-gray-600 pr-4" style={{ textAlign: "justify" }}>
                  Memahami <strong>cara kerja AC</strong> sangat penting untuk menjaga kinerja dan efisiensi sistem pendingin udara. AC menjadi kebutuhan utama di kawasan tropis seperti Indonesia, terutama di daerah dengan suhu udara yang tinggi.
                </p>
              </div>

              {/* Gambar produk */}
              <div className="flex flex-col justify-center col-span-12 md:col-span-6 mt-4 md:mt-0">
                <img src="/assets/images/ac/ac-components.webp" alt="Komponen utama dalam sistem AC" className="mb-0 rounded-lg shadow-md" />
                <p className="text-sm text-gray-500 mt-2 text-center">Gambar: Komponen utama sistem AC</p>
              </div>
            </div>

            {/* Prinsip Kerja AC */}
            <div className="my-8">
              <h2 id="prinsip-kerja" className="text-gray-700 text-2xl font-semibold mb-4">PRINSIP KERJA AC</h2>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                AC bekerja dengan prinsip <strong>siklus refrigerasi</strong>, yang melibatkan perubahan wujud refrigeran antara gas dan cair. Proses ini memungkinkan perpindahan panas dari dalam ruangan ke luar, sehingga menciptakan efek pendinginan.
              </p>
              
              <div className="bg-white p-4 rounded-lg shadow-sm my-4">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Tahapan Siklus Refrigerasi:</h3>
                <ul className="list-disc pl-6">
                  <li><strong>Kompresi:</strong> Refrigeran dikompresi oleh kompresor menjadi gas panas bertekanan tinggi.</li>
                  <li><strong>Kondensasi:</strong> Gas berubah menjadi cair saat panas dilepaskan di kondensor.</li>
                  <li><strong>Ekspansi:</strong> Tekanan turun saat melewati katup ekspansi.</li>
                  <li><strong>Evaporasi:</strong> Refrigeran menyerap panas dari udara ruangan.</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Sidebar />
    </div>
  );
}
