import React from 'react';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { Heading } from '../components/Heading.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import mainImage from '../assets/main.png'; // Ganti dengan gambar yang sesuai
import acComponents from '../assets/images/ac/ac-components.webp'; // Tambahkan gambar komponen AC
import acRefrigeration from '../assets/images/ac/ac-refrigeration-cycle.webp'; // Tambahkan gambar siklus refrigerasi
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
        {/* Marquee teks berjalan */}
        <div className="text-red-500 italic">
          <marquee behavior="scroll" direction="left">
            Selamat Datang di Panduan Cara Kerja AC. Semoga informasi ini bermanfaat!
          </marquee>
        </div>

        {/* Gambar utama */}
        <div className="flex items-center pb-4">
          <img src={mainImage} alt="Cara Kerja AC dan Komponennya" className="object-fill w-full" />
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
                  Memahami <strong>cara kerja AC</strong> sangat penting untuk menjaga kinerja dan efisiensi sistem pendingin udara. AC menjadi kebutuhan utama di kawasan tropis seperti Indonesia, terutama di daerah dengan suhu udara yang tinggi. Dalam panduan ini, kami akan menjelaskan komponen utama AC dan cara kerjanya secara detail.
                </p>
              </div>

              {/* Gambar produk */}
              <div className="flex flex-col justify-center col-span-12 md:col-span-6 mt-4 md:mt-0">
                <img src={acComponents} alt="Komponen Utama AC" className="mb-0 rounded-lg shadow-md" />
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
                <ol className="list-decimal pl-6">
                  <li className="mb-2"><strong>Tahap Kompresi:</strong> Refrigeran berupa gas bertekanan rendah dikompresi oleh kompresor menjadi gas bertekanan tinggi dengan suhu tinggi.</li>
                  <li className="mb-2"><strong>Tahap Kondensasi:</strong> Gas refrigeran yang panas mengalir ke kondensor, di mana panas dilepaskan ke lingkungan luar dan refrigeran berubah menjadi cair.</li>
                  <li className="mb-2"><strong>Tahap Ekspansi:</strong> Refrigeran cair bertekanan tinggi melewati katup ekspansi, tekanannya turun dan berubah menjadi campuran cair-gas dengan suhu rendah.</li>
                  <li className="mb-2"><strong>Tahap Evaporasi:</strong> Refrigeran dingin mengalir melalui evaporator dan menyerap panas dari udara ruangan, kemudian berubah kembali menjadi gas.</li>
                </ol>
              </div>
              
              <div className="flex justify-center my-6">
                <img src={acRefrigeration} alt="Siklus Refrigerasi AC" className="rounded-lg shadow-md max-w-full md:max-w-lg" />
                <p className="text-sm text-gray-500 mt-2 text-center">Gambar: Siklus refrigerasi dalam sistem AC</p>
              </div>
            </div>

            {/* Komponen Utama AC */}
            <div className="my-8">
              <h2 id="komponen-utama" className="text-gray-700 text-2xl font-semibold mb-4">KOMPONEN UTAMA AC</h2>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Untuk memahami cara kerja AC secara menyeluruh, penting untuk mengenal komponen-komponen utamanya dan fungsi masing-masing:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">1. Kompresor</h3>
                  <p style={{ textAlign: "justify" }}>
                    Kompresor adalah "jantung" dari sistem AC. Fungsinya mengompresi refrigeran gas bertekanan rendah menjadi gas bertekanan tinggi dengan suhu tinggi. Kompresor menggunakan motor listrik untuk memompa refrigeran melalui seluruh sistem.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">2. Kondensor</h3>
                  <p style={{ textAlign: "justify" }}>
                    Kondensor biasanya terletak di unit outdoor AC. Komponen ini berfungsi untuk melepaskan panas yang dibawa oleh refrigeran ke lingkungan luar. Saat refrigeran mengalir melalui kondensor, gas panas berubah menjadi cairan.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">3. Katup Ekspansi</h3>
                  <p style={{ textAlign: "justify" }}>
                    Katup ekspansi mengontrol aliran refrigeran cair bertekanan tinggi ke evaporator. Saat melewati katup ini, tekanan refrigeran turun drastis, menyebabkan suhu turun dan sebagian refrigeran menguap.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">4. Evaporator</h3>
                  <p style={{ textAlign: "justify" }}>
                    Evaporator terletak di unit indoor AC. Di sini, refrigeran cair dengan suhu rendah menyerap panas dari udara ruangan dan berubah menjadi gas. Udara yang telah didinginkan kemudian didistribusikan ke dalam ruangan oleh kipas.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">5. Refrigeran</h3>
                <p style={{ textAlign: "justify" }}>
                  Refrigeran adalah zat yang mengalir melalui sistem AC dan berfungsi sebagai media perpindahan panas. Refrigeran modern seperti R-32 dan R-410A dirancang untuk efisien dan ramah lingkungan, menggantikan refrigeran lama yang merusak lapisan ozon.
                </p>
              </div>
            </div>

            {/* Tips Perbaikan */}
            <div className="my-8">
              <h2 id="tips-perbaikan" className="text-3xl font-bold text-center mb-6">TIPS PERBAIKAN AC</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Masalah Umum dan Solusinya</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg">1. AC Tidak Dingin</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Periksa apakah filter udara kotor dan bersihkan jika perlu</li>
                    <li>Pastikan tidak ada hambatan pada unit outdoor</li>
                    <li>Periksa level refrigeran, mungkin perlu ditambah jika terjadi kebocoran</li>
                    <li>Periksa apakah kompresor berfungsi dengan baik</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg">2. AC Mengeluarkan Bau Tidak Sedap</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Bersihkan filter udara secara menyeluruh</li>
                    <li>Bersihkan evaporator dari jamur dan bakteri</li>
                    <li>Gunakan pembersih AC khusus untuk menghilangkan bau</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg">3. AC Berisik</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Periksa apakah ada benda asing di unit indoor atau outdoor</li>
                    <li>Periksa pemasangan unit, pastikan tidak ada komponen yang longgar</li>
                    <li>Cek kondisi kipas, mungkin perlu pembersihan atau pelumasan</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">4. AC Bocor Air</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Periksa saluran pembuangan air, mungkin tersumbat</li>
                    <li>Pastikan unit indoor terpasang dengan kemiringan yang benar</li>
                    <li>Periksa kondisi pipa drainase</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm mt-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Perawatan Rutin AC</h3>
                <p className="mb-4" style={{ textAlign: "justify" }}>
                  Untuk menjaga kinerja AC optimal dan memperpanjang umur pakainya, lakukan perawatan rutin berikut:
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Bersihkan filter udara setiap 2 minggu</li>
                  <li>Bersihkan unit indoor dan outdoor secara berkala</li>
                  <li>Periksa kebocoran refrigeran setiap 6 bulan</li>
                  <li>Lakukan servis lengkap oleh teknisi profesional minimal setahun sekali</li>
                  <li>Gunakan AC pada suhu yang optimal (24-26°C) untuk efisiensi energi</li>
                </ul>
              </div>
            </div>
            
            {/* Kapan Memanggil Teknisi */}
            <div className="my-8">
              <h2 id="panggil-teknisi" className="text-gray-700 text-2xl font-semibold mb-4">KAPAN HARUS MEMANGGIL TEKNISI AC?</h2>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Meskipun ada beberapa perbaikan yang bisa Anda lakukan sendiri, ada situasi di mana Anda harus memanggil teknisi profesional:
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
                <ul className="list-disc pl-6 text-gray-600">
                  <li>AC sama sekali tidak menyala</li>
                  <li>Terdapat suara keras yang tidak normal</li>
                  <li>Terjadi kebocoran refrigeran</li>
                  <li>Ada bau terbakar dari unit AC</li>
                  <li>AC tidak dingin meskipun sudah membersihkan filter</li>
                  <li>Konsumsi listrik meningkat drastis</li>
                </ul>
              </div>
              
              <p className="text-gray-600 mt-4" style={{ textAlign: "justify" }}>
                <strong>Scarlet Power Indonesia</strong> menyediakan layanan perbaikan dan perawatan AC profesional dengan teknisi berpengalaman. Hubungi kami untuk konsultasi dan layanan terbaik untuk kebutuhan AC Anda.
              </p>
            </div>
            
            {/* FAQ */}
            <div className="my-8">
              <h2 id="faq" className="text-gray-700 text-2xl font-semibold mb-4">FAQ SEPUTAR CARA KERJA AC</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold">Apa perbedaan AC Inverter dan AC Konvensional?</h3>
                  <p>AC Inverter mampu mengatur kecepatan kompresor sesuai kebutuhan pendinginan, sementara AC konvensional hanya memiliki mode on/off. AC Inverter lebih hemat energi dan umur pakainya lebih panjang.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold">Berapa suhu optimal penggunaan AC?</h3>
                  <p>Suhu optimal penggunaan AC adalah 24-26°C. Suhu ini memberikan kenyamanan sekaligus menghemat energi. Setiap penurunan 1°C dapat meningkatkan konsumsi listrik hingga 10%.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold">Apakah refrigeran AC perlu diganti secara berkala?</h3>
                  <p>Tidak. Refrigeran dalam sistem AC tertutup dan idealnya tidak perlu diganti kecuali terjadi kebocoran. Jika AC sering membutuhkan tambahan refrigeran, kemungkinan ada kebocoran yang perlu diperbaiki.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold">Mengapa AC saya mengeluarkan air?</h3>
                  <p>AC menghasilkan air dari proses kondensasi. Air ini seharusnya dialirkan keluar melalui pipa drainase. Jika AC menetes di dalam ruangan, kemungkinan ada masalah pada saluran pembuangan air.</p>
                </div>
              </div>
            </div>
            
            {/* Kesimpulan */}
            <div className="my-8">
              <h2 id="kesimpulan" className="text-gray-700 text-2xl font-semibold mb-4">KESIMPULAN</h2>
              <p className="text-gray-600" style={{ textAlign: "justify" }}>
                Memahami cara kerja AC dan melakukan perawatan rutin adalah kunci untuk menjaga kinerja optimal dan memperpanjang umur pakai perangkat pendingin udara Anda. Dengan mengenal komponen-komponen utama seperti kompresor, kondensor, katup ekspansi, dan evaporator, Anda dapat mengidentifikasi masalah yang mungkin terjadi dan menentukan kapan harus memanggil teknisi profesional.
              </p>
              <p className="text-gray-600 mt-4" style={{ textAlign: "justify" }}>
                Untuk konsultasi, perawatan, dan perbaikan AC profesional, Scarlet Power Indonesia siap melayani kebutuhan Anda dengan teknisi berpengalaman dan solusi terbaik.
              </p>
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="bg-red-50 p-6 rounded-lg shadow-sm my-8 text-center">
          <h2 className="text-xl font-bold text-red-700 mb-4">BUTUH BANTUAN DENGAN AC ANDA?</h2>
          <p className="mb-4">Hubungi tim ahli kami untuk konsultasi dan layanan perbaikan AC profesional</p>
          <a href="/contact" className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
            Hubungi Kami Sekarang
          </a>
        </div>

        {/* Klien Kami */}
        <Heading title="KLIEN KAMI" />
        <div className="bg-white mt-4 p-4 rounded-lg shadow-sm">
          <LogoMarquee />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}