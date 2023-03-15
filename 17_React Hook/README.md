# (17) Resume Materi React Hook

## React Hook Introduction
Hooks merupakan fitur baru di React 16.8. Dengan menggunakan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

Hooks dasar:
- useState
- useEffect
- useContext

Hooks tambahan:
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

Aturan pada hooks:
- Hanya panggil hooks di tingkat atas
- Jangan memanggil hooks dari dalam loops, conditions, atau nested functions
- Hanya panggil hooks dari fungsi-fungsi react
- Jangan memanggil hooks dari fungsi-fungsi javascript biasa

## Use State & Use Effect
useState dapat digunakan untuk mendeklarasikan dan memanipulasi state pada komponen react. Dengan menggunakan useState code yang kita tuliskan akan menjadi lebih singkat.

useEffect memungkinkan kita melakukan efek samping (side effects) di dalam function component. componentDidMount, componentDidUpdate, dan componentWillUnmount = useEffect. Ada 2 jenis useEffect: butuh pembersihan dan tidak butuh pembersihan.

## Create Custom Hook
Membuat hook kita sendiri yang memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi. Contohnya seperti membuat custom hook yang melakukan resize component pada halaman yang kita buat, dimana fungsi ini dapat kita ekstrak sehingga tidak perlu menuliskan berulang kali untuk setiap komponen di halaman yang ada.