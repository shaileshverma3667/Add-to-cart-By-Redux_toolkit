import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const AddCart=useSelector(state=>state.cartData)
  return (
    <div className='navbar'>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/product"}>Product</NavLink>
    <div className='cartIcon'><NavLink to={"/cart"}><ShoppingCartIcon/>item {AddCart.length}</NavLink></div>
    
    </div>
  )
}

export default Navbar