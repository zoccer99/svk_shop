import React from "react";
import BambinisFlyer from "./pictures/Flyer_Bambini.jpg";


const Bambinies = () => {
    return (
        <div>
            


            <blockquote class="blockquote ml-3 my-4">
                <h3 class="">Unsere Bambinis</h3>
                <footer class="blockquote-footer">Die Zukunft <cite title="Source Title">des Vereins</cite></footer>
            </blockquote>
            <div className="text-center">

                <img src={BambinisFlyer} className="rounded img-fluid myThumbnail"></img>
            </div>
        </div>
    );
}

export default Bambinies;