import React from 'react';
import Layout from '../../components/layout/layout';
import PopularPosts from '../../components/home/popularPost'
import SinglePostWide from '../../components/singlePostWide';


function Travel(props) {
    return (
      <Layout>
          <div className={"mainContentContainer"}>
        <div className={"listStyleLeft"}>
          <SinglePostWide title={'Places to visit in Nepal.'} images={'/images/posts/travel1.jpg'}/>
          <SinglePostWide title={'Holy heaven in Earth.'} images={'/images/posts/travel2.jpg'}/>
          <SinglePostWide title={'Tips to save money in airways.'} images={'/images/posts/travel3.jpg'}/>
          <SinglePostWide  title={'I went on a yacht trip.'} images={'/images/posts/travel4.jpg'}/>
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
        <style jsx>
          {`
            .mainContentContainer{
              max-width:1300px;
              margin: 0 auto;
            }
          
            
          `}
        </style>
      </div>


      </Layout>
    );
}

export default Travel;