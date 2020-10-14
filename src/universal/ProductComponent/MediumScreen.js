import React from "react";
import product from "../../lotties/product.jpeg";
import "./css/productcomponent.css";



const MediumScreen =() =>{
    return(
        <div className="flex flex-column justify-center items-center">
            <div className=" w-25 pointer" style={{height:"35vh"}}>
            <img src={product} alt="product" className="productimg"/>
            </div>
            <div className = "fw6 pointer" style={{fontSize:"1.5vw",color:"#000000"}}>product Name</div>
            <div className = "fw4 pointer" style={{fontSize:"1.3vw",color:"#000000"}}>UGX 10000</div>
            <div className="white  pointer mt2 white tc pt2 pb2 pl3 pr3 fw7 hover-bg-dark-red Hbtn" style={{backgroundColor:"#ff0000"}}>Add to Cart</div>
        </div>
    )
}
export default MediumScreen;