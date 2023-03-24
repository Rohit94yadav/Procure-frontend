import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'


// import EditTodo from './EditTodo'
import Home from './Home'
import Login from './Login'


import Register from './Register'



export const AllRoutes = () => {
  return (
    <div>

        <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Register/>} />
            <Route path='/addproducts' element={<AddProduct/>} />
            {/* <Route path='/updatetodo/:id' element={<EditTodo/>} /> */}
        </Routes>
    </div>
  )
}
