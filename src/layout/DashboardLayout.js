import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import Header from '../shared/Header/Header';
import useSeller from '../Hook/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    console.log(isSeller);
    return (
        <div>
            <Header></Header>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side home-bg">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-green-700 text-base-content">
                        < li className='border font-bold btn-outline btn-warning rounded' > <Link to="/dashboard/addamol">Add Amol</Link></li>
                        < li className='border btn-outline btn-warning font-bold rounded mt-3' > <Link to="/dashboard/myamol">My Amols</Link></li>
                        < li className='border btn-outline btn-warning font-bold rounded mt-3' > <Link to="/dashboard/individuals">ALL Indvidual Amals</Link></li>

                        {
                            isSeller &&
                            <>
                                < li className='border btn-outline btn-warning font-bold rounded mt-3' > <Link to="/dashboard/adddawa">Add A Dawa</Link></li>
                                < li className='border btn-outline btn-warning font-bold rounded mt-3' > <Link to="/dashboard/mydawa">My Dawa</Link></li>
                                < li className='border btn-outline btn-warning font-bold rounded mt-3'> <Link to='/signup' >SignUp</Link>  </li>

                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;