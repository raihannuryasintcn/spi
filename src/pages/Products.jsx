import { useState } from 'react';
import { Heading } from '../components/Heading';
import { Sidebar } from '../components/Sidebar';
import main from '../assets/main.png'


const equipmentData = [
    {
        id: 1,
        name: 'AC Split Gree 1 PK',
        image: 'https://via.placeholder.com/150?text=AC+Split+Gree',
        description: 'AC Split Gree 1 PK dengan teknologi hemat energi dan fitur pendinginan cepat.',
        type: 'split',
        brand: 'gree',
    },
    {
        id: 2,
        name: 'AC Ducting Daikin 2 PK',
        image: 'https://via.placeholder.com/150?text=AC+Ducting+Daikin',
        description: 'AC Ducting Daikin 2 PK untuk pendinginan area luas dengan distribusi udara merata.',
        type: 'ducting',
        brand: 'daikin',
    },
    {
        id: 3,
        name: 'AC Standing Panasonic 3 PK',
        image: 'https://via.placeholder.com/150?text=AC+Standing+Panasonic',
        description: 'AC Standing Panasonic 3 PK dengan desain elegan dan performa tinggi.',
        type: 'standing',
        brand: 'panasonic',
    },
    {
        id: 4,
        name: 'AC Cassette Gree 2.5 PK',
        image: 'https://via.placeholder.com/150?text=AC+Cassette+Gree',
        description: 'AC Cassette Gree 2.5 PK untuk pendinginan 360 derajat, cocok untuk ruang kantor.',
        type: 'cassette',
        brand: 'gree',
    },
    {
        id: 5,
        name: 'AC Split Daikin 1.5 PK',
        image: 'https://via.placeholder.com/150?text=AC+Split+Daikin',
        description: 'AC Split Daikin 1.5 PK dengan teknologi inverter untuk penghematan listrik maksimal.',
        type: 'split',
        brand: 'daikin',
    },
    {
        id: 6,
        name: 'AC Ducting Panasonic 3 PK',
        image: 'https://via.placeholder.com/150?text=AC+Ducting+Panasonic',
        description: 'AC Ducting Panasonic 3 PK untuk pendinginan area besar dengan kinerja optimal.',
        type: 'ducting',
        brand: 'panasonic',
    },
    {
        id: 7,
        name: 'AC Standing LG 2 PK',
        image: 'https://via.placeholder.com/150?text=AC+Standing+LG',
        description: 'AC Standing LG 2 PK dengan teknologi Dual Inverter untuk penghematan energi optimal.',
        type: 'standing',
        brand: 'lg',
    },
    {
        id: 8,
        name: 'AC Split Gree 2 PK',
        image: 'https://via.placeholder.com/150?text=AC+Split+Gree+2PK',
        description: 'AC Split Gree 2 PK dengan fitur auto clean dan filter anti bakteri untuk udara lebih sehat.',
        type: 'split',
        brand: 'gree',
    },
    {
        id: 9,
        name: 'AC Cassette Daikin 3 PK',
        image: 'https://via.placeholder.com/150?text=AC+Cassette+Daikin',
        description: 'AC Cassette Daikin 3 PK untuk ruang luas dengan distribusi udara 360 derajat.',
        type: 'cassette',
        brand: 'daikin',
    },
    {
        id: 10,
        name: 'AC Split Panasonic 2 PK',
        image: 'https://via.placeholder.com/150?text=AC+Split+Panasonic',
        description: 'AC Split Panasonic 2 PK dengan nanoe-G untuk membersihkan udara dari partikel berbahaya.',
        type: 'split',
        brand: 'panasonic',
    },
    {
        id: 11,
        name: 'AC Cassette LG 2.5 PK',
        image: 'https://via.placeholder.com/150?text=AC+Cassette+LG',
        description: 'AC Cassette LG 2.5 PK dengan teknologi 4-way swing untuk penyebaran udara yang optimal.',
        type: 'cassette',
        brand: 'lg',
    },
    {
        id: 12,
        name: 'AC Ducting Gree 5 PK',
        image: 'https://via.placeholder.com/150?text=AC+Ducting+Gree',
        description: 'AC Ducting Gree 5 PK untuk area sangat luas dengan efisiensi energi tinggi.',
        type: 'ducting',
        brand: 'gree',
    },
    {
        id: 13,
        name: 'AC Standing Daikin 5 PK',
        image: 'https://via.placeholder.com/150?text=AC+Standing+Daikin',
        description: 'AC Standing Daikin 5 PK untuk ruangan besar dengan kemampuan pendinginan cepat.',
        type: 'standing',
        brand: 'daikin',
    },
    {
        id: 14,
        name: 'AC Split LG 1 PK',
        image: 'https://via.placeholder.com/150?text=AC+Split+LG',
        description: 'AC Split LG 1 PK dengan teknologi Dual Cool Inverter untuk penghematan energi hingga 70%.',
        type: 'split',
        brand: 'lg',
    },
    {
        id: 15,
        name: 'AC Standing Gree 3 PK',
        image: 'https://via.placeholder.com/150?text=AC+Standing+Gree',
        description: 'AC Standing Gree 3 PK dengan desain modern dan sistem anti-korosi untuk ketahanan ekstra.',
        type: 'standing',
        brand: 'gree',
    },
    {
        id: 16,
        name: 'AC Ducting LG 3 PK',
        image: 'https://via.placeholder.com/150?text=AC+Ducting+LG',
        description: 'AC Ducting LG 3 PK dengan sistem Smart Diagnosis untuk pemeliharaan yang lebih mudah.',
        type: 'ducting',
        brand: 'lg',
    },
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

export function Products() {
    const [typeFilter, setTypeFilter] = useState('all');
    const [brandFilter, setBrandFilter] = useState('all');

    const filteredEquipment = equipmentData.filter(equipment => {
        return (typeFilter === 'all' || equipment.type === typeFilter) &&
               (brandFilter === 'all' || equipment.brand === brandFilter);
    });

    const handleTypeChange = (e) => setTypeFilter(e.target.value);
    const handleBrandChange = (e) => setBrandFilter(e.target.value);

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
                <Heading title="PRODUK KAMI"/>
                <div className="my-4 flex space-x-4">
                    <select
                        className="bg-gradient-to-t from-blue-700 to-blue-500 p-2 text-gray-200 bg-blue-700 rounded"
                        value={typeFilter}
                        onChange={handleTypeChange}
                    >
                        <option value="all">Semua Tipe</option>
                        <option value="split">AC Split</option>
                        <option value="ducting">AC Ducting</option>
                        <option value="standing">AC Standing</option>
                        <option value="cassette">AC Cassette</option>
                    </select>
                    <select
                        className="bg-gradient-to-t from-blue-700 to-blue-500 p-2 text-gray-200 bg-blue-700 rounded"
                        value={brandFilter}
                        onChange={handleBrandChange}
                    >
                        <option value="all">Semua Merk</option>
                        <option value="gree">Gree</option>
                        <option value="daikin">Daikin</option>
                        <option value="panasonic">Panasonic</option>
                        <option value="lg">LG</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                    {filteredEquipment.map((equipment) => (
                        <EquipmentCard key={equipment.id} equipment={equipment} />
                    ))}
                </div>
            </div>
            <Sidebar />
        </div>
    );
}