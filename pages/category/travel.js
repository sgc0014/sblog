import React from 'react';
import Layout from '../../components/layout/layout';
import PopularPosts from '../../components/home/popularPost'
import SinglePostWide from '../../components/singlePostWide';


function Travel(props) {
    return (
      <Layout>
          <div className={"mainContentContainer"}>
        <div className={"leftSide"}>
        <SinglePostWide/>
        </div>

        <div className={"rightSide"}>
          <PopularPosts />

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
        </div>
      </div>


      </Layout>
    );
}

export default Travel;