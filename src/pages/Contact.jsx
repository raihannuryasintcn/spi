import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import main from "../assets/main.png";
import ruko from "../assets/ruko.png";

export function Contact() {
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
          <img src={main} alt="" className="" />
        </div>
        <Heading title="KONTAK KAMI" />
        <div className="grid grid-cols-12 justify-center py-4">
          <div className="flex flex-col col-span-6 text-left justify-center">
            <h1 className="text-gray-700 text-xl pb-4 font-semibold">
              OFFICE/WORKSHOP
            </h1>
            <p className="text-gray-600 pr-4">
              Komplek Ruko Melawai Blok B No. 25 Taman Lembah Hijau Lippo
              Cikarang Bekasi 17550
            </p>
            <h1 className="text-gray-700 text-xl py-4 font-semibold">
              CONTACT PERSON
            </h1>
            <p className="text-gray-600 pr-4">Telp : 021- 8990 2463/ 8990 </p>
            <p className="text-gray-600 pr-4">Fax : 021- 8990 2599 </p>
            <p className="text-gray-600 pr-4">
              Email : scarlet_powerindonesia@yahoo.co.id{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center col-span-6 shadow-lg">
            {/* image strangely have 24px margin bottom */}
            <img src={ruko} alt="" className="mb-0" />
          </div>
        </div>

        <div className="flex justify-center items-center pt-12 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.360498726447!2d107.13689237586956!3d-6.347344362101454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699957e671f83d%3A0x9ff34f176e6ff168!2sPT.%20Scarlet%20Power%20Indonesia!5e0!3m2!1sen!2sid!4v1741185518543!5m2!1sen!2sid"
            width="750"
            height="450"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
