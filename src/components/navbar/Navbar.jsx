import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('users');
    let user = null;

    // Check if storedUser is not null before parsing
    if (storedUser) {
        try {
            user = JSON.parse(storedUser);
        } catch (error) {
            console.error("Error parsing stored user:", error);
            // Handle error (e.g., clear localStorage)
            localStorage.removeItem('users');
        }
    }

    // Navigate
    const navigate = useNavigate();

    // Logout function
    const logout = () => {
        localStorage.removeItem('users');
        navigate("/login");
    }

    const cartItems = useSelector((state) => state.cart || []);

    // NavList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5  ">
            {/* Home */}
            <li className="border py-1 px-3 rounded-lg border-dashed bg-blue-600 border-blue-500 hover:border-light-blue-300 hover:bg-blue-200 hover:text-light-blue-700">
                <Link to="/">Home</Link>
            </li>

            {/* All Product */}
            <li className="border py-1 px-3 rounded-lg border-dashed bg-blue-600 border-blue-500 hover:border-light-blue-300 hover:bg-blue-200 hover:text-light-blue-700">
                <Link to="/allproduct">All Product</Link>
            </li>

            {/* Signup */}
            {!user && (
                <li className="border py-1 px-3 rounded-lg border-dashed bg-blue-600 border-blue-500 hover:border-light-blue-300 hover:bg-blue-200 hover:text-light-blue-700">
                    <Link to="/signup">Sign Up</Link>
                </li>
            )}

            {/* Login */}
            {!user && (
                <li className="border py-1 px-3 rounded-lg border-dashed bg-blue-600 border-blue-500 hover:border-light-blue-300 hover:bg-blue-200 hover:text-light-blue-700">
                    <Link to="/login">Login</Link>
                </li>
            )}

            {/* User */}
            {user?.role === "user" && (
                <li className="border py-1 px-3 rounded-lg border-dashed bg-blue-600 border-blue-500 hover:border-light-blue-300 hover:bg-blue-200 hover:text-light-blue-700">
                    <Link to="/user-dashboard">User</Link>
                </li>
            )}

            {/* Admin */}
            {user?.role === "admin" && (
                <li className="border py-1 px-3 rounded-lg border-dashed bg-blue-600 border-blue-500 hover:border-light-blue-300 hover:bg-blue-200 hover:text-light-blue-700">
                    <Link to="/admin-dashboard">Admin</Link>
                </li>
            )}

            {/* Logout */}
            {user && (
                <li className="cursor-pointer border py-1 px-3 rounded-lg border-dashed bg-blue-200 border-blue-500 hover:border-light-blue-300 hover:bg-blue-200 hover:text-light-blue-700" onClick={logout} >
                    Logout
                </li>
            )}

            {/* Cart */}
            <li className="border py-1 px-3 rounded-lg border-dashed bg-blue-600 border-blue-500 hover:border-light-blue-300 hover:bg-blue-200 hover:text-light-blue-700">
                <Link to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        
            <nav className="bg-blue-400 sticky top-0 z-50">
                {/* Main */}
                <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
               
                    {/* Left */}
                    <div className="left py-3 lg:py-0">
                        <Link to="/">
                            <h2 className="font-bold text-white text-2xl text-center">ShopFusion</h2>
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="right flex justify-center mb-4 lg:mb-0 ">
                        {navList}
                    </div>


                    {/* Search Bar */}
                    <SearchBar />
                </div>
            </nav>
        
    );
}

export default Navbar;
