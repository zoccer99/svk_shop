import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function SocialTile(props) {
  return (
    <div className="socialTile primary-color">
      <div className="socialIcons">
        <div className="socialText">Folge dem SV Kretzschau</div>
        <a href="https://www.instagram.com/svkretzschau/" target="_blank" rel="noopener noreferrer" className="socialIcon">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/svkretzschau/" target="_blank" rel="noopener noreferrer" className="socialIcon">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default SocialTile;
