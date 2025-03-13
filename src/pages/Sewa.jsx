import { Heading } from '../components/Heading';
import { Sidebar } from '../components/Sidebar';
import main from '../assets/main.png'

const equipmentData = [
    {
        id: 1,
        name: 'Bor-Bumi',
        image: 'src\assets\sewa\bor-bumi.png',
        description: 'Alat pengeboran tanah profesional dengan daya tinggi, ideal untuk proyek konstruksi dan fondasi bangunan. Mampu menembus berbagai jenis tanah dengan efisien.',
    },
    {
        id: 2,
        name: 'Genset',
        image: 'src\assets\sewa\genset.png',
        description: 'Generator listrik berkapasitas besar dengan sistem pendingin optimal, cocok untuk backup listrik area industri, proyek konstruksi, atau event berskala besar. Hemat bahan bakar dengan performa stabil.',
    },
    {
        id: 3,
        name: 'Molen Semen',
        image: 'src\assets\sewa\molen.png',
        description: 'Mesin pengaduk semen berkualitas tinggi dengan kapasitas besar, mempercepat proses pengerjaan konstruksi. Dirancang untuk ketahanan dan efisiensi dalam pencampuran material bangunan.',
    },
    {
        id: 4,
        name: 'Scaffolding',
        image: 'src\assets\sewa\scaffolding.png',
        description: 'Perancah konstruksi dengan struktur kokoh dan fleksibel, memudahkan akses untuk pekerjaan di ketinggian. Sistem pemasangan cepat dengan standar keamanan tinggi untuk berbagai proyek konstruksi dan pemeliharaan gedung.',
    }
];

function EquipmentCard({ equipment }) {
    return (
        <div className="bg-white shadow-md p-4">
            <img src={equipment.image} alt={equipment.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">{equipment.name}</h3>
            <p className="text-sm text-gray-600">{equipment.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Sewa Sekarang
            </button>
        </div>
    );
}

export function Sewa() {
    return (
        <div className="grid grid-cols-12 w-full h-auto">
            <div className="bg-gray-100 w-full p-4 col-span-9">
                <div className="text-red-500 italic">
                <marquee behavior="scroll" direction="left">
                Selamat Datang di Website resmi PT Scarlet Power Indonesia semoga para pengunjung dapat memperoleh informasi yang bermanfaat di website ini</marquee>                
                </div>
                
                <div className="flex items-center pb-4">
                    <img src={main} alt="" className="object-fill"/>
                </div>

                <Heading title="SEWA ALAT"/>
                <div className="grid grid-cols-2 gap-6 py-4">
                    {equipmentData.map((equipment) => (
                        <EquipmentCard key={equipment.id} equipment={equipment} />
                    ))}
                </div>
            </div>

            <Sidebar />
        </div>
    );
}