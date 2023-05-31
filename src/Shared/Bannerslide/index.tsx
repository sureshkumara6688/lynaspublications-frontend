
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.css"
import pic1 from "../../assets/images/Page_01 for Website.jpg"
import pic2 from "../../assets/images/Page_02 for Website.jpg"
import pic3 from "../../assets/images/Page_03 for Website.jpg"
import pic4 from "../../assets/images/Page_04 for Website.jpg"
import pic5 from "../../assets/images/Page_05 for Website.jpg"
function Bannerslide() {

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
       
    };

    return (
        <>
            <div id="main" className="wrapper">
                <div className="banner">
                    <div className="slider bannerSlider">
                        <Slider {...settings}>
                            <div className="item">
                                <a href=""
                                    className="d-block">
                                    <div className="visible-lg visible-md"><img 
                                        src={pic1}
                                        className="attachment-full size-full" alt="" loading="lazy"

                                    /></div>
                                    <div className="visible-sm visible-xs"><img 
                                        src="images/Droupadi-Murmur-square-Banner.jpg"
                                        className="attachment-full size-full" alt="" loading="lazy"
                                    /></div>
                                </a>
                            </div>
                            <div className="item">
                                <a href=""
                                    className="d-block">
                                    <div className="visible-lg visible-md"><img 
                                        src={pic2}
                                        className="attachment-full size-full" alt="" loading="lazy"

                                    /></div>
                                    <div className="visible-sm visible-xs"><img 
                                        src="images/My-Illegitimate-Son-Square-Banner.jpg"
                                        className="attachment-full size-full" alt="" loading="lazy"
                                    /></div>
                                </a>
                            </div>
                            <div className="item">
                                <a href=""
                                    className="d-block">
                                    <div className="visible-lg visible-md"><img 
                                        src={pic3}
                                        className="attachment-full size-full" alt="" loading="lazy"

                                    /></div>
                                    <div className="visible-sm visible-xs"><img 
                                        src="images/Wheat-less-Square-Banner.jpg"
                                        className="attachment-full size-full" alt="" loading="lazy"
                                    /></div>
                                </a>
                            </div>
                            <div className="item">
                                <a href=""
                                    className="d-block">
                                    <div className="visible-lg visible-md"><img 
                                        src={pic4}
                                        className="attachment-full size-full" alt="" loading="lazy"

                                    /></div>
                                    <div className="visible-sm visible-xs"><img 
                                        src="images/Wheat-less-Square-Banner.jpg"
                                        className="attachment-full size-full" alt="" loading="lazy"
                                    /></div>
                                </a>
                            </div>
                            <div className="item">
                                <a href=""
                                    className="d-block">
                                    <div className="visible-lg visible-md"><img 
                                        src={pic5}
                                        className="attachment-full size-full" alt="" loading="lazy"

                                    /></div>
                                    <div className="visible-sm visible-xs"><img 
                                        src="images/Wheat-less-Square-Banner.jpg"
                                        className="attachment-full size-full" alt="" loading="lazy"
                                    /></div>
                                </a>
                            </div>











                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bannerslide;