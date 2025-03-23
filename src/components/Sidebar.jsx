import { getCurrentDate } from "./Date";
import { useEffect } from "preact/hooks";

export function Sidebar() {
  const blogPosts = [
    { id: 1, title: "Judul Blog Pertama" },
    { id: 2, title: "Judul Blog Kedua" },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="bg-gray-300 w-full p-4 col-span-3 text-center">
      <h1 className="bg-white p-4 text-md italic text-gray-700 font-bold rounded-br-lg rounded-tl-lg shadow-md border-l-4 border-blue-500">
        {getCurrentDate()}
      </h1>

      {/* Blog Links */}
      <div className="my-4 shadow-md">
        <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">
          Recent Blog Posts
        </h1>
        <div className="bg-white p-4">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`} // ✅ Uses <a> instead of <Link>
              className="block text-blue-600 hover:underline"
            >
              {post.title}
            </a>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="my-4 shadow-md">
        <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">
          JOIN OUR SOCMED
        </h1>
        <div className="h-28 bg-white grid grid-cols-3 place-items-center text-gray-400">
          <a href="https://www.facebook.com/share/14jjd93s6M/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all duration-300 hover:scale-125">
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
          <a href="https://www.instagram.com/pt_scarlet_power_indonesia/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-all duration-300 hover:scale-125">
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </a>
          <a href="https://www.tiktok.com/@scarlet.air.conditioning" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all duration-300 hover:scale-125">
            <i className="fa-brands fa-tiktok fa-2xl"></i>
          </a>
        </div>
      </div>

      {/* Google Translate */}
      <div className="my-4 shadow-md">
        <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">
          TRANSLATE THIS WEBSITE
        </h1>
        <div id="google_translate_element" className="bg-white p-4"></div>
      </div>
    </div>
  );
}
