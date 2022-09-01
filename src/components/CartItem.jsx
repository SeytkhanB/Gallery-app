
import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'

function CartItem({item}) {
  const {removeImgFromCart} = useContext(Context)
  const [hovered, setHovered] = useState(false)

  const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

  return (
    <div className='cart-item'>
      <i 
        className={iconClassName}
        onClick={() => removeImgFromCart(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></i>
      <img src={item.url} alt="Photo" width='130px' />
      <p>$5.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}

export default CartItem