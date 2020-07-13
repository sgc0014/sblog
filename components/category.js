import React, { useState } from "react";

function Category(props) {
  const [categoryItems, setItems] = useState([
    "Travel",
    "Health",
    "Food",
    "Lifestyle",
  ]);
  return (
    <div className={"rightCategory"}>
      <div className={"rightTitleContainer"}>
        <h3 className={"rightTitle"}>Category</h3>
      </div>
      <ul className="categoryList">
        {categoryItems.map((categoryItem) => (
          <li className="categoryItem">
            <a>{categoryItem}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
