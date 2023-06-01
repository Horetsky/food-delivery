import {
    Header,
    FoodList,
    ProductFilters
} from '../../modules'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='app-main-container'>
                <ProductFilters />
                <FoodList />
            </div>
        </div>
    );
};

export default Home;