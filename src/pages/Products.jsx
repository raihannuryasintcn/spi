import { useState } from "react";
import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import main from "../assets/main.png";
import split_daikin from "../assets/produk/split_daikin.png";
import split_gree from "../assets/produk/split_gree.png";
import split_panasonic from "../assets/produk/split_panasonic.png";
import standing_daikin from "../assets/produk/standing_daikin.png";
import standing_gree from "../assets/produk/standing_gree.png";
import standing_panasonic from "../assets/produk/standing_panasonic.png";
import ducting_daikin from "../assets/produk/ducting_daikin.png";
import ducting_gree from "../assets/produk/ducting_gree.png";
import ducting_panasonic from "../assets/produk/ducting_panasonic.png";
import casette_daikin from "../assets/produk/casette_daikin.png";
import casette_gree from "../assets/produk/casette_gree.png";
import casette_panasonic from "../assets/produk/casette_panasonic.png";

const equipmentData = [
  {
    id: 1,
    name: "AC Split Daikin",
    image: split_daikin,
    description:
      "AC split premium dari Daikin dengan teknologi canggih untuk kesejukan maksimal.",
    type: "split",
    brand: "daikin",
  },
  {
    id: 2,
    name: "AC Split Gree",
    image: split_gree,
    description:
      "AC split hemat energi dari Gree, solusi pendinginan efisien untuk ruangan Anda.",
    type: "split",
    brand: "gree",
  },
  {
    id: 3,
    name: "AC Split Panasonic",
    image: split_panasonic,
    description:
      "AC split andal dari Panasonic dengan performa tinggi dan udara lebih bersih.",
    type: "split",
    brand: "panasonic",
  },
  {
    id: 4,
    name: "AC Standing Daikin",
    image: standing_daikin,
    description:
      "AC standing bertenaga dari Daikin, ideal untuk ruangan luas dan sirkulasi udara optimal.",
    type: "standing",
    brand: "daikin",
  },
  {
    id: 5,
    name: "AC Standing Gree",
    image: standing_gree,
    description:
      "AC standing kokoh dari Gree dengan pendinginan cepat dan hemat energi.",
    type: "standing",
    brand: "gree",
  },
  {
    id: 6,
    name: "AC Standing Panasonic",
    image: standing_panasonic,
    description:
      "AC standing tahan lama dari Panasonic, memberikan kesejukan merata di seluruh ruangan.",
    type: "standing",
    brand: "panasonic",
  },
  {
    id: 7,
    name: "AC Ducting Daikin",
    image: ducting_daikin,
    description:
      "AC ducting inovatif dari Daikin, solusi terbaik untuk sistem pendinginan tersembunyi.",
    type: "ducting",
    brand: "daikin",
  },
  {
    id: 8,
    name: "AC Ducting Gree",
    image: ducting_gree,
    description:
      "AC ducting efisien dari Gree, memberikan udara sejuk yang merata di setiap sudut.",
    type: "ducting",
    brand: "gree",
  },
  {
    id: 9,
    name: "AC Ducting Panasonic",
    image: ducting_panasonic,
    description:
      "AC ducting berkinerja tinggi dari Panasonic, menghadirkan kenyamanan optimal.",
    type: "ducting",
    brand: "panasonic",
  },
  {
    id: 10,
    name: "AC Cassette Daikin",
    image: casette_daikin,
    description:
      "AC cassette elegan dari Daikin dengan desain modern dan distribusi udara merata.",
    type: "cassette",
    brand: "daikin",
  },
  {
    id: 11,
    name: "AC Cassette Gree",
    image: casette_gree,
    description:
      "AC cassette modern dari Gree, memberikan kesejukan maksimal dengan desain stylish.",
    type: "cassette",
    brand: "gree",
  },
  {
    id: 12,
    name: "AC Cassette Panasonic",
    image: casette_panasonic,
    description:
      "AC cassette hemat energi dari Panasonic, solusi ideal untuk ruangan dengan plafon tinggi.",
    type: "cassette",
    brand: "panasonic",
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
      <h3 className="text-lg font-semibold mb-2 text-gray-700">
        {equipment.name}
      </h3>
      <p className="text-sm text-gray-600">{equipment.description}</p>
      <a href="https://api.whatsapp.com/send/?phone=6283808481122&text=Saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Produk%20AC%20😄👋">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Hubungi Kami
        </button>
      </a>
    </div>
  );
}

export function Products() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [brandFilter, setBrandFilter] = useState("all");

  const filteredEquipment = equipmentData.filter((equipment) => {
    return (
      (typeFilter === "all" || equipment.type === typeFilter) &&
      (brandFilter === "all" || equipment.brand === brandFilter)
    );
  });

  const handleTypeChange = (e) => setTypeFilter(e.target.value);
  const handleBrandChange = (e) => setBrandFilter(e.target.value);

  return (
    <div className="grid grid-cols-12 w-full h-auto">
      <div className="bg-gray-100 w-full p-4 col-span-9">
        <div className="text-red-500 italic">
          <marquee behavior="scroll" direction="left">
            Kami menjunjung tinggi nilai kepercayaan, etika, moral, dan
            kejujuran di setiap langkah dalam melakukan kegiatan dan pengambilan
            keputusan.
          </marquee>
        </div>
        <div className="flex items-center pb-4">
          <img src={main} alt="" className="object-fill" />
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
          </select>
        </div>
        <div className="grid grid-cols-3 gap-6 pb-4">
          {filteredEquipment.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
