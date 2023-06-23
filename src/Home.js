import React, { useEffect, useState } from 'react'
import './Home.css';
import Product from './Product'
import Notification from './Notification';
import { useStateValue } from './StateProvider';
import Details from './Details.js';

function Home() {

    const [products, setProducts] = useState([]);
    const [{notifications, selectedItem}, dispatch] = useStateValue();

    const notificationCloseCallback = (item) => {
        dispatch({
            type: 'REMOVE_FROM_NOTIFICATION',
            id: item.id
        })
    }
    
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(jsonData=> {
            const products_data = [];
            console.log("jsonData..... ", jsonData)
            jsonData.map((item) => {
                products_data.push({
                    id: item.id,
                    title: item.title,
                    rating: Math.round(item.rating.rate),
                    price: Math.round(item.price),
                    image: item.image,
                    category: item.category,
                    description: item.description,
                    rating_details: item.rating
                })
            })
            setProducts(products_data);
        })
        
    }, [])
    
  return (
    <div class='home'>
            <div className='home_notification_container'>
                    {notifications.map((item) => (
                        <Notification item={item} closeCallback={notificationCloseCallback}/>
                    ))}
            </div>
            {selectedItem && (<div className='home_details_container'>
                <Details item={selectedItem}/>
            </div>)}

        <div className='home_container'>
            <img 
                className='home_image'
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Event/SL/Vernac/MFD/June/Hindi/Saree_Rec_3000._CB603079792_.jpg" alt=""
            />

            <div className='home_row'>
                {products.map((item) => (
                        <Product item={item}/>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Home