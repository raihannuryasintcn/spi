import { Heading } from '../components/Heading';
import { Sidebar } from '../components/Sidebar';
import main from '../assets/main.png'
import bor_bumi from '../assets/sewa/bor-bumi.png'
import genset from '../assets/sewa/genset.png'
import molen from '../assets/sewa/molen.png'
import scaffolding from '../assets/sewa/scaffolding.png'


const equipmentData = [
    {
        id: 1,
        name: 'Bor Bumi',
        image: bor_bumi,
        description: 'Pendingin ruangan portabel dengan kapasitas 1 PK, cocok untuk ruangan kecil hingga sedang.',
    },
    {
        id: 2,
        name: 'Genset',
        image: genset,
        description: 'Generator listrik dengan kapasitas 5000 watt, ideal untuk backup listrik rumah atau acara outdoor.',
    },
    {
        id: 3,
        name: 'Mesin Molen',
        image: molen,
        description: 'Pompa air listrik dengan daya hisap kuat, cocok untuk rumah tangga atau pengairan skala kecil.',
    },
    {
        id: 4,
        name: 'Scaffolding',
        image: scaffolding,
        description: 'Mesin las listrik portabel untuk berbagai kebutuhan pengelasan ringan hingga menengah.',
    }
];

function EquipmentCard({ equipment }) {
    return (
        <div className="bg-white shadow-md p-4 rounded transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
            <div className="overflow-hidden rounded">
                <img 
                    src={equipment.image} 
                    alt={equipment.name} 
                    className="w-full h-40 object-cover mb-4 rounded transition-transform duration-300 hover:scale-110" 
                />
            </div>
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
                <marquee behavior="scroll" direction="left">Kami menjunjung tinggi nilai kepercayaan, etika, moral, dan kejujuran di setiap langkah dalam melakukan kegiatan dan pengambilan keputusan.</marquee>
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