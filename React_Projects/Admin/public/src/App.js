import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from "./Page/Login"
import Header from './Component/Header'
import Footer from "./Component/Footer"
import Dashboard from "./Page/Dashboard"

import Add_Products from './Page/Add_Products'

import Manage_user from "./Page/Manage_user"
import Manage_categories from './Page/Manage_categories'

import Add_admin from './Page/Add_admin'
import Manage_admin from './Page/Manage_admin'
import Add_categories from './Page/Add_categories'
import Add_contect from './Page/Add_contect'
import Manage_contect from './Page/Manage_contect'
import Edit_User from './Page/Edit_User';

import Edit_Categories from './Page/Edit_Categories';
import Manage_Products from './Page/Manage_Products';
import Edit_product from './Page/Edit_product';
import Edit_contact from './Page/Edit_contact';
import Edit_admin from './Page/Edit_admin';

function App() {
  return (
    <BrowserRouter> 
    <ToastContainer></ToastContainer>
    <Routes>
        <Route path='/' element={<><Login/></>}></Route>
      
        <Route path='/dashboard' element={<><Header/><Dashboard/><Footer/></>}></Route>


        {/* Categories Mate */}
        <Route path='/add_categories' element={<><Header/><Add_categories/><Footer/></>}></Route>
        <Route path='/manage_categories' element={<><Header/><Manage_categories/><Footer/></>}></Route>
        <Route path='/edit_categories/:id' element={<><Header/><Edit_Categories></Edit_Categories><Footer/></>}></Route>

      
        
        
        {/* User Mate */}
        <Route path='/manage_user' element={<><Header/><Manage_user/><Footer/></>}></Route>
        <Route path='/edit_user/:id' element={<><Header/><Edit_User/><Footer/></>}></Route>
                

        {/* Admin Mate */}
        <Route path='/add_admin' element={<><Header/><Add_admin/><Footer/></>}></Route>
        <Route path='/manage_admin' element={<><Header/><Manage_admin/><Footer/></>}></Route>
        <Route path='/edit_admin/:id' element={<><Header/><Edit_admin/><Footer/></>}></Route>
        

        {/* Contact mate */}
        <Route path='/add_contect' element={<><Header/><Add_contect/><Footer/></>}></Route>  
        <Route path='/manage_contect' element={<><Header/><Manage_contect/><Footer/></>}></Route>
        <Route path='/edit_contact/:id' element={<><Header/><Edit_contact/><Footer/></>}></Route>


          {/* Product mate */}
        <Route path='/add_Products' element={<><Header/><Add_Products/><Footer/></>}></Route>
        <Route path='/manage_products' element={<><Header/><Manage_Products/><Footer/></>}></Route>
        <Route path='/edit_product/:id' element={<><Header/><Edit_product/><Footer/></>}></Route>
        
    </Routes>
    </BrowserRouter>
  )
}

export default App