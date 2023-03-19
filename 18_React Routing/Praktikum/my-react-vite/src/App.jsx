import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProduct from './components/views/CreateProduct.view';
import LandingPage from './components/views/LandingPage.view';
import ProductDetail from './components/views/DetailProduct.view';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/detailproduct/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
