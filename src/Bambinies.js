import React from "react";
import BambinisFlyer from "./pictures/Flyer_Bambini.jpg";


const Bambinies = () => {
    return ( 
        <div>
            <blockquote className="blockquote">
            <p>Unsere Bambinis</p>
            </blockquote>
            <img src={BambinisFlyer} className="img-fluid"></img>
        </div>
     );
}
 
export default Bambinies;