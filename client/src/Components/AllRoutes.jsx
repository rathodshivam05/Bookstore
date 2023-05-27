import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import RequiredAuth from '../Redux/HOF/RequiredAuth'
import Home from './Home'
import Cart from './Cart'
import ProductPage from './ProductPage'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allbooks" element={<ProductPage />} />
                <Route path="/viewcart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default AllRoutes