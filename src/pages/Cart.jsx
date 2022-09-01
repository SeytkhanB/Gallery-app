
import React, {useContext, useState} from "react"
import {Context} from '../Context'
import CartItem from '../components/CartItem'

export default function Cart() {
    const [btnText, setBtnText] = useState('Place Order')
    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setBtnText('Ordering...')
        setTimeout(() => {
            console.log('Order placed!')
            setBtnText('Place Order')
            emptyCart()
        }, 2000)
    }

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{btnText}</button>
                </div> :
                <h1>You have no items in your cart!</h1>
            }
        </main>
    )
}