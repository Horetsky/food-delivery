import { useEffect, useState } from 'react';
import useHttp from '../../utils/useHttps';
import { transformShopFilters } from '../../utils/_transformData';
import { useDispatch, useSelector } from 'react-redux';
import FilterItem from '../../components/filterItem/FilterItem';

import './style.scss';
const ProductFilters = () => {
    const [shops, setShops] = useState([]);

    const { getRequest } = useHttp()
    useEffect(() => {
        getShops()
    }, [])
    
    const getShops = async () => {
        getRequest('shops')
            .then(res => res.map(transformShopFilters))
            .then(setShops)
    }

    return (
        <div className='product-filters'>
            <Filters shops={shops}/>
        </div>
    );
};

const Filters = ({shops}) => {
    const dispatch = useDispatch();
    const {
        activeFilter
    } = useSelector(state => state.productFilters)
    const setActiveFilter = (type) => {
        dispatch({type: "SET_ACTIVE_FILTER", payload: type})
    }
    return (
        <ul className='shop-list-filter'>
            <li 
                className={activeFilter === 'all' ? 'filter-item active-filter' : 'filter-item'}
                onClick={() => setActiveFilter('all')}
            >Всі</li>
            {
                shops.map(item => (
                    <FilterItem 
                        key={item.id}
                        name={item.name}
                        activeFilter={activeFilter}
                        func={setActiveFilter}
                    />
                ))
            }
        </ul>
    )
}

export default ProductFilters;