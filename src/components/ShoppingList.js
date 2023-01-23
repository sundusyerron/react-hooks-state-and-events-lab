import React, { useState } from "react";
import Item from "./Item";
function ShoppingList({ items }) {
  const [selectedCategory, getCategory] = useState("All")
  // console.log(items)
  function handleSelect(event) {
    getCategory(event.target.value)
  }
  const itemsDisplayed = items.filter((item) => {
    if(selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsDisplayed.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;