
import {useState, useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'

function Image({className, img}) {
  const [hovered, setHovered] = useState(false)
  const {
    toggleFavorite, 
    addImgToCart, 
    cartItems,
    removeImgFromCart
  } = useContext(Context)


  function heartIcon() {
    if(img.isFavorite) {
        return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if(hovered) {
        return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === img.id)
    if(alreadyInCart) {
        return <i className="ri-shopping-cart-fill cart" onClick={() => removeImgFromCart(img.id)}></i>
    } else if(hovered) {
        return <i className="ri-add-circle-line cart" onClick={() => addImgToCart(img)}></i>
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className='image-grid' alt="Photo" />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

// To check props type
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({                // you wanna check your object? then use "shap"
    id: PropTypes.string.isRequired,    // "isRequired" <-- if this is required
    url: PropTypes.string.isRequired,   // "isRequired" <-- if this is required
    isFavorite: PropTypes.bool
  })
}

export default Image