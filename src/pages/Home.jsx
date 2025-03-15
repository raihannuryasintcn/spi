import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import main from "../assets/main.png";
import LogoMarquee from "../components/LogoMarquee.jsx";
import teknisi from "../assets/teknisi.png";

export function Home() {
  return (
    <div className="grid grid-cols-12 w-full h-auto">
      {/* Konten utama */}
      <div className="bg-gray-100 w-full p-4 col-span-9">
        {/* Marquee teks berjalan */}
        <div className="text-red-500 italic">
          <marquee behavior="scroll" direction="left">
            Selamat Datang di Website resmi PT Scarlet Power Indonesia semoga
            para pengunjung dapat memperoleh informasi yang bermanfaat di
            website ini
          </marquee>
        </div>

        {/* Gambar utama */}
        <div className="flex items-center pb-4">
          <img src={main} alt="Main Image" className="object-fill" />
        </div>

        {/* Profil Perusahaan */}
        <Heading title="PROFIL SPI AC SPECIALIST" />
        <p
          className="text-gray-600 pt-4 text-left"
          style={{ textAlign: "justify" }}
        >
          Saat ini kenyamanan ruangan menjadi perhatian banyak pihak, terutama
          bagi dunia industri. Kecenderungan meningkatnya kebutuhan akan
          lingkungan kerja yang nyaman merupakan sinyalemen bahwa begitu
          pentingnya sistem pendingin udara yang optimal. Yang pada akhirnya
          sistem AC yang handal dan profesional harus diterapkan dan disesuaikan
          untuk memenuhi kebutuhan klien.
        </p>

        <h1
          className="text-blue-500 py-12 text-2xl font-thin font-pattaya"
          style={{ textAlign: "center" }}
        >
          "Kenyamanan udara bukan sekedar pilihan, tetapi investasi untuk
          produktivitas yang tak ternilai harganya."
        </h1>

        {/* Latar Belakang Perusahaan */}
        <div className="grid grid-cols-12 justify-center">
          <div className="flex flex-col col-span-6 text-left justify-center">
            <h1 className="text-gray-700 text-xl pb-4 font-semibold">
              LATAR BELAKANG PERUSAHAAN
            </h1>
            <p className="text-gray-600 pr-8" style={{ textAlign: "justify" }}>
              PT. SCARLET POWER INDONESIA adalah Perusahaan Outsource Service
              yang bergerak dalam bidang usaha AC ( Air Conditioner ) meliputi :
              Penjualan, Pemasangan, Perawatan Dan Service AC mempunyai
              kualifikasi khusus yang dapat memuaskan kebutuhan setiap pelanggan
              , serta didukung para teknisi yang berpengalaman dan professional
              di bidangnya.
            </p>
          </div>

          {/* Gambar produk */}
          <div className="flex flex-col justify-center col-span-6 shadow-lg h-[260px]">
            <img src={teknisi} alt="Product Image" className="mb-0" />
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="text-left py-12">
          <h1 className="text-gray-700 text-xl font-semibold">VISI</h1>
          <p className="text-gray-600 pt-4" style={{ textAlign: "justify" }}>
            Menjadi perusahaan terdepan di bidang jasa perawatan spesialis
            pendingin yang mengutamakan profesionalisme kerja serta pelayanan
            prima dengan sepenuh hati.
          </p>

          <h1 className="text-gray-700 text-xl pt-4 font-semibold">MISI</h1>
          <ul className="text-gray-600 pt-4 list-disc pl-6">
            <li style={{ textAlign: "justify" }}>
              Mengutamakan kepuasan klien.
            </li>
            <li style={{ textAlign: "justify" }}>
              Menangani semua keluhan yang terjadi dengan pelanggan.
            </li>
            <li style={{ textAlign: "justify" }}>
              Membantu meringankan beban pelanggan secara berkelanjutan.
            </li>
          </ul>
        </div>

        {/* Klien Kami */}
        <Heading title="KLIEN KAMI" />
        <div className="bg-white mt-4">
          <LogoMarquee />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}
