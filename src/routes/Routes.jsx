import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Allspots from "../pages/Allspots";
import AddSpots from "../pages/AddSpots";
import Details from "../pages/Details";
import MyList from "../pages/MyList";
import Update from "../pages/Update";
import PrivateRoute from "../pages/PrivateRoute";

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
                element: <PrivateRoute><Allspots></Allspots></PrivateRoute>,
                loader: ()=> fetch("http://localhost:5000/information")
            },
            {
                path: '/addSpots',
                element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>
            },
            {
                path: '/details/:_id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ()=> fetch("http://localhost:5000/information")

            },
            {
                path: '/myList',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ()=> fetch("http://localhost:5000/information")
                //loader: ({params})=> fetch(`http://localhost:5000/information/${params._id}`)
            }
        ]
    }
])

export default router;

