import { getCurrentDate } from "../components/Date"
import { Heading } from "../components/Heading"
import { Sidebar } from "../components/Sidebar"
import main from "../assets/main.png"
import LogoMarquee from "../components/LogoMarquee.jsx"

export function Home(){
    return(
        <div className="grid grid-cols-12 w-full h-auto">
            <div className="bg-gray-100 w-full p-4 col-span-9">
                <div className="text-red-500 italic">
                    <marquee behavior="scroll" direction="left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet delectus harum voluptatum excepturi rerum illum cum sint earum perferendis labore.</marquee>
                </div>

                <div className="flex items-center pb-4">
                    <img src={main} alt="" className="object-fill"/>
                </div>


                <Heading title="PROFIL SPI AC SPECIALIST"/>
                <p className="text-gray-600 py-4 text-left"> PT. SCARLET POWER INDONESIA adalah perusahaan outsource service yang bergerak dalam bidang AC (Air Conditioner).
                        Layanan kami mencakup penjualan, pemasangan, perawatan, dan servis AC. Didukung oleh tim teknisi berpengalaman dan profesional,
                        kami berkomitmen untuk memberikan layanan berkualitas yang memenuhi kebutuhan setiap pelanggan.</p>
                <h1 className="text-blue-500 pb-4 text-xl font-semibold">
                Dalam hal teknis perawatan kami menerapkan standard terhadap prosedur kerja , pendukung kerja ,SAFETY FIRST, serta tanggung jawab dari setiap teknisi kami . Dimana kepuasan pelanggan merupakan hal yang paling utama .Guna mendukung hasil kerja yang maksimal kami membekali setiap teknisi dengan peralatan yang memadai . Perawatan rutin yang terencana dengan baik dapat mencegah kerusakan unit AC yang meningkatkan biaya tidak terduga serta mengurangi resiko penggantian Spare Part secara dini .
                </h1>
                
                <div className="grid grid-cols-12 justify-center">
                    <div className="flex flex-col col-span-6 text-left justify-center">
                        
                        <h1 className="text-gray-700 text-xl pb-4 font-semibold">LATAR BELAKANG PERUSAHAAN</h1>
                        <p className="text-gray-600 pr-4">
                        Dalam hal teknis perawatan kami menerapkan standard terhadap prosedur kerja , pendukung kerja ,SAFETY FIRST, serta tanggung jawab dari setiap teknisi kami . Dimana kepuasan pelanggan merupakan hal yang paling utama .Guna mendukung hasil kerja yang maksimal kami membekali setiap teknisi dengan peralatan yang memadai . Perawatan rutin yang terencana dengan baik dapat mencegah kerusakan unit AC yang meningkatkan biaya tidak terduga serta mengurangi resiko penggantian Spare Part secara dini .
                        </p>

                    </div>

                    <div className="flex flex-col justify-center col-span-6">

                        {/* image strangely have 24px margin bottom */}
                        <img src="https://placehold.co/600x400?text=Product+Image" alt="" className="mb-0"/>
                    </div>

                </div>

                <div className="text-left py-4">
                        
                        <h1 className="text-gray-700 text-xl font-semibold">VISI</h1>
                        <p className="text-gray-600 pt-4">Menjadi perusahaan terdepan di bidang jasa perawatan spesialis pendingin yang mengutamakan profesionalisme kerja serta pelayanan prima dengan sepenuh hati.
                        </p>

                        <h1 className="text-gray-700 text-xl pt-4 font-semibold">MISI</h1>
                        <p className="text-gray-600 pt-4">1. Mengutamakan kepuasan klien</p>
                        <p className="text-gray-600 pt-4">2. Menangani semua keluhan yang terjadi dengan customer</p>
                        <p className="text-gray-600 pt-4">3. Membantu meringankan beban customer secara berkelanjutan</p>

                </div>  
                <Heading title="KLIEN KAMI"/>
                
                <div className="bg-white mt-4">
                <LogoMarquee />

                </div>

            </div>


            <Sidebar />
        </div>
    )
}