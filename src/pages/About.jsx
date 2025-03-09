import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import main from '../assets/main.png'



import struktur from '../assets/struktur.png';
import gree from "../assets/sertifikat/gree.png"
import daikin from "../assets/sertifikat/daikin.png"


const certificatesData = [
    {
        id: 1,
        name: 'Gree Authorized Dealer',
        image: gree,
        description: 'Sertifikasi sistem manajemen mutu untuk memastikan kualitas layanan terbaik.',
    },
    {
        id: 2,
        name: 'Daikin Authorized Dealer',
        image: daikin,
        description: 'Izin resmi dari pemerintah untuk menjalankan usaha di bidang jasa.',
    },
];

function CertificateCard({ certificate }) {
    return (
        <div className="bg-white shadow-md p-4">
            <img src={certificate.image} alt={certificate.name} className="w-full h-48 object-contain mb-4" />
            <h3 className="text-lg font-semibold mb-2">{certificate.name}</h3>
            <p className="text-sm text-gray-600">{certificate.description}</p>
        </div>
    );
}

export function About() {
    return (
        <div className="grid grid-cols-12 w-full h-auto">
            <div className="bg-gray-100 w-full p-4 col-span-9">
                <div className="text-red-500 italic">
                    <marquee behavior="scroll" direction="left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet delectus harum voluptatum excepturi rerum illum cum sint earum perferendis labore.</marquee>
                </div>

                <div className="flex items-center pb-4">
                    <img src={main} alt="" className="object-fill"/>
                </div>
                <Heading title="PRINSIP-PRINSIP PERUSAHAAN"/>
                <h1 className="text-gray-700 text-xl py-4 font-semibold">Lorem ipsum dolor sit amet.</h1>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit enim perspiciatis nam sint molestias eligendi aliquid dolor non dolores.</p>
                <h1 className="text-gray-700 text-xl py-4 font-semibold">Lorem ipsum dolor sit amet.</h1>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit enim perspiciatis nam sint molestias eligendi aliquid dolor non dolores.</p>
                <h1 className="text-gray-700 text-xl py-4 font-semibold">Lorem ipsum dolor sit amet.</h1>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit enim perspiciatis nam sint molestias eligendi aliquid dolor non dolores.</p>
                <h1 className="text-gray-700 text-xl py-4 font-semibold">Lorem ipsum dolor sit amet.</h1>
                <p className="text-gray-600 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit enim perspiciatis nam sint molestias eligendi aliquid dolor non dolores.</p>
                        

                <Heading title="STRUKTUR PERUSAHAAN"/>
                <div className="flex justify-center items-center py-4">
                    <img src={struktur} alt="" />
                </div>



                <Heading title="LEGALITAS"/>
                <div className="grid grid-cols-2 gap-6 py-4">
                    {certificatesData.map((certificate) => (
                        <CertificateCard key={certificate.id} certificate={certificate} />
                    ))}
                </div>
            </div>

            <Sidebar />
        </div>
    );
}