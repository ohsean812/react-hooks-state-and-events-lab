import React, { useState } from "react";

function Item({ name, category }) {
  
  const [addToCart, setAddToCart] = useState(true);

  // console.log(addToCart)

  function addToCartHandler() {
    setAddToCart((addToCart) => !addToCart)
  }
  
  const addedOrNot = addToCart ? "" : "in-cart"
  const buttonText = addToCart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={addedOrNot}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCartHandler}>{buttonText}</button>
    </li>
  );
}

export default Item;
