import React from 'react'
import Subtotal from "./Subtotal"
import "./Checkout.css"

export default function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
                    alt="advert"
                />

                <div className="checkout_title">
                     <h1>Shopping Basket</h1>
                     {/*shopping basket item*/}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
