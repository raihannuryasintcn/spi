import { Sidebar } from "../components/Sidebar";

export function NotFound() {
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
        <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mt-2">
            Oops! sepertinya halaman yang anda masukkan salah.
          </p>
          <a href="/">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Kembali
            </button>
          </a>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
