import React from "react";
import "./Product.css";
import Img1 from "./images/Bathu.jpg";
function product() {
  return (
    <div className="product">
      <div className="product__adFirstRow">
        <div className="product__adLineOne">
          <div className="product__adlineOneTitle">
            <h1 className="product__adTitle">Footwear</h1>
          </div>

          <div className="productImgContainer">
            <img src={Img1} alt="" className="product__img" />
          </div>

          <div className="adLineOneProductContainer">
            <div className="product__adLineOneProductTitle">
              <h1 className="product__adLineOneH1">All your beauty products</h1>
            </div>
            <div className="product__adLineOneProductPrice">
              <h1 className="product__adLineOneH1Price">From R100</h1>
            </div>
          </div>
        </div>

        <div className="product__adLineOne">
          <div className="product__adlineOneTitle">
            <h1 className="product__adTitle">Footwear</h1>
          </div>

          <div className="productImgContainer">
            <img src={Img1} alt="" className="product__img" />
          </div>

          <div className="adLineOneProductContainer">
            <div className="product__adLineOneProductTitle">
              <h1 className="product__adLineOneH1">All your beauty products</h1>
            </div>
            <div className="product__adLineOneProductPrice">
              <h1 className="product__adLineOneH1Price">From R100</h1>
            </div>
          </div>
        </div>

        <div className="product__adLineOne">
          <div className="product__adlineOneTitle">
            <h1 className="product__adTitle">Footwear</h1>
          </div>

          <div className="productImgContainer">
            <img src={Img1} alt="" className="product__img" />
          </div>

          <div className="adLineOneProductContainer">
            <div className="product__adLineOneProductTitle">
              <h1 className="product__adLineOneH1">All your beauty products</h1>
            </div>
            <div className="product__adLineOneProductPrice">
              <h1 className="product__adLineOneH1Price">From R100</h1>
            </div>
          </div>
        </div>
        <div className="product__adLineOne">
          <div className="product__adlineOneTitle">
            <h1 className="product__adTitle">Footwear</h1>
          </div>
          <div className="productImgContainer">
            <img src={Img1} alt="" className="product__img" />
          </div>

          <div className="adLineOneProductContainer">
            <div className="product__adLineOneProductTitle">
              <h1 className="product__adLineOneH1">All your beauty products</h1>
            </div>
            <div className="product__adLineOneProductPrice">
              <h1 className="product__adLineOneH1Price">From R100</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="product__adSecondRow">
        <div className="product__adLineTwo">
          <span className="product__adLineTwoTitle">Daily Deals</span>
        </div>
      </div>

      <div className="product__adThirdRow">
        <div className="product__adDiv1">
          <div className="product__adLineOne">
            <div className="product__adlineOneTitle">
              <h1 className="product__adTitle">Footwear</h1>
            </div>

            <div className="productImgContainer">
              <img src={Img1} alt="" className="product__img" />
            </div>

            <div className="adLineOneProductContainer">
              <div className="product__adLineOneProductTitle">
                <h1 className="product__adLineOneH1">
                  All your beauty products
                </h1>
              </div>
              <div className="product__adLineOneProductPrice">
                <h1 className="product__adLineOneH1Price">From R100</h1>
              </div>
            </div>
          </div>

          <div className="product__adLineOne">
            <div className="product__adlineOneTitle">
              <h1 className="product__adTitle">Footwear</h1>
            </div>

            <div className="productImgContainer">
              <img src={Img1} alt="" className="product__img" />
            </div>

            <div className="adLineOneProductContainer">
              <div className="product__adLineOneProductTitle">
                <h1 className="product__adLineOneH1">
                  All your beauty products
                </h1>
              </div>
              <div className="product__adLineOneProductPrice">
                <h1 className="product__adLineOneH1Price">From R100</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="product__adDiv2">
          <div className="product__adRowTreeColumnTwo">
            <div className="product__adRowThreeProduct">Product</div>
            <div className="product__adRowThreeProduct">Product</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default product;
