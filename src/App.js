import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout"
import Login from "./components/Login"
import Payment from "./components/Payment"
import { loadStripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { auth } from "./firebase"
import { useEffect } from "react"
import { useStateValue } from "./Container/StateProvider";
import Orders from "./components/Orders.js"
import './App.css';


//Stripe Public Key
const promise = loadStripe ("pk_test_51ITXt7LFhr6SU5LjHS1oz0cIl9nzLL99b0JL6ptCghgqQMUDsagUNFsxgGhrXbwzpmQ2wLHtBbIZxHM4Lo9RuKLj003Xtt584m");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    
  },[])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe= {promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
   
  );
}

export default App;
