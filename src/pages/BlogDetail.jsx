import { useRoute } from "preact-iso/router";
import { blogPosts } from "../data/blogData";
import { Sidebar } from "../components/Sidebar";
import { useEffect } from "preact/hooks";

export function BlogDetail() {
  const { params } = useRoute();
  const blogId = parseInt(params.id, 10);
  const blog = Number.isNaN(blogId) ? null : blogPosts.find((post) => post.id === blogId);

  useEffect(() => {
    if (!blog) {
      console.warn(`Blog dengan ID ${params.id} tidak ditemukan.`);
    }
  }, [params.id]);

  if (!blog) {
    return <h1 className="text-center text-red-600 font-semibold">Blog Not Found</h1>;
  }

  return (
    <div className="grid grid-cols-12 w-full h-auto">
      {/* Main Content */}
      <div className="bg-gray-100 w-full p-4 col-span-9">
        <div className="px-8 py-6 bg-white rounded-lg shadow-md mb-6">
          <h1 className="text-gray-900 text-3xl font-bold">{blog.title}</h1>
          <div className="flex items-center justify-center">
            <img
              src={blog.image}
              alt={blog.title || "Blog Image"}
              className="py-4 w-full object-cover rounded-md"
            />
          </div>
          <div
            className="text-gray-700 leading-relaxed text-justify space-y-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <div className="text-gray-500 italic mt-4">
            <p>✍️ Penulis: {blog.author}</p>
            <p>📅 Tanggal: {blog.date}</p>
          </div>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline mt-4 block">
            ← Kembali ke Beranda
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}
