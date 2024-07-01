import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import AnimatedComponent from "../animatedComponent/AnimatedComponent";

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { getAllProduct } = context;
    const cartItems = useSelector((state) => state.cart || []);
    const dispatch = useDispatch();

    const addCart = (item) => {
        const newItem = {
            ...item,
            time: new Date().getTime() // Convert to timestamp
        };

        dispatch(addToCart(newItem));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        const newItem = {
            ...item,
            time: item.time.seconds ? new Date(item.time.seconds * 1000 + item.time.nanoseconds / 1000000).getTime() : item.time // Convert Firestore Timestamp to milliseconds
        };

        dispatch(deleteFromCart(newItem));
        toast.success("Deleted from cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-10">
            <AnimatedComponent>
            <div>
                <h1 className="text-center mb-5 text-2xl font-semibold hover:underline">Our Bestselling Products</h1>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {Array.isArray(getAllProduct) && getAllProduct.slice(0, 8).map((item) => {
                            const { id, title, price, productImageUrl } = item;
                            return (
                                <div key={id} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-80 h-96 w-full object-cover"
                                            src={productImageUrl}
                                            alt={title}
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                ShopFusion
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center">
                                                {cartItems.some((p) => p.id === item.id) ? (
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="bg-red-700 hover:bg-red-600 hover:shadow-custom-black w-full text-white py-[4px] rounded-lg font-bold">
                                                        Delete From Cart
                                                    </button>
                                                ) : (
                                                    <button 
                                                        onClick={() => addCart(item)}
                                                        className="bg-blue-500 hover:shadow-custom-black hover:shadow-black w-full text-white py-[4px] rounded-lg font-bold">
                                                        Add To Cart
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            </AnimatedComponent>
        </div>
    );
};

export default HomePageProductCard;
