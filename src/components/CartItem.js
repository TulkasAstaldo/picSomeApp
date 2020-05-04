import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

export default function CartItem({ item }) {
  const { removeItem } = useContext(Context);
  const [hovered, ref] = useHover();

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        ref={ref}
        onClick={() => removeItem(item.id)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
