import logoimage from "../../assets/images/logo.png"
import "./index.css"

function Menubar() {

    return (
        <header className="header">
            <div className="header-new visible-lg">
                <div className="container d-flex">
                    <div className="logo-new align-self-center">
                        <a href="/" title="Lynas Publications" rel="home">
                            <img width="36px" height="40px" src={logoimage} className="attachment-full siLynase-full" alt="" /></a>
                        {/* <p>LYNAS</p> */}
                    </div>
                    <div className="search-new align-self-center">
                        <form role="search" method="get" id="searchform" className="searchform" action="#" >
                            <input type="text" value="" name="s" id="s" className="form-control" placeholder="You are looking for?" />
                            <input type="submit" id="searchsubmit" value="Search" />
                        </form>
                    </div>
                    <nav className="stellarnav align-self-center">
                        <ul id="menu-main-menu" className=""><li id="menu-item-6295" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6264 current_page_item menu-item-6295"><a href="#" aria-current="page">HOME</a></li>
                            <li id="menu-item-6266" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6266"><a href="/contact-us/">ABOUT US</a></li>
                            <li id="menu-item-53" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-53"><a href="#">CATEGORIES</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-2410"><a href="/category/Biography/">Biography</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-2412"><a href="/category/Computer/">Computer Science</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-2414"><a href="/category/Literary/">Literary Collections</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-2421"><a href="/category/English/">English Classics</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-2422"><a href="/category/Fiction/">Fiction,Novels,and Short stories</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-2419"><a href="/category/Health/">Health,Fitness & Motivation</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-2429"><a href="/category/politics/">Politics</a></li>

                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-has-children menu-item-6553"><a href="/category/Social/">Social Science  </a>
                                        <ul className="sub-menu">
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6554"><a href="/category/Anthropology/">Anthropology</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6555"><a href="/category/Psychology/">Psychology</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6554"><a href="/category/Economics/">Economics</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6555"><a href="/category/Internationalrelations/">International relations</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6554"><a href="/category/Politicalscience/">Political science</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6555"><a href="/category/Sociology/">Sociology</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-has-children menu-item-6553"><a href="/category/physical Science/">Physical Science  </a>
                                        <ul className="sub-menu">
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6554"><a href="/category/Physics/">Physics</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6555"><a href="/category/Chemistry/">Chemistry</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6554"><a href="/category/Engineering/">Engineering & Technology</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6555"><a href="/category/Mathematics/">Mathematics </a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6554"><a href="/category/Management/">Management</a></li>

                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-has-children menu-item-6553"><a href="/category/Social Science/">Life Science  </a>
                                        <ul className="sub-menu">
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6554"><a href="/category/Botany/">Botany</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6555"><a href="/category/Zoology/">Zoology</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6554"><a href="/category/FoodScience/">Food Science</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6555"><a href="/category/Bio-Technology/">Bio-Technology</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-book_category menu-item-6554"><a href="/category/MolecularScience/">Molecular Biology</a></li>

                                        </ul>
                                    </li> </ul>
                            </li>
                            <li id="menu-item-59" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59"><a href="/about-us/">CATALOGUE</a></li>
                            <li id="menu-item-59" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59"><a href="/about-us/">PUBLISH WITH US</a></li>
                            <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"><a href="/contact">CONTACT US</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="mobile-logo">
                <div className="d-flex">
                    <img width="36px" height="40px" src={logoimage} className="attachment-full size-full" alt="" loading="lazy" />
                    <a className="toggleMenu align-self-center" href="#"></a>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <a className="toggleMenu" href="#">Navigation</a>
                    <div className="main-nav">

                        <div className="menu-top-menu-container"><ul id="menu-top-menu-1" className="link-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6805"><a target="_blank" rel="noopener" href="/illustrated-catalogue/">ILLUSTRATED <br />CATALOGUE</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6808"><a href="/childrens-catalogue/">CHILDREN’S <br />CATALOGUE</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6859"><a href="/how-to-publish/">HOW TO PUBLISH</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6267"><a href="/media/">MEDIA</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6268"><a href="/events/">EVENTS</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6269"><a href="/blog/">BLOG</a></li>
                        </ul>
                        </div>
                        <div className="search">
                            <form role="search" method="get" id="searchform" className="searchform" action="#">
                                <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-search"></i></div>
                                    <input type="text" value="" name="s" id="s" className="form-control" placeholder="You are looking for?" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Menubar;

