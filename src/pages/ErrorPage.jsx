import { Link } from "react-router-dom";
import error from "../assets/images/404-page-not-found.jpg"

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-center text-4xl text-red-500">OPSS!</h1>
            <img src={error} alt="" />
            <Link to="/">Back to home page</Link>
        </div>
    );
};

export default ErrorPage;