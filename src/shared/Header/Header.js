import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import logo from '../../assect/PngItem_63672.png'
const Header = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success('successfully log out')
            })
            .catch(err => console.log(err))
    }
    const menuItems = <React.Fragment>
        <li className='text-warning text-xl font-bold' > <Link to='/'>Home's</Link>  </li>
        <li className='text-warning text-xl font-bold'> <Link to='/hadis'>Hadis</Link>  </li>
        {
            user?.uid ?
                <>
                    <li className='text-warning text-xl font-bold'> <Link to='/DashBoard' >DashBoard</Link>  </li>
                    <li className='text-warning text-xl font-bold'> <button onClick={handleLogout} >LogOut</button>  </li>
                </>
                :
                <>
                    <li className='text-warning text-xl font-bold'> <Link to='/login' >Login</Link>  </li>
                    {/* <li className='text-warning text-xl font-bold'> <Link to='/signup' >SignUp</Link>  </li> */}
                </>
        }


    </React.Fragment>

    return (
        <div>
            <div className="navbar bg-green-600 text-white">
                <div className="navbar-start">
                    <div className="dropdown bg-green-600">
                        <label tabIndex={0} className="btn text-warning outline lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadowbg-green-600 bg-green-600 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <span className='text-warning'>Daily Amol</span>
                        <div className='bg-black p-1 rounded-full ml-1'>
                            <img src={logo} className="h-8 font-bold w-8 " alt="app logo" />
                        </div>
                    </Link>
                </div>
                <div className="navbar-center bg-green-600 hidden lg:flex">
                    <ul className="menu menu-horizontal  p-0 bg-green-600 ">
                        {menuItems}
                    </ul>
                </div>
                <div className='float-right pl-40'>
                    <label htmlFor="my-drawer" className="btn btn-warning btn-outline font-semibold text-warning drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>

            </div>
        </div>
    );
};

export default Header;