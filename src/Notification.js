import React, { useEffect } from 'react'
import './Notification.css'
function Notification({item, closeCallback}) {

    useEffect(() => {

        const timer = setTimeout(() => {
            clearTimeout(timer);
            closeCallback(item);
        }, 5000);

     }, []);

  return (
    <div className='notification'>
        <div className='notification_container'>
            <img 
                className='notification_image'
                src={item.image}
                alt=""
            />
            <div className='notification_item_info'>
                <small className='notification_item_name'>
                    {item.title}
                </small>
                <strong className='notification_type'>Added to Basket</strong>
            </div>
        </div>
        <div className='notification_close' onClick={() => closeCallback(item)}>x</div>
    </div>
  )
}

export default Notification