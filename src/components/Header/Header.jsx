import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "daisyui/dist/full.css";
import "tailwindcss/tailwind.css";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const userName = user ? user.displayName : '';
    const userImage = user ? user.photoURL : '';
    const links = <>

        <li><NavLink className={({ isActive }) => isActive ? "btn text-green-600 border-2 border-green-500" : "text-neutral-900 text-opacity-80 text-lg font-normal font-['Work Sans']"} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "btn text-green-600 border-2 border-green-500" : "text-neutral-900 text-opacity-80 text-lg font-normal font-['Work Sans']"} to="/allSpots">All Tourists Spot</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "btn text-green-600 border-2 border-green-500" : "text-neutral-900 text-opacity-80 text-lg font-normal font-['Work Sans']"} to="/addSpots">Add Tourists Spot</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "btn text-green-600 border-2 border-green-500" : "text-neutral-900 text-opacity-80 text-lg font-normal font-['Work Sans']"} to="/myList">My List </NavLink></li>


    </>

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto lg:px-20 px-5 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">TourBuddy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div data-tooltip-id="my-tooltip"
                        data-tooltip-content={userName}
                        data-tooltip-place="top" >
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={userImage} />
                                <Tooltip id="my-tooltip" />
                            </div>
                        </div>

                    </div>
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
        
    );
};

export default Header;