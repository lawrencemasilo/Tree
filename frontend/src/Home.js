import React from "react";
import "./Home.css";
import Tshepo from "./images/TSHEPO-JEANS-LOGO.jpg";
import bathuLogo from "./images/Bathu_logo.png";

function Home() {
  return (
    <div className="home">
      <div className="home__noContainer">
        <div className="home__featuredStores">
          <div className="home__featuredStoresTitleContainer">
            <h1 className="home__featuredStoresTitle">Featured Stores</h1>
          </div>

          <div className="home__featuredStoresLineOne">
            <div className="home__featuredStoresLineOne1">
              <img src={Tshepo} alt="" className="home__featuredStoresImg" />
              <span className="home__featuredStoresName">Tshepo</span>
            </div>

            <div className="home__featuredStoresLineOne2">
              <img
                src={bathuLogo}
                alt=""
                className="home__featuredStoresImg2"
              />
              <span className="home__featuredStoresName">Tshepo</span>
            </div>

            <div className="home__featuredStoresLineOne3">
              <img src={Tshepo} alt="" className="home__featuredStoresImg" />
              <span className="home__featuredStoresName">Tshepo</span>
            </div>

            <div className="home__featuredStoresLineOne4">
              <img src={Tshepo} alt="" className="home__featuredStoresImg" />
              <span className="home__featuredStoresName">Tshepo</span>
            </div>

            <div className="home__featuredStoresLineOne5">
              <img src={Tshepo} alt="" className="home__featuredStoresImg" />
              <span className="home__featuredStoresName">Tshepo</span>
            </div>

            <div className="home__featuredStoresLineOne6">
              <img src={Tshepo} alt="" className="home__featuredStoresImg" />
              <span className="home__featuredStoresName">Tshepo</span>
            </div>

            <div className="home__featuredStoresLineOne7">
              <img src={Tshepo} alt="" className="home__featuredStoresImg" />
              <span className="home__featuredStoresName">Tshepo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
