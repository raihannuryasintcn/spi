import { useLocation } from "preact-iso";
import { Carousel } from "./Carousel"; // Import the Carousel component
import header from "../assets/header.jpg";

export function Header() {
  const { url } = useLocation();

  // Navigation links
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "OUR GALLERY", path: "/gallery" },
    { name: "OUR PRODUCTS", path: "/products" },
    { name: "OUR CLIENTS", path: "/clients" },
    { name: "SEWA ALAT", path: "/sewa" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="w-full h-auto bg-gray-500">
      <img src={header} alt="" className="object-fill" />

      {/*CAROUSEL HERE*/}
      <Carousel />

      <nav className="flex flex-row bg-gradient-to-t from-red-500 to-red-300 p-2">
        <div className="mx-auto flex justify-center items-center">
          <ul className="flex justify-between space-x-12 xs:text-[60%]">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className={`text-gray-100 text-l font-semibold hover:text-yellow-300 hover:text-lg transition-all duration-300 ${
                    url === link.path
                      ? "font-bold text-lg border-b-2 border-white hover:border-yellow-300 transition duration-300"
                      : ""
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
