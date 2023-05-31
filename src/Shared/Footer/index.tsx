

import  linkedIcon from "../../assets/images/linked-in-icon.png"
import  facebookIcon from "../../assets/images/facebook-icon.png"
import  twitterIcon from "../../assets/images/twitter-icon.png"
import  instagramIcon from "../../assets/images/instagram-icon.png"
import logoimage from "../../assets/images/logo.png"
import swell from "../../assets/images/swell-talk-icon.png"


function Footer (){
    return(
        <>
        	<footer className="footer-new">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 align-self-center copyright">
						<p>Lynas Publications India © All Rights Reserved | <a
								href="/privacy-policy/">Privacy Policy</a></p>
					</div>
					<div className="col-lg-2 align-self-center text-center footer-logo">
						<a href="/" title="Lynas Publications" rel="home">
							<img width="59" height="78"
								src={logoimage}
								className="attachment-full size-full" alt="" loading="lazy"/></a>
					</div>
					<div className="col-lg-5 align-self-center d-flex footer-link">
						<ul className="social-links align-self-center">
							<li><a href="#"
									target="_blank"><img
										src={linkedIcon}
										alt="linkedIn icon"/></a></li>
							<li><a href="#" target="_blank"><img
										src={facebookIcon}
										alt="facebook icon"/></a></li>
							<li><a href="#" target="_blank"><img
										src={twitterIcon}
										alt="twitter icon"/></a></li>
							<li><a href="#" target="_blank"><img
										src={instagramIcon}
										alt="instagram icon"/></a></li>
						<li><a href="#" target="_blank"><img
										src={swell}
										alt="instagram icon"/></a></li>
							
						</ul>
						<ul id="menu-footer-menu" className="footer-links align-self-center">
							<li id="menu-item-6281"
								className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6281"><a
									href="/contact-us/">Contact Us</a></li>
							<li id="menu-item-6279"
								className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6279"><a
									href="/how-to-publish/">How To Publish</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
        </>
    )
}

export default Footer;