import { useState } from 'react';
import { Heading } from '../components/Heading';
import { Sidebar } from '../components/Sidebar';
import main from '../assets/main.png'
import split_daikin from '../assets/produk/split_daikin.png'
import split_gree from '../assets/produk/split_gree.png'
import split_panasonic from '../assets/produk/split_panasonic.png'
import standing_daikin from '../assets/produk/standing_daikin.png'
import standing_gree from '../assets/produk/standing_gree.png'
import standing_panasonic from '../assets/produk/standing_panasonic.png'
import ducting_daikin from '../assets/produk/ducting_daikin.png'
import ducting_gree from '../assets/produk/ducting_gree.png'
import ducting_panasonic from '../assets/produk/ducting_panasonic.png'
import casette_daikin from '../assets/produk/casette_daikin.png'
import casette_gree from '../assets/produk/casette_gree.png'
import casette_panasonic from '../assets/produk/casette_panasonic.png'



const equipmentData = [
    {
        id: 1,
        name: 'AC Split Daikin',
        image: split_daikin,
        description: 'AC Split Gree 1 PK dengan teknologi hemat energi dan fitur pendinginan cepat.',
        type: 'split',
        brand: 'daikin',
    },
    {
        id: 2,
        name: 'AC Split Gree',
        image: split_gree,
        description: 'AC Split Gree 1 PK dengan teknologi hemat energi dan fitur pendinginan cepat.',
        type: 'split',
        brand: 'gree',
    },
    {
        id: 3,
        name: 'AC Split Panasonic',
        image: split_panasonic,
        description: 'AC Split Gree 1 PK dengan teknologi hemat energi dan fitur pendinginan cepat.',
        type: 'split',
        brand: 'panasonic',
    },
    {
        id: 4,
        name: 'AC Standing Daikin',
        image: standing_daikin,
        description: 'AC Ducting Daikin 2 PK untuk pendinginan area luas dengan distribusi udara merata.',
        type: 'ducting',
        brand: 'daikin',
    },
    {
        id: 5,
        name: 'AC Standing Gree',
        image: standing_gree,
        description: 'AC Ducting Daikin 2 PK untuk pendinginan area luas dengan distribusi udara merata.',
        type: 'ducting',
        brand: 'gree',
    },
    {
        id: 6,
        name: 'AC Standing Panasonic',
        image: standing_panasonic,
        description: 'AC Ducting Daikin 2 PK untuk pendinginan area luas dengan distribusi udara merata.',
        type: 'ducting',
        brand: 'panasonic',
    },
    {
        id: 7,
        name: 'AC Ducting Daikin',
        image: ducting_daikin,
        description: 'AC Standing Panasonic 3 PK dengan desain elegan dan performa tinggi.',
        type: 'standing',
        brand: 'daikin',
    },
    {
        id: 8,
        name: 'AC Ducting Gree',
        image: ducting_gree,
        description: 'AC Standing Panasonic 3 PK dengan desain elegan dan performa tinggi.',
        type: 'standing',
        brand: 'gree',
    },
    {
        id: 9,
        name: 'AC Ducting Panasonic',
        image: ducting_panasonic,
        description: 'AC Standing Panasonic 3 PK dengan desain elegan dan performa tinggi.',
        type: 'standing',
        brand: 'panasonic',
    },
    {
        id: 10,
        name: 'AC Casette Daikin',
        image: casette_daikin,
        description: 'AC Cassette Gree 2.5 PK untuk pendinginan 360 derajat, cocok untuk ruang kantor.',
        type: 'cassette',
        brand: 'daikin',
    },
    {
        id: 11,
        name: 'AC Casette Gree',
        image: casette_gree,
        description: 'AC Split Daikin 1.5 PK dengan teknologi inverter untuk penghematan listrik maksimal.',
        type: 'casette',
        brand: 'gree',
    },
    {
        id: 12,
        name: 'AC Casette Panasonic',
        image: casette_panasonic,
        description: 'AC Ducting Panasonic 3 PK untuk pendinginan area besar dengan kinerja optimal.',
        type: 'casette',
        brand: 'panasonic',
    },
];

function EquipmentCard({ equipment }) {
    return (
        <div className="bg-white shadow-md p-4 rounded transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
            <img 
                src={equipment.image}
                alt={equipment.name} 
                className="w-full h-40 object-cover mb-4 rounded transition-transform duration-300 hover:scale-110" 
            />
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
                <marquee behavior="scroll" direction="left">Kami menjunjung tinggi nilai kepercayaan, etika, moral, dan kejujuran di setiap langkah dalam melakukan kegiatan dan pengambilan keputusan.</marquee>
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