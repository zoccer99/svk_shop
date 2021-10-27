import React from "react";
import BambinisFlyer from "./pictures/Flyer_Bambini.jpg";


const Bambinies = () => {
    return (
        <div>
            <div id="widget1"></div>
            <script type="text/javascript">
                new fussballdeWidgetAPI().showWidget('widget1', '02G5EVPN2O000000VUM1DNOIVU9R2CBC');
            </script>


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