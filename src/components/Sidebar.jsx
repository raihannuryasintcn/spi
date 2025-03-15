import { getCurrentDate } from "./Date";
import { useEffect } from "react";
import "../types/google-translate.d.ts";

export function Sidebar() {
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
      <h1
        className="bg-white p-4 text-md italic text-gray-700 font-bold 
                        rounded-br-lg rounded-tl-lg shadow-md border-l-4 border-blue-500 
                        before:content-[''] before:absolute before:top-0 before:left-0 
                        before:w-full before:h-full before:bg-blue-100/30 before:rounded-br-lg before:rounded-tl-lg 
                        relative"
      >
        {getCurrentDate()}
      </h1>
      <div className="my-4 shadow-md">
        <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">
          JOIN OUR SOCMED
        </h1>
        <div className="h-28 bg-white grid grid-cols-12 place-items-center text-gray-400  ">
          <a
            href="https://facebook.com"
            className=" col-span-4 hover:text-blue-600 transition-all duration-300 hover:scale-125 transform"
          >
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            className="col-span-4 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
          >
            <i className="fa-brands fa-twitter fa-2xl "></i>
          </a>
          <a
            href="https://youtube.com"
            className="col-span-4 hover:text-red-600 transition-all duration-300 hover:scale-125 transform"
          >
            <i className="fa-brands fa-youtube fa-2xl "></i>
          </a>
        </div>
      </div>

      <div className="my-4 shadow-md">
        <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">
          TRANSLATE THIS WEBSITE
        </h1>
        <div id="google_translate_element" className="bg-white p-4"></div>
      </div>
    </div>
  );
}
