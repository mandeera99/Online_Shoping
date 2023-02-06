import React, { useState ,useEffect} from "react";
//import Skeleton from "react-loading-skeleton";
import menu from "./menu";


const Products = () => {
    const [data, setData] = useState([]);
  

    const getuser = async () => {
    setData(menu);

    }

    useEffect(() => {
        getuser();

    }, []);



    const onClickHandler = (order) => {
        const updatedList = menu.filter((x) => {
            return x.category === order;
        });
        setData(updatedList);

    }
     
        return (
            <>
            <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
                    <hr />
                </div>

            </div>
            </div>

           
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setData(menu)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => onClickHandler("Womens Clothing")}>Womens Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => onClickHandler("Jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => onClickHandler("Shoes")}>Shoes</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => onClickHandler("Bags")}>Bags</button>
                </div>
                <div class="row">
                {
                    data.map((elem) => {
                        const { id, image, category, price } = elem;
                        

                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div class="card h-100 text-center p-5">
                                        <img src={image} class="card-img-top" alt={category} height="250px" width="250px" key={id}/>
                                        <div class="card-body">
                                            <h5 class="card-title">{category}</h5>
                                            <p class="card-text">${price}</p>
                                            
                                            <a href={`/products/${id}`} class="btn btn-outline-dark">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </>
                        );
                    })
                }
                </div>
            </>
        );
    
}
export default Products;