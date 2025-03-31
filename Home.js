import React from "react";
import bgImage from "../assets/senegal.png";

const Home = () => {
    return(
        <div className="flex justify-center items-center font-bold text-2xl text-white mx-auto my-auto">
                <img src={bgImage} className=" bgRotate z-20   h-80"/>
        </div>
    )
}
export default Home;