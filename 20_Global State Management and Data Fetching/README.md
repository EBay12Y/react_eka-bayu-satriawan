# (20) Resume Materi Global State Management

## Global State Introduction
- Action digunakan untuk memberikan informasi atau perintah dari aplikasi ke store
- Reducer mengambil state saat ini dan object action lalu mengembalikan state baru ke aplikasi
- Store merupakan tempat untuk menyimpan state pada aplikasi

1. Redux merupakan library untuk manajemen state global
2. Redux menggunakan struktur "one-way data flow"
3. Redux menggunakan beberapa tipe code

## Redux Thunk
Thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

Thunk diperlukan untuk menghandle side effect logic yang kompleks dan logic async seperti request data.

## Persisted State
Suatu konsep untuk menyimpan state suatu aplikasi ke dalam local storage pada browser. Penggunaan persisted state daoat membantu mengurangi waktu akses ke sumber eksternal seperti database atau API karena data yang diambil telah disimpan secara lokal. Penggunaan persisted state juga memungkinkan aplikasi untuk menyimpan preferensi atau konfigurasi pengguna, sehingga pengguna tidak perlu mengatur ulang setiap kali mereka membuka aplikasi. 

## Hasura
Hasura merupakan sebuah platform yang memungkinkan pengguna untuk membangun API GraphQL secara cepat dan mudah dengan memanfaatkan database PostgreSQL. Hasura dapat dipasangkan dengan banyak bahasa pemrograman dan framework, serta memiliki kemampuan untuk mengotomatisasi beberapa tugas yang terkait dengan pengembangan API, seperti menghasilkan skema GraphQL, mengelola database, dan mengamankan endpoint.

Perintah REST API di Hasura
1. Create
2. Read
3. Update
4. Delete

## Rest API Postman
Postman adalah sebuah aplikasi yang digunakan untuk melakukan pengujian dan pengembangan (development) API (Application Programming Interface). 

Alasan menggunakan postman
1. Tampilan antarmuka yang sederhana dan mudah dipahami
2. Mudah untuk berkolaborasi dengan sinkronisasi otomatis dengan anggota lain
3. POSTMAN gratis hingga 3 anggota dan koleksi tidak terbatas

## React REST API
React REST API merupakan salah satu teknologi yang digunakan untuk menghubungkan aplikasi React dengan RESTful API. Dalam pengembangan aplikasi web modern, REST API sangat penting karena memungkinkan pengembang untuk memisahkan antara tampilan dan logika bisnis, sehingga memungkinkan aplikasi menjadi lebih scalable dan mudah dikembangkan.

Command untuk melakukan instalasi menggunakan terminal
'npx create-react-app my-app'
'cd my-app'
'npm install axios'
'npm start'
