import './style.scss'

const FilterItem = ({name, func, activeFilter}) => {
    return (
        <li 
            className={activeFilter === name ? 'filter-item active-filter' : 'filter-item'}
            onClick={() => func(name)}
        >{name}</li>
    );
};

export default FilterItem;