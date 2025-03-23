import { useRoute } from "preact-iso/router";
import { blogPosts } from "../data/blogData";
import { Sidebar } from "../components/Sidebar";

export function BlogDetail() {
  const { params } = useRoute();
  const blog = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!blog) {
    return (
      <h1 className="text-center text-red-600">Blog Not Found</h1>
    );
  }

  return (
    <div className="grid grid-cols-12 w-full h-auto">
      {/* Main Content */}
      <div className="bg-gray-100 w-full p-4 col-span-9">
        <div className="px-8 py-6 bg-white rounded-lg shadow-md mb-6">
          <h1 className="text-gray-700 text-2xl font-bold">{blog.title}</h1>
          <div className="flex items-center justify-center">
            <img
              src={blog.image}
              alt={blog.title}
              className="py-4 w-full object-cover rounded-md"
            />
          </div>
          <p className="text-gray-600 text-justify">{blog.content}</p>
          <div className="text-gray-500 italic mt-4">
            <p>Penulis: {blog.author}</p>
            <p>Tanggal: {blog.date}</p>
          </div>
          <a href="/" className="text-blue-500 underline mt-4 block">
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}
