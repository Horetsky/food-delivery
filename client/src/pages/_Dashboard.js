import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import {
    Header
} from './../modules'

const Dashboard = () => {

    return (
        <div className='app-main-container'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Dashboard;