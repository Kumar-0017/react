import React from 'react'

export default function Navbar({setCartOpen,CartDetails}) {


  
  return (
    <div className="navbar">
    <div className="navbar-banner">
      Joe's Kitchen
    </div>

    <div className="nav-cart" onClick={()=>setCartOpen(true)} >
      <i className="fa fa-shopping-cart" > </i>
      <div className="cart-items">{CartDetails.length}</div>
    </div>
    
  </div>
  )
}

// {CartDetails.reduce((total,cart)=>total+Number(cart,0),0)}