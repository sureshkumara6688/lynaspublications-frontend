


import  Bannerslide  from "../../Shared/Bannerslide"
import  Bookslider  from "../../Shared/Bookslider"
import  Peopleaboutus  from "../../Shared/Peopleaboutus"
import { useState,useEffect } from "react";
import axios from "axios";

function Homepage (){

 const [receive, setReceive] = useState([{bookimg:'',author:'',title:'',Category:'',price1:'',price2:'',Paperback:'',Hardback:'',aboutbook:''}])
  
  useEffect(() => {
    axios.get("http://localhost:6688/api/lynas/products")
      .then(res => {
        setReceive(res.data);
      })
  }, [])


    return(
        <>
          <Bannerslide/>
          <Bookslider data={receive} heading="FORTHCOMING BOOKS"/>
          <Bookslider data={receive} heading="TRENDING THIS WEEK"/>
          
          <Peopleaboutus/>
        </>
    )
}

export default Homepage;