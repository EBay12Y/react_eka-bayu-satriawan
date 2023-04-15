# (27) Resume Materi GraphQL Query and Mutation

## Query
Cara menggunakan Query dengan apollo client :
1.	Import gql dan useQuery atau anda bisa langsung menyalin dari hasura.
2.	Memanggil useQuery dengan tujuan mendapatkan data awal
3.	Melakukan komsumsi data yang terdapat pada kode jsx, pastikan bahwa pada permintaan pertama data adalah nol sehingga perlu menggunakan rangkaian opsional untuk menghindari kesalahan.

Penggunaan Query dengan Apollo Client – Lazy Query :
useLazyQuery sangat cocok untuk mengeksekusi Query sebagai respons selain rendering komponen. Berbeda dengan useQuery, pemanggilan useLazyQuery, tidak akan segera mengeksekusi Query yang terkait. 

Penggunaan Query dengan Apollo Client – Refetching :
Refetching merupakan proses pengambilan ulang yang memungkinkan dalam menyegarkan hasil Query sebagai respons terhadap tindakan seorang pengguna. Refetching tidak menggunakan interval tetap. Cara kerjanya adalah secara opsional yaitu dengan memberikan objek variabel baru ke fungsi refetch. Jika tidak, Query akan secara otomatis menggunakan variabel yang sama dengan yang digunakan dalam eksekusi sebelumnya

## Mutation
Cara menggunakan mutation dengan apollo client :
1.	Import useMutation hooks dari apollo client dan definisikan.

Penggunaan mutation insert dengan apollo client :
1.	Aktifkan useMutation dan gunakan array destruction define mutation handler (insert).
2.	Panggil fungsi insert dengan sebuah variabel.

Penggunaan mutation update dengan apollo client :
1.	Definisikan update Query
2.	Buatlah mutation handler untuk mengupdate
3.	Panggil fungsi update Query.

Penggunaan mutation delete dengan apollo client :
1.	Definisikan delete Query.
2.	Buatlah mutation handler untuk delete
3.	Panggil fungsi delete Query.
