import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";

const Pin = ({ pin }) => {

  const navigate = useNavigate();

  return (
    <div className="pin-main">
        <div className="pin-items" onClick={() => navigate(`/product-detail/${pin.title}`)}>
            <img className="pin-image" alt="pin" src={pin.image} />
            <div className="pin-title">{pin.title}</div>
            <div className="pin-tag">
              <div className="pin-price">
                <div className="pin-dollar">$</div>
                <div className="pin-pricenum">{pin.price}</div>
              </div>

              <div className="pin-rating">
                <AiFillStar fontSize={19} color= {"#f04a29"} />
                <div className="pin-rate">{pin.rating.rate}</div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Pin