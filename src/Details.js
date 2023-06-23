import React from 'react'
import './Details.css';
import { useStateValue } from './StateProvider';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Details({item}) {

    const [ {selectedItem}, dispatch] = useStateValue();

    const closeDetails = () => {
        dispatch({
            type: 'DESELECT_SELECTED_ITEM',
            id: item.id
        })
    }
  return (
    <div className='details'>
        <div className='details_container'>
            <div className='details_info'>
                <h1 className='details_title'>
                    {item.title}
                </h1>
                <div className='details_category'>
                    ({item.category})
                </div>
                <div className='details_rating'>
                    {Array(Math.round(item.rating_details.rate)).fill().map((_, i) => (
                        <p>⭐️</p>
                    ))}
                    ({item.rating_details.count})
                </div>
                <div className='details_description'>
                    {item.description}
                </div>

                <h1 className='details_price'>
                    ${item.price}
                </h1>
            </div>
            
            <img 
                src={item.image}
                alt=""
                className='details_image'
            />

            <strong className='details_close' onClick={closeDetails}>
                x
            </strong>
        </div>
    </div>
  )
}

export default Details