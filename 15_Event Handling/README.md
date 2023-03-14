# (15) Resume Materi Event Handling

## State Learning
State merupakan data private dari sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain. State bersifat asynchronous dan dipakai dalam class. Setiap terjadi modifikasi state akan terjadi render ulang.

## Stateful dan Stateless Component
Stateful component merupakan component yang memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle.
Stateless component merupakan component yang tidak memiliki state hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas.
Komponen stateful dan stateless memiliki banyak nama berbeda. Mereka juga dikenal sebagai smart component & dump component.

## Handling Events
Handling event merupakan suatu metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen. Event merupakan suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.
Beberapa contoh list event terbagi menjadi:
1. Clipboard Events
2. Form Events
3. Mouse Events
4. Generic Events