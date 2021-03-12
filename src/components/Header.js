import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from "../Container/StateProvider"
import { auth } from "../firebase"

export default function Header() {

    const [{basket, user}] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            </Link>
           

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={ handleAuthentication } className="header__option">
                    <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                    <span className="header__optionLineTwo">{user? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                
                <Link to="./checkout">
                    <div className="header__optionBasket">
                        <AddShoppingCartIcon />
                        {/*optional chainning,handles error*/}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
