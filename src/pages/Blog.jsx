import { h } from "preact";
import { SEO } from "../components/seo/SEO";
import { Analytic } from "../components/Analytic";
import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import main from "../assets/main.png";

// Data Artikel
const blogPosts = [
  {
    id: 1,
    title: "Cara Kerja AC dan Perbaikan",
    image: "https://dummyimage.com/700x400/496ebd/ffffff.png",
    content: "AC bekerja dengan prinsip kompresi dan ekspansi refrigeran. Jika AC tidak dingin, periksa freon dan filter udara.",
    author: "Admin",
    date: "Senin, 25 Maret 2025",
  },
  {
    id: 2,
    title: "Panduan Troubleshooting AC Tidak Dingin",
    image: "https://dummyimage.com/700x400/496ebd/ffffff.png",
    content: "AC yang tidak dingin bisa disebabkan oleh freon habis, kipas mati, atau sirkulasi udara terganggu.",
    author: "Admin",
    date: "Selasa, 26 Maret 2025",
  },
];

export function Blog() {
  return (
    <div className="grid grid-cols-12 w-full h-auto">
      {/* Tambahkan SEO dan Analytics */}
      <SEO 
        title="Cara Kerja AC dan Perbaikan | Scarlet Power Indonesia"
        description="Pelajari cara kerja AC dan cara memperbaiki AC yang tidak dingin dengan mudah."
        keywords="cara kerja AC, perbaikan AC, service AC, AC tidak dingin"
        url="https://scarletpowerindonesia.com/cara-kerja-ac"
      />
      <Analytic />

      {/* Konten Utama */}
      <div className="bg-gray-100 w-full p-4 col-span-9">
        <div className="text-red-500 italic">
          <marquee behavior="scroll" direction="left">
            Selamat Datang di Website PT Scarlet Power Indonesia. Temukan info terbaru tentang AC di sini.
          </marquee>
        </div>
        <div className="flex items-center pb-4">
          <img src={main} alt="Main Image" className="w-full object-cover" />
        </div>

        {/* Blog Posts */}
        {blogPosts.map((post) => (
          <div key={post.id} className="px-8 py-6 bg-white rounded-lg shadow-md mb-6">
            <Heading title={post.title} />
            <div className="flex items-center justify-center">
              <img src={post.image} alt={post.title} className="py-4 w-full object-cover rounded-md" />
            </div>
            <p className="text-gray-700 text-lg font-semibold mb-2">{post.title}</p>
            <p className="text-gray-600 text-justify">{post.content}</p>
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
