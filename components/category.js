import React from 'react';

function Category(props) {
    return (
        <div className={"rightCategory"}>
        <div className={"rightTitleContainer"}>
          <h3 className={"rightTitle"}>Category</h3>
        </div>
        <ul className="categoryList">
          <li className="categoryItem">
            <a>Travel</a>
          </li>
          <li className="categoryItem">
            <a>Food</a>
          </li>
          <li className="categoryItem">
            <a>Lifestyle</a>
          </li>
          <li className="categoryItem">
            <a>Health</a>
          </li>
          <li className="categoryItem">
            <a>Fashion</a>
          </li>
        </ul>
      </div>
    );
}

export default Category;