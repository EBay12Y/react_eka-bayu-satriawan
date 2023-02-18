# (05) Version Control and Branch Management

## • Versioning

Versioning merupakan sebuah cara untuk mengatur versi dari source code program. Contohnya yaitu ketika melakukan revisi dalam file dokumen yang kita buat, dimana kita tidak langsung mengganti file dokumen kita. Namun kita akan memantau apa saja perubahan yang kita buat. Bila tidak kita pantau maka akan membuat kita atau orang lain menjadi bingung. Oleh karena itu, dilakukan version control system agar revisi yang kita lakukan pada dokumen menjadi lebih tercatat, jelas, dan rapih. Tools yang digunakan dalam melakukan pencatatan ini contohnya adalah Version Control System(VCM), Source Code Manager(SCM), Revision Control System (RCM).
Penggunaan VCM sebagai berikut, yang pertama adalah Single user (1972-1982), Centralized (1986-2005), Distributed (2005-Sekarang). Git merupakan salah satu penggunaan VCM yang cukup popular digunakan para developer saat ini.

## ~ Git Install & Setting UP

Menginstal git terlebih dahulu kemudian dapat melakukan konfigurasi dengan memasukan email dan username beserta password github.
Selanjutnya kita sudah dapat membuat clone repository atau melakukan git remote terhadap repository yang kita perlukan.
Contoh command yang dapat digunakan dalam git:

- “$ git init” Digunakan untuk membuat repository yang ada pada file lokal dan berlokasi di folder .git.
- “$ git status” Digunakan untuk mengecek status repository lokal.
- “$ git add .” Berfungsi untuk menambahkan semua file yang sudah dimodifikasi.
- “$ git commit -m <”pesan commit”> ” Berfungsi untuk melakukan commit dan juga memberikan pesan commit terhadap file yang dimodifikasi.
- “$ git diff –staged” Berfungsi untuk Menunjukan perbedaan yang ada pada area staging.
- “$ git stash” Berfungsi untuk menyimpan pada stash area.
- “$ git stash apply” Berfungsi untuk memanggil yang telah tersimpan dalam stash area.
- “$ git log --oneline” Berfungsi untuk menampilkan commit yang telah dilakukan dan idnya.
- “$ git checkout” Berfungsi untuk menavigasi antara branch yang sudah dibuat dalam git.
- “$ git reset” Berfungsi untuk mengembalikan keadaan ke titik sebelumnya.
- “$ git remote” Berfungsi untuk membuat, melihat, dan mendelete konseksi pada suatu repository.
- “$ git pull origin master” Berfungsi untuk mengambil commit dan file dari repository yang dituju untuk dimasukan dan mengupdate local repository.
- “$ git push origin master” Berfungsi untuk mengupload local repository kepada remote repository yang dituju.
- “$ git branch --list” Berfungsi untuk melist terdapat branch apa saja yang ada pada repository.
- “$ git branch <nama branch>” Berfungsi untuk membuat branch git baru dalam repository.
- “$ git branch -D <nama branch>” Berfungsi untuk menghapus branch git dalam repository.
- “$ git status” Berfungsi untuk menampilkan keadaan working directory dan staging area.

## ~ Catatan tambahan:

- Branch master jangan diubah ubah bila belum final.
- Apabila menambahkan atau mengubah usahakan membuat branch baru dahulu sebelum meminta pull request ke branch development.
- Buat branch development untuk menggabungkan setiap branch feature lain sebelum dimerge ke branch master.
