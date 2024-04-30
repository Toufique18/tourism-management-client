import { Link } from "react-router-dom";
import error from "../assets/images/404-page-not-found.jpg"

const ErrorPage = () => {
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <h1 className="text-center text-4xl text-red-500">OPSS!</h1>
            <img className="text-center h-60 w-80" src={error} alt="" />
            <Link to="/">Back to home page</Link>
        </div>
    );
};

export default ErrorPage;