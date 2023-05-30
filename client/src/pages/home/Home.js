import {
    Header,
    FoodList,
    ProductFilters
} from '../../modules'

const Home = () => {
    return (
        <div>
            <Header />
            <ProductFilters />
            <FoodList />
        </div>
    );
};

export default Home;