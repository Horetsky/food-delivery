import { Header, SearchHistory } from "../../modules";

const HistoryPage = () => {
    return (
        <div>
            <Header />
            <div className='app-main-container'>
                <SearchHistory />
            </div>
        </div>
    );
};

export default HistoryPage;