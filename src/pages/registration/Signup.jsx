/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, firestore, googleProvider } from "../../firebase/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    /**========================================================================
     *                          Google Signup Function 
    *========================================================================**/

    const googleSignupFunction = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // create user object
            const newUser = {
                name: user.displayName,
                email: user.email,
                uid: user.uid,
                role: "user",
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Refrence
            const userRefrence = collection(firestore, "user");

            // Add User Detail
            await addDoc(userRefrence, newUser);

            // Store user in localStorage
            localStorage.setItem('users', JSON.stringify(newUser));

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/user-dashboard'); // Redirect to user dashboard or other appropriate page
        } catch (error) {
            console.log(error);
            toast.error("Google Signup Failed");
            setLoading(false);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            {/* Signup Form  */}
            <div className="signup_Form bg-cyan-50 px-8 py-6 border border-cyan-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-cyan-500 '>
                        Sign Up
                    </h2>
                </div>

                {/* Google Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={googleSignupFunction}
                        className='bg-cyan-300 hover:bg-cyan-600 w-full text-white text-center py-2 font-bold rounded-md hover:shadow-custom-black '
                    >
                        Sign Up with Google
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account? <Link className=' text-cyan-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;
