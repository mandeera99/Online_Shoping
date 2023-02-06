import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark text-white border-0">
                <img src="/asset/bg1.jpg" className="card-img" alt="background" height="550px" />
                <div className="container">
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHECK OUT ALL THE TRNDS</p>
                </div>

                </div>
            </div>
            <Products/>
        </div>
    );
};
export default Home;
