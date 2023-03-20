# (19) Resume Materi React Form

## Basic Form
Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form digunakan untuk menghandle inputan dari user. Element <input> biasanya digunakan untuk inputan yang tidak terlalu panjang. Element <textarea> biasanya digunakan untuk inputan yang cukup panjang, misalnya deskripsi. Element <select> biasanya digunakan untuk inputan yang pilihannya sudah ditentukan. Radio button merupakan salah satu type di element <input> yang hanya bisa memilih 1 opsi dari beberapa opsi lain ketika menggunakan radio button. Checkbox merupakan salah satu type di elemen <input> yang kita bisa memilih lebih dari 1 opsi ketika menggunakan checkbox.

Type elemen input lainnya:
- text (default)            - image             - submit
- button                    - month             - tel
- color                     - number            - time
- checkbox                  - password          - url
- date                      - radio             - week
- datetime-local            - range
- email                     - reset
- file                      - search
- hidden

## Controlled Component
Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai controlled component". 

Di React, <textarea> menggunakan atribut value. Dengan cara ini, sebuah form yang menggunakan <textarea> dapat ditulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris. Di React, alih-alih menggunakan atribut selected, kita menggunakan atribut value di tag select. Hal ini lebih mudah karena hanya perlu diubah di satu tempat saja.

Ketika kita membutuhkan penanganan banyak elemen pada controlled component, kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name.

## Uncontrolled Component
Uncontrolled component merupakan alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM. Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component.

Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.

Dalam React, sebuah <input type="file" /> merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

## Uncontrolled Component VS Controlled Component
Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita. Jika formulir sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik-baik saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu "buruk". Lagipula kita selalu dapat bermigrasi ke controlled input.

## Basic Validation
Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan:
1. Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
2. Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman
3. Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi

Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server. Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi.

Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna. Berbeda dengan validasi sisi klien, validasi ini tidak user-friendly. Karena, koreksi kesalahan akan dikirimkan, setelah form di-submit.