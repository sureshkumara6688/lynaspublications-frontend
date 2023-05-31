
import { useLocation } from 'react-router-dom';


function Detailspage() {
  let location = useLocation();
  const { item } = location?.state || {};

  return (
    <>
      <div id="main" className="wrapper">
        <div id="primary" className="site-content">
          <div id="content" role="main">
            <div className="page-wrapper">
              <div className="container">
                <div className="row">
                  {item && Object.keys(item)?.length > 0 ?
                    <div className="col-md-10 col-md-offset-1">

                      <div className="row">
                        <div className="col-sm-5 col-md-4">
                          <div className="book-img">
                            <img width="1521" height="2349" src={item.bookimg} className="attachment- size- wp-post-image" alt="img" /></div></div>
                        <div className="col-sm-7 col-sm-offset-0 col-md-7 col-md-offset-1 book-info">
                          <h1>{item.title}</h1>
                          <p className="author">by <a href="/authors/scott-allan/">{item.author}</a></p>
                          <ul className="small-info">
                            <li><span>Category</span>
                              <a href="/book_category/non-fiction/">{item.Category}</a>
                            </li>

                            <li><span>ISBN Hardback :</span>  {item.Hardback}  <span> Price :</span> <b>$</b>{item.price1} </li>
                            <li><span>ISBN Paperback : </span> {item.Paperback}	<span> Price :</span> <b>$</b>{item.price2} </li>

                            {/* <li><span>Price</span> 295</li>  */}

                          </ul>

                        </div>
                        <div className="col-sm-12 col-md-12">
                          <div className="book-details">
                            <h2>ABOUT THIS BOOK</h2>
                            <p>
                              {item.aboutbook}
                            </p>

                          </div>
                          <div className="author-book">
                            <h3>AUTHOR OF THE BOOK</h3>
                            <p>With his books published in six languages, and over 200,000 copies sold worldwide, Scott Allan is
                              on a mission to transform the human potential.
                              Scott is the bestselling author of Fail Big, Relaunch Your Life and Do the Hard Things First. As a
                              former corporate business trainer in Japan and transformational success strategist, he has invested
                              over 10,000 hours of practice and research into the areas of confidence development and mindset
                              mastery training.
                              With an unrelenting passion for teaching, building critical life skills and inspiring people around
                              the world to take charge of their lives, he is committed to a path of constant and never-ending
                              self-improvement.
                              You can join the challenge by visiting Scott at scottallaninternational.com</p>
                          </div>
                        </div>

                      </div>

                    </div> : <p> Something went wrong.</p>}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Detailspage;
// //  {/* <div className="row btn-row">
// <div className="col-md-8">
// <div className="row">
//   <div className="col-xs-6"><a href="/books/built-for-stealth-how-to-build-an-awesome-life/" target="_blank" className="btn btn-primary btn-block">Buy Now</a></div>
//   <div className="col-xs-6"><a href="/books/built-for-stealth-how-to-build-an-awesome-life/" target="_blank" className="btn btn-primary btn-block">Buy ebook</a></div>
// </div>
// </div>
// </div>
// <div className="share-book">
// <h6>Share On:</h6>
// </div>
// <ol>
// <li><span>ISBN:</span> 978-93-5702-147-0</li>
// <li><span>Pages:</span> 152 pages</li>
// <li><span>Date:</span> 5th May 2023</li>
// </ol> */}