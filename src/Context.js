import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
      .catch(() => console.error("Error"));
  }, []);

  const toggleFavorite = (id) => {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  };

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const addFavoritesToCart = () => {
    allPhotos.map(
      (photo) =>
        photo.isFavorite && setCartItems((prevItems) => [...prevItems, photo])
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(cartItems);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeItem,
        emptyCart,
        addFavoritesToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
