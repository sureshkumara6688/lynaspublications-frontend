import imgnotfound from "../../assets/images/page-not-found.png"

function NotFound (){

    return(
        <div className="notfound-page">
         <img src={imgnotfound} alt="not found image" width={"500px"} height={"500px"} />
        </div>
    )
}

export default NotFound;