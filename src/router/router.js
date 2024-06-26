import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddAmol from "../pages/Dashboards/AddAmol/AddAmol";
import AddDawa from "../pages/Dashboards/AddDawa/AddDawa";
import AllIndividualAmol from "../pages/Dashboards/AllIndividualAmol/AllIndividualAmol";
import MyAmol from "../pages/Dashboards/MyAmol/MyAmol";
import MyDawa from "../pages/Dashboards/MyDawa/MyDawa";
import Hadis from "../pages/Hadis/Hadis";
import Homes from "../pages/Home/Homes/Homes";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";
import error from '../assect/1588528_221067-P1O4VU-734.jpg'
import Books from "../pages/Books/Books";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homes></Homes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/hadis',
                element: <Hadis></Hadis>
            },
            {
                path:'/books',
                element:<Books></Books>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/addamol',
                element: <PrivateRoute><AddAmol></AddAmol></PrivateRoute>
            },
            {
                path: '/dashboard/myamol',
                element: <PrivateRoute><MyAmol></MyAmol></PrivateRoute>
            },
            {
                path: '/dashboard/individuals',
                element: <PrivateRoute><AllIndividualAmol></AllIndividualAmol></PrivateRoute>
            },
            {
                path: '/dashboard/adddawa',
                element: <SellerRoute><AddDawa></AddDawa></SellerRoute>
            },
            {
                path: '/dashboard/mydawa',
                element: <SellerRoute><MyDawa></MyDawa></SellerRoute>
            }
        ]
    },
    {
        path: '*',
        element: <div>
            <img className="h-screen w-full" src={error} alt="" />
        </div>
    }
])