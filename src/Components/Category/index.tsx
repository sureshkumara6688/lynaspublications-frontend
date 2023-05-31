import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Category({ ...props }) {
  const [receive, setReceive] = useState([{ bookimg: '', author: '', title: '', Category: '', price1: '', price2: '', Paperback: '', Hardback: '', aboutbook: '' }])
  const location = useLocation();
  const navigate = useNavigate();
  const categoryName = decodeURIComponent(location?.pathname)?.replace(/\/+$/, '')?.split("/");
  const searchCat = categoryName[categoryName.length - 1];


  useEffect(() => {
    const config = {
      headers: { 'content-type': 'application/json'  }
    }
    let payload = { Category: searchCat }
    axios.post("http://localhost:6688/api/lynas/category", payload, config)
      .then(res => {
        setReceive(res.data);
      })
  }, [])

  const goToDetailsPage =  (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>,item:any) =>{
    e.preventDefault()
    navigate(`/details/${item?.title}`, { state: { item } }); // Pass optional second argument
  }
console.log(receive)
  console.log(categoryName)
  return (
    <>

      <div id="main" className="wrapper">

        <div className="page-header">
          <div className="container">
            <h1><span>{searchCat}</span></h1>
          </div>
        </div>

        <div id="primary" className="site-content">
          <div id="content" role="main">
            <div className="page-wrapper-aut">
              <div className="container">
                <ul className="listiing">

                  {receive?.length > 0 && receive.map((item, index) => {
                    return <li><a onClick={(e)=>goToDetailsPage(e,item)} rel="bookmark">
                      <div className="list-image"><img width="1650" height="2552" src={item?.bookimg} className="attachment- size- wp-post-image" alt="" />
                       <h4>SANATANA DHARMA: Understanding the Knowledge and Ethics of Hinduism</h4></div></a></li>
                  })}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category;