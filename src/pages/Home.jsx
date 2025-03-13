import { getCurrentDate } from "../components/Date";
import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import main from "../assets/main.png";
import LogoMarquee from "../components/LogoMarquee.jsx";

export function Home() {
    return (
        <div className="grid grid-cols-12 w-full h-auto">
            {/* Konten utama */}
            <div className="bg-gray-100 w-full p-4 col-span-9">
                {/* Marquee teks berjalan */}
                <div className="text-red-500 italic">
                    <marquee behavior="scroll" direction="left">
                    Selamat Datang di Website resmi PT Scarlet Power Indonesia semoga para pengunjung dapat memperoleh informasi yang bermanfaat di website ini</marquee>
                </div>

                {/* Gambar utama */}
                <div className="flex items-center pb-4">
                    <img src={main} alt="Main Image" className="object-fill" />
                </div>

                {/* Profil Perusahaan */}
                <Heading title="PROFIL SPI AC SPECIALIST" />
                <p className="text-gray-600 py-4 text-left" style={{ textAlign: "justify" }}>
                    PT. Scarlet Power Indonesia adalah perusahaan outsource service yang bergerak dalam bidang AC (Air Conditioner). 
                    Layanan kami mencakup penjualan, pemasangan, perawatan, dan servis AC. Didukung oleh tim teknisi yang berpengalaman dan profesional, 
                    kami berkomitmen untuk memberikan layanan berkualitas yang memenuhi kebutuhan setiap pelanggan.
                </p>

                <h1 className="text-blue-500 pb-4 text-xl font-semibold" style={{ textAlign: "justify" }}>
                    Dalam hal teknis perawatan, kami menerapkan standar terhadap prosedur kerja, pendukung kerja, prinsip "Safety First," serta tanggung jawab dari setiap teknisi kami. 
                    Kepuasan pelanggan merupakan prioritas utama. Guna mendukung hasil kerja yang maksimal, setiap teknisi dibekali dengan peralatan yang memadai. 
                    Perawatan rutin yang terencana dengan baik dapat mencegah kerusakan unit AC, mengurangi biaya tidak terduga, serta meminimalkan risiko penggantian suku cadang secara dini.
                </h1>

                {/* Latar Belakang Perusahaan */}
                <div className="grid grid-cols-12 justify-center">
                    <div className="flex flex-col col-span-6 text-left justify-center">
                        <h1 className="text-gray-700 text-xl pb-4 font-semibold">LATAR BELAKANG PERUSAHAAN</h1>
                        <p className="text-gray-600 pr-4" style={{ textAlign: "justify" }}>
                            Dalam hal teknis perawatan, kami menerapkan standar terhadap prosedur kerja, pendukung kerja, prinsip "Safety First," serta tanggung jawab dari setiap teknisi kami. 
                            Kepuasan pelanggan merupakan prioritas utama. Guna mendukung hasil kerja yang maksimal, setiap teknisi dibekali dengan peralatan yang memadai. 
                            Perawatan rutin yang terencana dengan baik dapat mencegah kerusakan unit AC, mengurangi biaya tidak terduga, serta meminimalkan risiko penggantian suku cadang secara dini.
                        </p>
                    </div>

                    {/* Gambar produk */}
                    <div className="flex flex-col justify-center col-span-6">
                        <img src="https://placehold.co/600x400?text=Product+Image" alt="Product Image" className="mb-0" />
                    </div>
                </div>

                {/* Visi & Misi */}
                <div className="text-left py-4">
                    <h1 className="text-gray-700 text-xl font-semibold">VISI</h1>
                    <p className="text-gray-600 pt-4" style={{ textAlign: "justify" }}>
                        Menjadi perusahaan terdepan di bidang jasa perawatan spesialis pendingin yang mengutamakan profesionalisme kerja serta pelayanan prima dengan sepenuh hati.
                    </p>

                    <h1 className="text-gray-700 text-xl pt-4 font-semibold">MISI</h1>
                    <ul className="text-gray-600 pt-4 list-disc pl-6">
                        <li style={{ textAlign: "justify" }}>Mengutamakan kepuasan klien.</li>
                        <li style={{ textAlign: "justify" }}>Menangani semua keluhan yang terjadi dengan pelanggan.</li>
                        <li style={{ textAlign: "justify" }}>Membantu meringankan beban pelanggan secara berkelanjutan.</li>
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
