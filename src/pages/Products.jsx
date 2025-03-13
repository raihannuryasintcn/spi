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

  // Filtering logic
  const filteredEquipment = products.filter(equipment => {
    const typeMatch = typeFilter === 'all' || equipment.type.toLowerCase() === typeFilter.toLowerCase();
    const brandMatch = brandFilter === 'all' || equipment.brand.toLowerCase() === brandFilter.toLowerCase();
    return typeMatch && brandMatch;
  });

  const handleTypeChange = (e) => setTypeFilter(e.target.value);
  const handleBrandChange = (e) => setBrandFilter(e.target.value);

  return (
    <div className="grid grid-cols-12 w-full h-auto">
      <div className="bg-gray-100 w-full p-4 col-span-9">
        <div className="text-red-500 italic">
          <marquee behavior="scroll" direction="left">
            Selamat Datang di Website resmi PT Scarlet Power Indonesia semoga para pengunjung dapat memperoleh informasi yang bermanfaat di website ini
          </marquee>
        </div>
        <div className="flex items-center pb-4">
          <img src={main} alt="Main Banner" className="object-fill" />
        </div>
        <Heading title="PRODUK KAMI" />
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