import { Heading } from '../components/Heading';
import { Sidebar } from '../components/Sidebar';
import main from '../assets/main.png'

const equipmentData = [
    {
        id: 1,
        name: 'AC Portable',
        image: 'https://via.placeholder.com/150?text=AC+Portable',
        description: 'Pendingin ruangan portabel dengan kapasitas 1 PK, cocok untuk ruangan kecil hingga sedang.',
    },
    {
        id: 2,
        name: 'Genset',
        image: 'https://via.placeholder.com/150?text=Genset',
        description: 'Generator listrik dengan kapasitas 5000 watt, ideal untuk backup listrik rumah atau acara outdoor.',
    },
    {
        id: 3,
        name: 'Pompa Air',
        image: 'https://via.placeholder.com/150?text=Pompa+Air',
        description: 'Pompa air listrik dengan daya hisap kuat, cocok untuk rumah tangga atau pengairan skala kecil.',
    },
    {
        id: 4,
        name: 'Mesin Las',
        image: 'https://via.placeholder.com/150?text=Mesin+Las',
        description: 'Mesin las listrik portabel untuk berbagai kebutuhan pengelasan ringan hingga menengah.',
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