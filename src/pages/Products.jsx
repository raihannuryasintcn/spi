import { useState } from 'react';
import { Heading } from '../components/Heading';
import { Sidebar } from '../components/Sidebar';
import main from '../assets/main.png';

const equipmentData = [
  {
    id: 1,
    name: 'AC Cassette 1 PK',
    image: 'src/assets/produk/gree5.png',
    description: 'AC Casette GREE dengan teknologi hemat energi.',
    type: 'cassette',
    brand: 'gree',
  },
  {
    id: 2,
    name: 'AC Ducting 1 PK',
    image: 'src/assets/produk/gree6.png',
    description: 'Sistem AC Ducting GREE untuk gedung.',
    type: 'ducting',
    brand: 'gree',
  },
  {
    id: 3,
    name: 'AC Standing 3 PK',
    image: 'src/assets/produk/gree7.png',
    description: 'AC Standing GREE untuk ruangan besar.',
    type: 'standing',
    brand: 'gree',
  },
  {
    id: 4,
    name: 'AC Split Gree 2.5 PK',
    image: 'src/assets/produk/gree8.png',
    description: 'AC Split GREE dengan teknologi inverter.',
    type: 'split',
    brand: 'gree',
  },
  {
    id: 5,
    name: 'AC Cassette Daikin 1 PK',
    image: 'src/assets/produk/daikin1.png',
    description: 'AC Casette DAIKIN dengan teknologi hemat energi.',
    type: 'cassette',
    brand: 'daikin',
  },
  {
    id: 6,
    name: 'AC Ducting Daikin 1 PK',
    image: 'src/assets/produk/daikin2.png',
    description: 'Sistem AC Ducting DAIKIN untuk gedung.',
    type: 'ducting',
    brand: 'daikin',
  },
  {
    id: 7,
    name: 'AC Standing Daikin 2 PK',
    image: 'src/assets/produk/daikin3.png',
    description: 'AC Standing DAIKIN untuk ruangan besar.',
    type: 'standing',
    brand: 'daikin',
  },
  {
    id: 8,
    name: 'AC Split Daikin 2.5 PK',
    image: 'src/assets/produk/daikin4.png',
    description: 'AC Split DAIKIN dengan teknologi inverter.',
    type: 'split',
    brand: 'daikin',
  },
  {
    id: 9,
    name: 'AC Cassette Panasonic 4 PK',  
    image: 'src/assets/produk/panasonic9.png',  
    description: 'AC Cassette PANASONIC 4 PK dengan teknologi hemat energi dan pendinginan optimal.',  
    type: 'cassette',  
    brand: 'panasonic',  
  },
  {
    id: 10,
    name: 'AC Ducting Panasonic 3 PK',  
    image: 'src/assets/produk/panasonic10.png',  
    description: 'AC Ducting PANASONIC 3 PK dengan sistem pendinginan tersembunyi untuk kenyamanan maksimal.',  
    type: 'ducting',  
    brand: 'panasonic',  
  },
  {
    id: 11,
    name: 'AC Standing Panasonic 5 PK',  
    image: 'src/assets/produk/panasonic12.png',  
    description: 'AC Standing PANASONIC 5 PK dengan daya pendinginan kuat dan cocok untuk ruangan besar.',  
    type: 'standing',  
    brand: 'panasonic',  
  },
  {
    id: 12,
    name: 'AC Split Panasonic 2 PK',  
    image: 'src/assets/produk/panasonic11.png',  
    description: 'AC Split PANASONIC 2 PK dengan teknologi inverter hemat energi dan desain modern.',  
    type: 'split',  
    brand: 'panasonic'  
  },
  {
    id: 13,
    name: 'AC Cassette LG 7 PK',  
    image: 'src/assets/produk/lg13.png',  
    description: 'AC Cassette LG 7 PK dengan kapasitas pendinginan besar dan teknologi hemat energi.',  
    type: 'cassette',  
    brand: 'lg',  
  },
  {
    id: 14,
    name: 'AC Ducting LG 5 PK',  
    image: 'src/assets/produk/lg14.png',  
    description: 'AC Ducting LG 5 PK dengan sistem distribusi udara tersembunyi untuk efisiensi maksimal.',  
    type: 'ducting',  
    brand: 'lg',  
  },
  {
    id: 15,
    name: 'AC Standing LG 7 PK',  
    image: 'src/assets/produk/lg15.png',  
    description: 'AC Standing LG 7 PK dengan daya pendinginan tinggi dan cocok untuk area luas.',  
    type: 'standing',  
    brand: 'lg',  
  },
  {
    id: 16,
    name: 'AC Split LG 3 PK',  
    image: 'src/assets/produk/lg16.png',  
    description: 'AC Split LG 3 PK dengan teknologi inverter canggih dan desain elegan.',  
    type: 'split',  
    brand: 'lg'  
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

export function Products() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');

  // Menambahkan handler yang hilang
  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrandFilter(e.target.value);
  };

  const filteredEquipment = equipmentData.filter(equipment => {
    return (typeFilter === 'all' || equipment.type === typeFilter) &&
           (brandFilter === 'all' || equipment.brand === brandFilter);
  });

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