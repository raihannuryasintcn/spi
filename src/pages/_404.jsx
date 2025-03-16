export  function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! sepertinya halaman yang anda masukkan salah.</p>
      <a href="/">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Kembali
        </button>
      </a>
    </div>
  );
}