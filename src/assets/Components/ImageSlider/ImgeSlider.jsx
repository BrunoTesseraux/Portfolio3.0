import { div } from "framer-motion/client";
import "./ImageSlider.scss";
import ReactCompareImage from 'react-compare-image';


const ImageSlider = () => {
    return ( 
        <div className="image-slider">
        <ReactCompareImage leftImage="./../../../public/portfolio1.png" rightImage="./../../../public/portfolio2.png" 
        aspectRatio="wider"
        />
        </div>
    );
}
 
export default ImageSlider;

