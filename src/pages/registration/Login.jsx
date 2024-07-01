/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithPopup } from "firebase/auth";
import { auth, firestore, googleProvider } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    /**========================================================================
     *                          Google Login Function 
    *========================================================================**/

    const googleLoginFunction = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            try {
                const q = query(
                    collection(firestore, "user"),
                    where('uid', '==', user.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let userData;
                    QuerySnapshot.forEach((doc) => userData = doc.data());

                    if (userData) {
                        localStorage.setItem("users", JSON.stringify(userData));
                        toast.success("Login Successfully");
                        setLoading(false);
                        if (userData.role === "user") {
                            navigate('/user-dashboard');
                        } else {
                            navigate('/admin-dashboard');
                        }
                    } else {
                        throw new Error("User data not found");
                    }
                });
                return () => data();
            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoading(false);
                toast.error("Login Failed");
            }
        } catch (error) {
            console.error("Error with Google Login:", error);
            setLoading(false);
            toast.error("Google Login Failed");
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-cyan-50 px-8 py-6 border border-cyan-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-cyan-500'>
                        Login
                    </h2>
                </div>

                {/* Google Login Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={googleLoginFunction}
                        className='bg-cyan-300 hover:bg-cyan-600 w-full text-white text-center py-2 font-bold rounded-md hover:shadow-custom-black'
                    >
                        Login with Google
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Don't have an account? <Link className=' text-cyan-500 font-bold' to={'/signup'}>Sign Up!</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;
