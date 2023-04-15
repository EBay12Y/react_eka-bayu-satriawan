# (28) Resume Materi GraphQL Subscription

## Subscription
Subscription adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat event tertentu terjadi. Subscription biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server memelihara koneksi stabil ke klien subscriptionnya.

Ketika data dimodifikasi maka client akan mendapatkan update data secara langsung atau real-time. Dalam contoh berikut ini, jika kita melakukan subscription koleksi product, kemudian setiap kali product baru ditambahkan atau ketika data dihapus atau diubah maka kita akan mendapatkan update data secara real-time langsung ke klien kita. Subscription akan terjadi di sisi klien maupun sisi server.

Cara menggunakan Subscription dengan apollo client :
1. Install subscription-transport-ws
2. Import modul http dan websocket link
3. Buatlah httpLink untuk query dan mutation
4. Buatlah wsLink untuk subscription
5. Tambahkan split function untuk menggabungkan httpLink dan wsLink
6. Import useSubscription dari apollo client
7. Definisikan subscription
7. Panggil subscription untuk consume data
8. Gunakan subscribeToMore untuk execute subscription