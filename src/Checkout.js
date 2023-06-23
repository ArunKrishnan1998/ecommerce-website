import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct.js'
import { useStateValue } from './StateProvider';

function Checkout({}) {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad'
                src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg"
                alt=""/>

            <div>
                <h2 className='checkout_title'>
                    Your Shopping basket
                </h2>

                {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>

        <div className='checkout_right'>
                <h2>
                    <Subtotal />
                </h2>
        </div>
    </div>
  )
}

export default Checkout