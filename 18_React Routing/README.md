# (18) Resume Materi React Routing

## Routes Learning
Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application). SPA (Single Page Application) merupakan salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut. Sedangkan MPA (Multi Page Application) atau tradisional web app merupakan jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru. 

BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML 5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam objek location sendiri merepresentasikan dimana lokasi aplikasi sekarang. Route digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web. Switch digunakan untuk membungkus kumpulan beberapa component Route. Link digunakan untuk berpindah antar halaman. 

## Use url params
Parameter url merupakan suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman. 
Contohnya yaitu: <Route exact path="/movie/:id" component={MovieDetailsContainer} />

Perbedaan antara Link dan Redirect

Link:
- Dapat digunakan pada kondisi apapun
- Memberikan history baru pada browser
- Bereaksi dengan click seperti tag a href

Redirect:
- Lebih sering digunakan pada halaman 404
- Menimpa history pada browser
- Bereaksi dengan suatu kondisi

## Hook Routing React
useHistory memberi kita akses ke instance riwayat yang dapat digunakan untuk bernavigasi
Contohnya: length, go, goBack, goForward, dst

useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini.

useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.