import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Allspots from "../pages/Allspots";
import AddSpots from "../pages/AddSpots";
import Details from "../pages/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch("http://localhost:5000/information")
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allSpots',
                element: <Allspots></Allspots>,
                loader: ()=> fetch("http://localhost:5000/information")
            },
            {
                path: '/addSpots',
                element: <AddSpots></AddSpots>
            },
            {
                path: '/details/:_id',
                element: <Details></Details>,
                loader: ()=> fetch("http://localhost:5000/information")

            }
        ]
    }
])

export default router;

