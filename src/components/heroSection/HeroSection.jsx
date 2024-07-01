import AnimatedComponent from "../animatedComponent/AnimatedComponent";
import img1 from '../img/new.png'
const HeroSection = () => {
    return (
        <div>
            <AnimatedComponent>
           <img className=" h-full lg:h-full " src={img1} alt="" />
           </AnimatedComponent>
        </div>
    );
}

export default HeroSection;