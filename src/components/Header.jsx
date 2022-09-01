
import React, {useContext} from "react"
import {Context} from '../Context'
import {Link} from 'react-router-dom'

export default function Header(props) {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? 
        "ri-shopping-cart-fill" : "ri-shopping-cart-line"
        
    return (
        <header>
            <Link to='/'><h2>Pic Some</h2></Link>
            <Link to='/cart'>
              <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}