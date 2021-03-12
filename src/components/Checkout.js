import React from 'react'
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from "../Container/StateProvider"
import "./Checkout.css"

export default function Checkout() {

    const [{basket, user}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="advert"
                />

                <div className="checkout_title">
                    <h2 className="checkout__title"> Shopping Cart</h2>
                     <h2>
                         {basket.map(item => (
                            <CheckoutProduct 
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                            />
                         ))}
                     </h2>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
