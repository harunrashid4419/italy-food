import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import Main from '../../Layout/Main';
import FastFood from "../../Pages/FastFood/FastFood";
import Categories from "../../Pages/Home/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://italy-food-server.vercel.app/categories')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/categories',
                element: <Categories></Categories>,
            },
            {
                path: '/fastfood',
                element: <FastFood></FastFood>,
            }
        ]
    }
])

export default router;