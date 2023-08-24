import React from 'react'
import { Container } from 'reactstrap'
import logo from "../../assets/images/res-logo.png"
import {NavLink,Link} from 'react-router-dom'
function Header() {
  const nav_links = [
    {
      display: 'Home',
      path:'/'
    },
       {
      display: 'All-Foods',
      path:'/foods'
    },
          {
      display: 'Cart',
      path:'/cart'
    },
             {
      display: 'Contact',
      path:'/contact'
    },
   
  ]
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="" />
            <h5>Tasty Treat</h5>
          </div>
            <div className="navigation">
          <div className="menu d-flex align-items-center gap-5">
            {nav_links.map((item, index) => (
              <NavLink to={item.path} key={index}>
                {item.display}
              </NavLink>
            ))}
          </div>
          {/* nav right icons */}
         
          </div>
           <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart_icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart_badge">2</span>

            </span>
            <span className="user">
              <Link to="/login">
              <i className="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile_menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
        {/*         menu */}
      
      </Container>
    </header>
  )
}

export default Header