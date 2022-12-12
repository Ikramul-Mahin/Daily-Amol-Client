import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        < li className='border rounded' > <Link to="/dashboard/addamol">Add Amol</Link></li>
                        < li className='border rounded' > <Link to="/dashboard/myamol">My Amols</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;