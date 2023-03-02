# (11) Resume Materi Data Structures

## ~ Data Structures

Data Structure merupakan suatu cara bagaimana menyimpan dan mengorganisir sebuah data yang ada pada sebuah memori komputer. Data memiliki cakupan yang sangat luas dan merujuk pada semua informasi yang tersimpan dalam memori komputer. Data structure sendiri memiliki beberapa operasi yaitu read, search, insert, delete. Dan data pada data structure dapat dikelola dengan berbagai cara, contohnya seperti kode dibawah ini:
javascript
// Data tersimpan pada dua varibel, variabel x dan y
let x = 1;
let y = 'hai';
console.log(x + y);

// Data tersimpan pada satu varibel array
const array = ['hallo', 'selamat'];
console.log(array[0] + array[1]);

## ~ Array

Array merupakan data structure paling dasar dan serbaguna. Array memiliki indeks untuk mengidentifikasi dimana posisi sebuah elemen itu berada. Indeks dari array dimulai dari 0, bukan dari angka 1. Contohnya seperti kode dibawah ini :
javascript
// Data tersimpan pada varibel array
const array = ['lorem', 'ipsum', 'dolor'];
// untuk mengaskes array dapat menggunkan index dari elemen
console.log(array[0]); // akan mengasilkan output : lorem
console.log(array[1]);// akan mengasilkan output : ipsum
console.log(array[2]);// akan mengasilkan output : dolor

## ~ Object

Object merupakan data structure lainnya yang paling umum digunakan pada JavaScript. Object digunakan untuk merepresentasikan sebuah objek atau entitas tertentu yang memiliki properti dan nilai. Object dapat dimanipulasi dengan berbagai metode seperti Object.keys(), Object.values(), dan Object.entries().
// Contoh penerapan
let person = {
  name: 'Saya',
  age: 25,
  address: {
    city: 'Surabaya',
    state: 'ID'
  }
};
console.log(person.name); // akan mengasilkan output : Saya
console.log(person.address.city); // akan mengasilkan output : Surabaya
