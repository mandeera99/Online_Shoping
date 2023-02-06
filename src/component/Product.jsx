import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
//import {useDispatch } from "react-redux";
import {addCart} from '../redux/action';
import menu from "./menu";

const Product = ({handleClick}) => {
    const [data, setData] = useState([]);
    let { id } = useParams();
    const [cart,setCart]=useState([]);

//const dispatch=useDispatch();
//const addProduct=(data)=>{
   //cart.push(data);
  // addCart(data);
//}
    const getuser = async () => {

        setData(menu[id]);

    }

    useEffect(() => {
        getuser();
    }, [id]);

    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-6">

                        <img src={data.image} alt={data.category} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-uppercase text-black-50">{data.category}</h5>
                        <h1 className="display-5">{data.category}</h1>
                        <h3 class="display-6 fw-bold my-4">${data.price}</h3>
                        <p className="lead ">Clothing (also known as clothes, apparel, and attire) are items worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together</p>
                       <button className="btn btn-outline-dark px-4 py-2" onClick={() => handleClick(data)}> Add to cart</button>
                       
     
                        <a href={"/cart"} class="btn btn-dark "> Go to cart</a>
                

                    </div>

                </div>
            </div>







        </>
    );
};

export default Product;