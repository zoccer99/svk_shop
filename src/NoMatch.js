import React from "react";
import { useLocation } from "react-router-dom";

function NoMatch() {
    let location = useLocation();
    return (
        <div>
            <h1>ERROR 404</h1>
            <h2>location:{location.pathname}</h2>
        </div>
    );
}


export default NoMatch;