import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom"
import { auth } from './firebase';
function Header() {
    
    const [{basket, user}, dispatch] = useStateValue();
    const checkAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (

    <div className="header">

        <Link to="/">
            <img 
                className='header_logo'
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
            />
        </Link>

        <div className='header_search'>
            <input className='header_search_input' type='text'/>
            {/**logo */}
            <SearchIcon className='header_search_icon'/>
        </div>

        <div className='header_nav'>
            <Link to={!user && "/login"}>
                <div onClick={checkAuth} className='header_option'>
                    
                        <span className='header_option_line1'>Hello {user ? user.email: "guest"}</span>
                    
                        <span className='header_option_line2'>{user ? "Sign Out" : "Sign In"}</span>
                    
                </div>
            </Link>

            <Link to='/orders'>
            <div className='header_option'>
                <span className='header_option_line1'>Returns</span>
                <span className='header_option_line2'>& Orders</span>
            </div>
            </Link>

            <div className='header_option'>
                <span className='header_option_line1'>Your</span>
                <span className='header_option_line2'>Prime</span>
            </div>
        </div>
        <Link to="/checkout">
            <div className="header_option_backet">
                <ShoppingBasketIcon className='header_option_basket_icon'/>
                <span className='header_option_line2 header_option_basket_count'>{basket?.length}</span>
            </div>
        </Link>
    </div>
  )
}

export default Header