import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({item}) {
  
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch action
        dispatch({
            type: "ADD_TO_BASKET",
            item: item
        });
    };
    const setSelectedItem = () => {
        dispatch({
            type: "SET_SELECTED_ITEM",
            item: item
        })
    };
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{item.title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(item.rating).fill().map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>
            </div>
            <img
                src={item.image}
                alt=""
                onClick={setSelectedItem}
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product