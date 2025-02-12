import React from "react";
import "./item.css";
function Item(props) {
  return (
    <div className="item">
      <h2>Author</h2>
          <p>{ props.name}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default Item;
