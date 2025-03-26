export const blogPosts = [
  {
    id: 1,
    title: "Cara Kerja AC: Mengenal Komponen dan Prinsip Dasar",
    image: "https://dummyimage.com/700x400/496ebd/ffffff.png",
    content: `
      <h2>Prinsip Dasar Cara Kerja AC</h2>
      <p>Air Conditioner (AC) bekerja berdasarkan prinsip termodinamika, di mana panas diserap dari dalam ruangan dan dibuang ke luar. Sistem ini menggunakan refrigeran sebagai media transfer panas yang bersirkulasi melalui siklus tertutup.</p>
      
      <h3>Komponen Utama AC dan Fungsinya</h3>
      <p><strong>1. Kompresor:</strong> Jantung dari sistem AC yang berfungsi memompa refrigeran dengan memampatkannya menjadi gas bertekanan tinggi dan bersuhu tinggi.</p>
      <p><strong>2. Kondensor:</strong> Terletak di unit outdoor, kondensor mendinginkan gas refrigeran panas sehingga berubah menjadi cairan. Proses ini melepaskan panas ke udara luar.</p>
      <p><strong>3. Katup Ekspansi:</strong> Menurunkan tekanan cairan refrigeran yang menyebabkan penurunan suhu drastis dan mengubahnya menjadi campuran cairan-gas.</p>
      <p><strong>4. Evaporator:</strong> Terletak di unit indoor, evaporator menyerap panas dari udara ruangan ketika refrigeran dingin mengalir melaluinya, mengubah refrigeran kembali menjadi gas.</p>
      <p><strong>5. Blower:</strong> Kipas yang menghembuskan udara melewati evaporator sehingga udara dingin disalurkan ke ruangan.</p>
      
      <h3>Siklus Pendinginan AC</h3>
      <p>Siklus pendinginan dimulai ketika kompresor memampatkan gas refrigeran menjadi gas bertekanan tinggi (70-150 psi) dengan suhu sekitar 50-60°C. Gas panas ini mengalir ke kondensor di mana kipas kondensor mendinginkannya dan merubahnya menjadi cairan.</p>
      <p>Cairan refrigeran bertekanan tinggi kemudian mengalir melalui katup ekspansi yang menurunkan tekanan secara drastis. Penurunan tekanan ini menyebabkan refrigeran berubah menjadi kabut dingin bersuhu sekitar 0-10°C.</p>
      <p>Refrigeran dingin ini masuk ke evaporator dan menyerap panas dari udara ruangan yang dihembuskan melewatinya. Selama proses ini, kabut refrigeran berubah kembali menjadi gas dan kembali ke kompresor untuk memulai siklus baru.</p>
      
      <h3>Efek Pendinginan pada Ruangan</h3>
      <p>Selain mendinginkan, AC juga mengurangi kelembaban udara. Ketika udara ruangan yang hangat bersentuhan dengan kumparan evaporator yang dingin, uap air dalam udara mengembun di permukaan evaporator dan dikumpulkan sebagai air kondensat yang kemudian dibuang keluar ruangan melalui saluran pembuangan.</p>
      <p>Proses ini membantu mengurangi kelembaban ruangan, memberikan sensasi lebih nyaman bahkan pada suhu yang relatif lebih tinggi.</p>
    `,
    author: "Ahmad Santoso",
    date: "Senin, 24 Maret 2025",
  },
  {
    id: 2,
    title: "Tips Menjaga Kualitas dan Efisiensi AC di Rumah",
    image: "https://dummyimage.com/700x400/496ebd/ffffff.png",
    content: `
      <h2>Perawatan Rutin untuk AC Rumah</h2>
      <p>Menjaga kualitas AC tidak hanya memperpanjang umur pakai tetapi juga memastikan efisiensi energi dan kenyamanan optimal. Berikut panduan lengkap merawat AC di rumah:</p>
      
      <h3>Pembersihan dan Penggantian Filter</h3>
      <p>Filter udara AC harus dibersihkan setiap 2-4 minggu tergantung penggunaan. Filter kotor dapat mengurangi aliran udara hingga 15% dan meningkatkan konsumsi energi hingga 25%. Cara membersihkan filter:</p>
      <ol>
        <li>Matikan unit AC dan cabut dari sumber listrik</li>
        <li>Buka panel depan dan keluarkan filter dengan hati-hati</li>
        <li>Cuci dengan air hangat dan deterjen lembut jika filter bisa dicuci</li>
        <li>Bilas bersih dan keringkan sepenuhnya sebelum dipasang kembali</li>
        <li>Ganti filter setiap 3-6 bulan jika jenisnya sekali pakai</li>
      </ol>
      
      <h3>Pemeriksaan dan Pembersihan Kondensor</h3>
      <p>Unit kondensor outdoor memerlukan perhatian khusus karena terpapar elemen luar ruangan:</p>
      <ol>
        <li>Matikan unit dan cabut dari sumber listrik</li>
        <li>Bersihkan area sekitar unit dari daun, ranting, dan puing-puing</li>
        <li>Gunakan sikat lembut atau penyedot debu untuk membersihkan sirip kondensor</li>
        <li>Luruskan sirip kondensor yang bengkok menggunakan alat khusus (fin comb)</li>
        <li>Jaga jarak minimal 60 cm di sekitar unit untuk ventilasi optimal</li>
      </ol>
      
      <h3>Pemeriksaan Kebocoran Refrigeran</h3>
      <p>Tanda-tanda kebocoran refrigeran meliputi penurunan kemampuan pendinginan, bekuan es pada saluran refrigeran, dan suara mendesis dari unit. Kebocoran kecil dapat menyebabkan penurunan efisiensi hingga 30%. Jika dicurigai ada kebocoran:</p>
      <ol>
        <li>Segera hubungi teknisi bersertifikat</li>
        <li>Jangan coba memperbaiki sendiri karena refrigeran berbahaya</li>
        <li>Teknisi akan melakukan tes tekanan dan memperbaiki kebocoran</li>
      </ol>
      
      <h3>Pemeliharaan Saluran Pembuangan</h3>
      <p>Saluran pembuangan yang tersumbat dapat menyebabkan kebocoran air dan kerusakan properti:</p>
      <ol>
        <li>Periksa saluran pembuangan setiap bulan</li>
        <li>Tuangkan secangkir cuka putih ke saluran untuk mencegah pertumbuhan algae</li>
        <li>Gunakan kawat pembersih pipa untuk menghilangkan sumbatan</li>
        <li>Pasang tablet anti-algae khusus AC di baki penampung</li>
      </ol>
      
      <h3>Jadwal Servis Profesional</h3>
      <p>Meskipun perawatan rutin bisa dilakukan sendiri, pemeriksaan profesional tetap diperlukan:</p>
      <ol>
        <li>Lakukan servis lengkap setahun sekali, idealnya sebelum musim panas</li>
        <li>Teknisi akan memeriksa level refrigeran, komponen elektronik, dan motor</li>
        <li>Pengukuran tekanan sistem dan arus listrik akan dilakukan</li>
        <li>Pembersihan menyeluruh pada komponen internal dan eksternal</li>
        <li>Teknisi akan memberikan rekomendasi untuk perbaikan atau penggantian jika diperlukan</li>
      </ol>
      
      <h3>Tips Penggunaan Efisien</h3>
      <p>Cara menggunakan AC secara efisien untuk hemat energi dan memperpanjang umur pakai:</p>
      <ol>
        <li>Atur suhu antara 24-26°C untuk keseimbangan optimal antara kenyamanan dan efisiensi</li>
        <li>Gunakan timer untuk mematikan AC saat tidak dibutuhkan</li>
        <li>Pasang tirai atau gorden untuk mengurangi panas dari luar</li>
        <li>Gunakan kipas angin bersamaan dengan AC untuk distribusi udara lebih baik</li>
        <li>Pastikan pintu dan jendela tertutup rapat saat AC menyala</li>
        <li>Pertimbangkan penggunaan AC inverter yang lebih hemat energi hingga 30-50%</li>
      </ol>
    `,
    author: "Dian Pratiwi",
    date: "Senin, 24 Maret 2025",
  },
];