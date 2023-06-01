import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { 
    GoogleMap, 
    useJsApiLoader,
    Marker,
    Autocomplete
} from '@react-google-maps/api';

import './style.scss'
import { useEffect, useState, useRef } from 'react';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const OrderMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries: ["places"]
      })

    return (
        <div className='order-form-side'>
            <div className='order-map'>
                {
                    isLoaded ? <Map /> : null
                }
            </div>
            {
                isLoaded ? <OrderForm /> : null
            }  
        </div>
    );
};

const defaultPalce = {
    lat: 49.22817722674944, 
    lng: 28.42675520795919
}

const Map = () => {
    const [orderMarkers, setOrderMarkers] = useState()
    const {
        destination
    } = useSelector(state => state.orderMapSlice)
    useEffect(() => {
        setMarkers()
    }, [destination])

    const setMarkers = () => {
        const markers = destination.map(item => <Marker position={item} />)
        setOrderMarkers(markers)
    }
      
    return (
        <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={destination[0] ? destination[0] : defaultPalce}
        zoom={10}
        options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={setMarkers}
      >

        {
            destination.map(item => <Marker position={item} />)
        }
    
      </GoogleMap>
    )
}

const OrderForm = () => {
    const userAddress = useRef();
    const userEmail = useRef();
    const userPhone = useRef();
    const userName = useRef();
    const formRef = useRef()
    const dispatch = useDispatch()

    const {
        orderList,
        orderSum
    } = useSelector(state => state.orderListSlice);

    const submitOrder = (e) => {
        e.preventDefault()
        if (userAddress.current.value === '' || orderList.length === 0) return
        axios
            .post('http://localhost:5000/order', {
                orderSum,
                address: userAddress.current.value,
                shop: orderList[0].shop.map(shop => ({
                    id: shop.id,
                    name: shop.name,
                    location: shop.location[0]
                })),
                user: {
                    name: userName.current.value,
                    email: userEmail.current.value,
                    phone: userPhone.current.value,
                },
                list: orderList.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    thumbnail: item.thumbnail,
                    shop: item.shop.map(shop => ({
                        id: shop.id,
                        name: shop.name,
                        location: shop.location[0]
                    }))
                }))
                
            })
            .then(() => {
                formRef.current.reset();
                dispatch({type:"REMOVE_ORDER_ITEM", payload: orderList.filter(item => item.id === null)})
                dispatch({type: "SET_SHOP_LOCK", payload: 'none'})
            })
            .catch(e => console.log(e))

    }

    return (
        <form
            className='order-form'
            ref={formRef}
        >
            <div className="order-input-item">
                <span>Адреса</span>
                <div className="order-location">
                    <Autocomplete>
                        <input placeholder='Адреса' ref={userAddress} required />
                    </Autocomplete>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="navigation"><g data-name="Layer 2"><g data-name="navigation-2"><rect width="24" height="24" opacity="0"></rect><path d="M13.67 22h-.06a1 1 0 0 1-.92-.8l-1.54-7.57a1 1 0 0 0-.78-.78L2.8 11.31a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68z"></path></g></g></svg>
                </div>
            </div>
            <div className="order-input-item">
                <span>Email</span>
                <input placeholder='Email' ref={userEmail} required />
            </div>
            <div className="order-input-item">
                <span>Номер телефону</span>
                <input placeholder='Телефон' ref={userPhone} required />
            </div>
            <div className="order-input-item">
                <span>Ім'я</span>
                <input placeholder="Ім'я" ref={userName} required />
            </div>
            
            <div className='order-submit'>
                <span>До сплати: {orderSum} грн</span>
                <button type='submit'
                    onClick={(e) => submitOrder(e)}
                >Замовити</button>
            </div>
            
        </form>
    )
}

export default OrderMap;