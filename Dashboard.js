import React from "react";
import bgImage from "../assets/senegal.png";

const Dashboard = () => {
    return(
        <div className="w-[100vw] h-[100vh] justify-center items-center flex flex-col">

            <div className="font-bold
                mx-auto text-white  text-4xl font-serif z-40">
                Welcome to StudyNotion !
            </div>

            <div>

                <img src={bgImage} className=" bgRotate z-20   h-80"/>
            </div>
        </div>
        
        
    )
}
export default Dashboard; 