/* eslint-disable react/prop-types */
import AnimatedComponent from "../animatedComponent/AnimatedComponent";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({children}) => {
    return (
        <div>
            <AnimatedComponent>
            <Navbar/>
            <div className="main-content min-h-screen">
                {children}
            </div>
            <Footer/>
            </AnimatedComponent>
        </div>
    );
}

export default Layout;