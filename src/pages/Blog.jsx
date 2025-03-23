import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import main from "../assets/main.png";
import { useState } from "react";

// Dummy blog data (easily replaceable with API or CMS)
const blogPosts = [
  {
    id: 1,
    title: "Judul Blog Pertama",
    image: "https://dummyimage.com/700x400/496ebd/ffffff.png",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              perspiciatis possimus, deserunt earum harum voluptatem cum enim
              repudiandae soluta, quasi tempore aut, labore minima repellat hic.`,
    author: "John Doe",
    date: "Selasa, 10 Maret 2025",
  },
  {
    id: 2,
    title: "Judul Blog Kedua",
    image: "https://dummyimage.com/700x400/496ebd/ffffff.png",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              placeat dicta, minima, fugit fugiat accusamus quod reprehenderit
              voluptate obcaecati quisquam at temporibus harum in eaque deserunt
              expedita dolore, explicabo mollitia eum ullam autem vel!`,
    author: "Jane Smith",
    date: "Rabu, 11 Maret 2025",
  },
];

export function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  return (
    <div className="grid grid-cols-12 w-full h-auto">
      {/* Konten utama */}
      <div className="bg-gray-100 w-full p-4 col-span-9">
        {/* Marquee teks berjalan */}
        <div className="text-red-500 italic">
          <marquee behavior="scroll" direction="left">
            Selamat Datang di Website resmi PT Scarlet Power Indonesia. Semoga
            para pengunjung memperoleh informasi bermanfaat di website ini.
          </marquee>
        </div>

        {/* Gambar utama */}
        <div className="flex items-center pb-4">
          <img src={main} alt="Main Image" className="w-full object-cover" />
        </div>

        {/* Blog Content (Looping dari Data) */}
        {blogPosts.map((post) => (
          <div key={post.id} className="px-8 py-6 bg-white rounded-lg shadow-md mb-6">
            <Heading title={post.title} />
            <div className="flex items-center justify-center">
              <img
                src={post.image}
                alt={post.title}
                className="py-4 w-full object-cover rounded-md"
              />
            </div>
            <p className="text-gray-700 text-lg font-semibold mb-2">
              {post.title}
            </p>
            <p className="text-gray-600 text-justify">
              {expandedPost === post.id ? post.content : `${post.content.substring(0, 100)}...`}
            </p>
            <button
              onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
              className="mt-3 text-blue-500 hover:underline"
            >
              {expandedPost === post.id ? "Show Less" : "Read More"}
            </button>
            <div className="text-gray-500 italic mt-4">
              <p>Penulis: {post.author}</p>
              <p>Tanggal: {post.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}
