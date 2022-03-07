import React from "react";

import ContactJunior from "./ContactJunior";

import BambinisFlyer from "./pictures/Flyer_Bambini.jpg";


const Bambinies = () => {
    return (
        <div>
            <blockquote class="blockquote ml-3 my-4">
                <h3 class="">Unsere Bambinis</h3>
                <footer class="blockquote-footer">Die Zukunft <cite title="Source Title">des Vereins</cite></footer>
            </blockquote>
            <div className="text-center bambiniFlyer">
                <img src={BambinisFlyer} className="rounded img-fluid w-75 shadow-lg"></img>
            </div>
            <ContactJunior verantwortliche="Christian Koschik, Andre Barth" telefon="0152 21096461" anschrift="Mittelweg 1" ort="Kretzschau" zeit="Mittwoch 17.00-18.30" spieltag="Sonntag"/>

        </div>
    );
}

export default Bambinies;