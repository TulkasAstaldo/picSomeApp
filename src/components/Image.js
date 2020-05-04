import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const { toggleFavorite, addToCart, removeItem, cartItems } = useContext(
    Context
  );

  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  };

  const cartIcon = () => {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeItem(img.id)}
        ></i>
      );
    } else if (hovered)
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
  };

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    isInCart: PropTypes.bool,
  }),
};

export default Image;
