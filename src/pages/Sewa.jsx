import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import main from "../assets/main.png";
import bor_bumi from "../assets/sewa/bor-bumi.png";
import genset from "../assets/sewa/genset.png";
import molen from "../assets/sewa/molen.png";
import scaffolding from "../assets/sewa/scaffolding.png";

const equipmentData = [
  {
    id: 1,
    name: "Bor Bumi",
    image: bor_bumi,
    description:
      "Mesin bor tanah bertenaga tinggi untuk pengeboran sumur, pertanian, dan konstruksi.",
  },
  {
    id: 2,
    name: "Genset",
    image: genset,
    description:
      "Generator listrik 5000 watt, solusi andal untuk cadangan listrik di rumah, proyek, atau acara outdoor.",
  },
  {
    id: 3,
    name: "Mesin Molen",
    image: molen,
    description:
      "Mesin molen beton berkualitas tinggi untuk mencampur adukan secara efisien dalam proyek konstruksi.",
  },
  {
    id: 4,
    name: "Scaffolding",
    image: scaffolding,
    description:
      "Rangka scaffolding kokoh dan aman untuk mendukung pekerjaan konstruksi di ketinggian.",
  },
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
      <h3 className="text-lg font-semibold mb-2 text-gray-700">
        {equipment.name}
      </h3>
      <p className="text-sm text-gray-600">{equipment.description}</p>

      <a href="https://api.whatsapp.com/send/?phone=6283808481122&text=Saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Sewa%20Alat%20😄👋">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Sewa Sekarang
        </button>
      </a>
    </div>
  );
}

export function Sewa() {
  return (
    <div className="grid grid-cols-12 w-full h-auto">
      <div className="bg-gray-100 w-full p-4 col-span-9">
        <div className="text-red-500 italic">
          <marquee behavior="scroll" direction="left">
            Selamat Datang di Website resmi PT Scarlet Power Indonesia semoga
            para pengunjung dapat memperoleh informasi yang bermanfaat di
            website ini
          </marquee>
        </div>

        <div className="flex items-center pb-4">
          <img src={main} alt="" className="object-fill" />
        </div>

        <Heading title="SEWA ALAT" />
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
