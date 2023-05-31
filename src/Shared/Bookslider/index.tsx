
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.css"
import { useNavigate } from "react-router-dom";



function Bookslider({ ...props }) {

    const navigate = useNavigate();

    const { heading,data } = props;
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const goToDetailsPage = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>,item:any) =>{
        e.preventDefault()
        navigate(`/details/${item.title}`, { state: { item } }); // Pass optional second argument
    }
    
console.log(data,"book slider")
    return (
        <>
            <div className="book-scroller" id="w1">
                <div className="container">
                    <div className="book-wrap">
                        <h2>{heading}</h2>
                        <div className="scroll-book">
                            <div className="slider trending">
                                <Slider {...settings}>
                                    {data?.length > 0 && data.map((item:any,index:number)=>{
                                      return   <div key={index} className="item">
                                      <div className="book-img"> <a
                                          onClick={(e)=>goToDetailsPage(e,item)}
                                          rel="bookmark"><img width="1667" height="2560" src={item?.bookimg}
                                              className="attachment-full size-full wp-post-image" alt="" loading="lazy"
                                          /></a></div>
                                      <div className="book-name">
                                          <h5><a  onClick={(e)=>goToDetailsPage(e,item)}
                                              rel="bookmark">{item.title}</a>
                                          </h5>
                                          <h6>By: <a href="/authors/kasturi-ray/">{item?.author}</a></h6>
                                      </div>
                                  </div>               
                                    })}
                                                         
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Bookslider;