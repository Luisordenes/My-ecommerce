import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProductList from './screens/ProductList/ProductList.jsx'
import ProductDetail from './screens/ProductDetail/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/product-list" element={<ProductList/>} />
        <Route path="/product-detail" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
