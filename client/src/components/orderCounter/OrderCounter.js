import './style.scss'

const OrderCounter = ({ count, func }) => {
    return (
        <div className='order-counter'>
            <span>{count}</span>
            <div className='counter-control'>
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={() => func(1)}
                >
                    <path d="M1 8L7.5 1L14 8" stroke="black" stroke-linecap="round"/>
                </svg>
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={count < 2 ? 'disable-counter' : null}
                    onClick={() => func(-1)}
                >
                    <path d="M1 1L7.5 8L14 1" stroke="black" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
    );
};

export default OrderCounter;