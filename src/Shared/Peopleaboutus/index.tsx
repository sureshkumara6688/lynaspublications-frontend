
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.css"


function Peopleaboutus({ ...props }) {

    const { heading } = props;
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 600,
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

    return (
        <>
            <div className="home-testimonial">
                <div className="container">
                    <h3>WHAT THEY HAVE TO SAY ABOUT US</h3>
                    <div className="slider testiSlider">
                        <Slider {...settings}>
                        <div className="item">
						<blockquote>
							<p>‘Happiness is as exclusive as a butterfly, and you must never pursue it. If you stay very
								still, it may come and settle on your hand. But only briefly. Savour those moments, for
								they will not come in your way very often.’</p>
						</blockquote>
						<div className="d-flex justify-content-end">
							<div className="media">
								<div className="media-left">
									<div className="author-img">
										<img width="550" height="667"
											src="images/ruskin_bond_20140602.jpg"
											className="attachment-full size-full" alt="" loading="lazy"
											/>
									</div>
								</div>
								<div className="media-body">— Ruskin Bond</div>
							</div>
						</div>
					</div>
					<div className="item">
						<blockquote>
							<p>‘Think ever of rising higher. Let it be your only thought. Even if your object be not
								attained, the thought itself will have raised you.’&nbsp;<em>— Thirukural&nbsp;</em></p>
						</blockquote>
					</div>
					<div className="item">
						<blockquote>
							<p>‘And think not you can direct the course of love, for love, if it finds you worthy,
								directs your course.’&nbsp;—&nbsp;<em>Kahlil Gibran</em></p>
						</blockquote>
					</div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Peopleaboutus;