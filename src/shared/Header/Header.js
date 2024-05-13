import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

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
        <li className=' text-xl ' > <Link to='/'>Home</Link>  </li>
        <li className=' text-xl '> <Link to='/hadis'>Hadis</Link>  </li>
        <li className=' text-xl '> <Link to='/books'>Books Corner</Link>  </li>
        {/* <li className='text-warning text-xl font-bold'> <Link to='/login' >Login</Link>  </li> */}

        {
            user?.uid ?
                <>
                    <li className=' text-xl '> <Link to='/DashBoard' >DashBoard</Link>  </li>
                    <li className='  text-xl '> <button onClick={handleLogout} >LogOut</button>  </li>
                </>
                :
                <>
                    <li className=' text-xl '> <Link to='/login' >Login</Link>  </li>
                    {/* <li className='text-warning text-xl font-bold'> <Link to='/signup' >SignUp</Link>  </li> */}
                </>
        }


    </React.Fragment>

    return (
        <div className=''>
            <div className="navbar  text-amber-500 ">
                <div className="navbar-start">

                    {/* dropdown */}
                    <div className="dropdown text-amber-500 bg-blue-800">
                        <label tabIndex={0} className="btn text-warning outline lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-blue-800 dropdown-content mt-3 p-2 shadowbg-green-600 text-white rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <span className='text-amber-800 font-semibold font-serif'>Daily Amol</span>
                        
                    </Link>
                </div>

                {/* widescreeen */}
                <div className="navbar-center   hidden lg:flex">
                    <ul className="menu menu-horizontal text-black p-0  ">
                        {menuItems}
                    </ul>
                </div>
                <div className='float-right pl-40'>
        
    {user?.uid?
    <>
         <label htmlFor="my-drawer" className="btn btn-warning btn-outline font-semibold text-warning drawer-button">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </label>
     </>
     :
     <>
         <label htmlFor="my-drawer" className="">
         {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
     </label>
     </>
    }

                </div>

            </div>
        </div>
    );
};

export default Header;