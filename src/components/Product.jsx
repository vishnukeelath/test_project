import React, { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import { useParams } from 'react-router-dom';


const Product = ({ productsData }) => {

  const { productId } = useParams();
  const smallProductTitle = productId.toLowerCase();

  const ProductDetail = productsData.filter((value) => {
    return value.title.toLowerCase().match(new RegExp(smallProductTitle, 'g'))
    })

console.log(ProductDetail);  
const rating = ProductDetail[0].price;
console.log(rating);

  return (
    <div className="productdetail-main">
      <div >
        <img src={ProductDetail[0].image} alt="product" className="product-image" />
      </div>
        <div className="product-detail">
          <h2 className="product-title">{ProductDetail[0].title}</h2>
              <div className="product-rating">
                <AiFillStar fontSize={19} color= {"#f04a29"} />
                <div className="product-rate">{ProductDetail[0].rating.rate} ({ProductDetail[0].rating.count}) </div>
              </div>
          <p className="product-description">{ProductDetail[0].description}</p>
          <div className="product-price">
          <h3 className="dollar-sign">$</h3>
          <h3 className="product-pricenum">{ProductDetail[0].price}</h3>
          </div>

        </div>
    </div>
  )
}

export default Product