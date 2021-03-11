import React, { useState, useEffect } from 'react'
import { useStateValue} from "../Container/StateProvider";
import CheckoutProduct from "../components/CheckoutProduct"
import { Link, useHistory} from "react-router-dom"
import axios from "../Container/axios"
import "./Payment.css"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { getBasketTotal } from '../Container/reducer';
import CurrencyFormat from "react-currency-format";

export default function Payment() {

    const [{ basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    
    //Creating state from the cardElemnt
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)

    //Stripe Functionality or Stripe hooks
    const stripe = useStripe();
    const elements = useElements();

    useEffect(()=>{
        //Generates stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method:"post",
                //Stripe expects the total in a currency unit
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        //prevents user from hitting button a second time during payment processing
        setProcessing(true);
        // Confirm Card payment
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //PaymentIntent == Payment confirmation

            setSucceeded(true);
            setError(null)
            setProcessing(false)
            //redirects user to orders page on successful payment
            history.replaceState("/orders")
        })
    }

    const handleChange = (event) => {
        //Listen for changes in the CardElemnt
        //display any errors as the customer types their card details

        setDisabled(event.empty);
        setError(event.error?event.error.message : "")

    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>address</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                       <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/*Alert for errror during payment*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
