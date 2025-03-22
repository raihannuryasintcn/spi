import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import main from "../assets/main.png";
import LogoMarquee from "../components/LogoMarquee.jsx";
import teknisi from "../assets/teknisi.png";

export function Blog() {
  return (
    <div className="grid grid-cols-12 w-full h-auto">
      {/* Konten utama */}
      <div className="bg-gray-100 w-full p-4 col-span-9">
        {/* Marquee teks berjalan */}
        <div className="text-red-500 italic">
          <marquee behavior="scroll" direction="left">
            Selamat Datang di Website resmi PT Scarlet Power Indonesia semoga
            para pengunjung dapat memperoleh informasi yang bermanfaat di
            website ini
          </marquee>
        </div>

        {/* Gambar utama */}
        <div className="flex items-center pb-4">
          <img src={main} alt="Main Image" className="object-fill" />
        </div>

        {/* Blog */}
        <Heading title="Blog 1" />
        <div className="px-16 py-4">
          <div className="flex items-center justify-center">
          <img
            src="https://dummyimage.com/700x400/496ebd/ffffff.png"
            alt="Blog 1"
            className="py-4 "
          />
          </div>

          <h1 className="text-gray-700 text-xl pb-4 font-semibold">
            Heading Blog 1
          </h1>
          <p
            className="text-gray-600 pb-4 text-left"
            style={{ textAlign: "justify" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            perspiciatis possimus, deserunt earum harum voluptatem cum enim
            repudiandae soluta, quasi tempore aut, labore minima repellat hic.
            Minus sunt officia eligendi!
          </p>
          <h1 className="text-gray-700 text-xl pb-4 font-semibold">
            Heading Blog 1
          </h1>
          <p
            className="text-gray-600 pb-4 text-left"
            style={{ textAlign: "justify" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            placeat dicta, minima, fugit fugiat accusamus quod reprehenderit
            voluptate obcaecati quisquam at temporibus harum in eaque deserunt
            expedita dolore, explicabo mollitia eum ullam autem vel! Provident
            tempora amet qui iste ea!
          </p>
          <p
            className="text-gray-600 pb-4 text-left"
            style={{ textAlign: "justify" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nisi ex quas consequatur explicabo expedita. Aliquam commodi veniam
            totam corrupti. Deserunt, iusto! Eum unde similique possimus magnam.
            Blanditiis est natus praesentium ipsa, ut tenetur, odio dolore
            cupiditate et consequuntur provident quis veritatis? Iure soluta
            cumque possimus quibusdam officia voluptates aperiam.
          </p>
          <div className="text-gray-400 italic">
          <p>Penulis: John Doe</p>
          <p>Tanggal: Selasa, 10 Maret 2025</p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}
