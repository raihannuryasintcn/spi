import { getCurrentDate } from "./Date";
import { useEffect } from 'react';
import '../types/google-translate.d.ts';

export function Sidebar() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = function() {
            new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
        };

        return () => {
            document.body.removeChild(script);
            delete window.googleTranslateElementInit;
        };
    }, []);

    return (
        <div className="bg-gray-300 w-full p-4 col-span-3 text-center">
            <h1 className="bg-white p-4 text-md italic text-gray-700 font-bold">{getCurrentDate()}</h1>

            <div className="my-4">
                <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">JOIN OUR SOCMED</h1>
                <div className="h-28 bg-white grid grid-cols-12 place-items-center text-blue-500">
                    <a href="https://facebook.com" className="col-span-4">
                        <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a href="https://twitter.com" className="col-span-4">
                        <i className="fa-brands fa-twitter fa-2xl"></i>
                    </a>
                    <a href="https://youtube.com" className="col-span-4">
                        <i className="fa-brands fa-youtube fa-2xl"></i>
                    </a>
                </div>
            </div>

            <div className="my-4">
                <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">TRANSLATE THIS WEBSITE</h1>
                <div id="google_translate_element" className="bg-white p-4"></div>
            </div>

            {/* Menambahkan link "Cara Kerja AC" */}
            <div className="my-4">
                <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">ARTICLE</h1>
                <ul className="list-none p-0">
                    <li>
                        <a href="/cara-kerja-ac" className="hover:text-blue-500">
                            Cara Kerja AC
                        </a>
                    </li>
                    {/* Tambahkan link lain jika diperlukan */}
                </ul>
            </div>
        </div>
    );
}