
import {createContext, useState, useEffect} from "react";
const Context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data))
  }, [])

  function addImgToCart(newItem) {
    setCartItems(prevCartItems => [...prevCartItems, newItem])
  }

  function removeImgFromCart(id) {
    setCartItems(prevCartItems => {
      return (
        prevCartItems.filter(item => item.id !== id)
      )
    })
  }

  function emptyCart() {
    setCartItems([])
  }

  function toggleFavorite(id) {
    const newArrOfPhotos = allPhotos.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        }
      }
      return photo
    })

    setAllPhotos(newArrOfPhotos)
  }

  return (
    <Context.Provider 
      value={{
        allPhotos, 
        toggleFavorite, 
        addImgToCart, 
        cartItems,
        removeImgFromCart,
        emptyCart
      }}
    > 
      {props.children}
    </Context.Provider>
  )
}
export {ContextProvider, Context}