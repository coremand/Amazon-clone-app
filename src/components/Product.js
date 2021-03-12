import React from 'react'
import { useStateValue } from '../Container/StateProvider'
import "./Product.css"

export default function Product({id,title,image,price,rating}) {

    const[{ basket },dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    };
    
    return (
        <div className="product">
            <div className="product__info">
                <h3>{title}</h3>
                <p className="product__price">
                   <h4>
                      <small>$</small>
                      <strong>{price}</strong>
                   </h4>
                    
                </p>
                <div className="product__rating">
                     {Array(rating).fill().map((_, i) => (
                         <p>⭐</p>
                     ))}
                </div>
            </div>
            <img src= {image} alt="product" />
            <button onClick={ addToBasket }>Add to Basket</button>
        </div>
    )
}
