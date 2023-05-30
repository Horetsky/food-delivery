// import { useState } from 'react';
import './style.scss';
const ProductCard = ({id, name, shop, thumbnail, price, func, isOrdered}) => {
    // console.log(isOrdered.filter(item => item.id === id).length > 0);
    return (
        <div className="product-card">
            <div className="card-img">
                <img src={thumbnail}/>
            </div>
            <div className='card-content'>
                <div className='content-text'>
                    <h1 className='product-name'>{name}</h1>
                    {
                        shop.map(item => (
                            <h4 
                                className='product-shop'
                                key={item.id}
                            >
                                Магазин: "{item.name}"
                            </h4>
                        ))
                    }
                </div>
                
                <div className='card-control'>
                    <h3 className='product-price'>{price} грн</h3>
                    <button
                        onClick={() => func({id, name, thumbnail, price}, isOrdered)}
                    >
                        {
                            isOrdered ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="done">
                                <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"></path>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="plus">
                                <path fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v14M1 8h14"></path>
                            </svg>
                        }
                        <span>Додати</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;