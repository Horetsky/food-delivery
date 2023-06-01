import { Header, SearchHistory } from "../../modules";

const HistoryPage = () => {
    return (
        <div>
            <Header />
            <div className='app-main-container'>
                <div className='order-form'>
                    <SearchHistory />
                </div>
                {/* <OrderList /> */}
            </div>
        </div>
    );
};

export default HistoryPage;