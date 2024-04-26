import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate(location?.state ? location.state : "/");
        } catch (error) {
            console.error("Google sign in error:", error);
        }
    };
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
             <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleSignin}  className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Login with Google</button>
                </div>
                <p className="text-center mt-4">Do not have an account Please <Link className="text-purple-500 font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;