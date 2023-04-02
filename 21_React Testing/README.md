# (21) Resume Materi React Testing

## Basic Testing
Testing merupakan proses melakukan verifikasi bahwa test assertions kita benar dan code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali terjadi bug di kode kita.

Manfaat testing:
- Ketika aplikasi Kita mempunyai COverage yang baik (mayoritas codebase tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

Kategori testing:
1. Rendering component trees di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.
2. Menjalankan aplikasi lengkap di dalam environment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end".

## Create Basic Testing with RTL
Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.

React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk
assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL.

Contohnya ialah 
1. LabelText: getByLabelText: <label for="search" />
2. PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
3. AltText: getByAltText: <img alt="profile" />
4. DisplayValue: getByDisplayValue: <input value="|JavaScript'" />

Handle Asynchronous digunakan untuk mengetes fetch sebuah API. Didalam kasus ini kita perlu membuat mock untuk axios dan selanjutnya kita perlu membuat mock promise yang hasilnya akan ke-resolve atau reject.

## Testing Custom Hook
Library yang digunakan untuk mengetes custom hooks adalah dengan menggunakan react hooks testing library. Cara menginstall : npm install -D @testing-library/react-hooks.