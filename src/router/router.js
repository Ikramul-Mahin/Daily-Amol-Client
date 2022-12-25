import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddAmol from "../pages/Dashboards/AddAmol/AddAmol";
import AllIndividualAmol from "../pages/Dashboards/AllIndividualAmol/AllIndividualAmol";
import MyAmol from "../pages/Dashboards/MyAmol/MyAmol";
import Hadis from "../pages/Hadis/Hadis";
import Homes from "../pages/Home/Homes/Homes";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";

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
                path: 'hadis',
                element: <Hadis></Hadis>
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
                element: <AddAmol></AddAmol>
            },
            {
                path: '/dashboard/myamol',
                element: <MyAmol></MyAmol>
            },
            {
                path: '/dashboard/individuals',
                element: <AllIndividualAmol></AllIndividualAmol>
            }
        ]
    }
])