import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import Main from '../../Layout/Main';
import BlogDetails from "../../Pages/BlogPage/BlogDetails/BlogDetails";
import Home from "../../Pages/Home/Home/Home";
import FoodDetails from "../../Pages/Home/FoodDetails/FoodDetails";
import AllFood from "../../Pages/AllFoodPage/AllFood/AllFood";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://italy-food-server.vercel.app/blog')
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
                path: '/foods',
                element: <AllFood></AllFood>,
            },
            {
                path: '/foodDetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: async({params}) => fetch(`https://italy-food-server.vercel.app/foodDetails/${params.id}`)
            },
            {
                path: '/blogDetails/:id',
                element: <BlogDetails></BlogDetails>,
                loader: async ({params}) => fetch(`https://italy-food-server.vercel.app/blogDetails/${params.id}`)
            }
        ]
    }
])

export default router;