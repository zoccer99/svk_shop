import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from "html-react-parser";
import gebbi from "../pictures/profiles/gebbi.webp";
import scholle from "../pictures/profiles/Scholle.jpg";
import admin from "../pictures/profiles/admin.png"


function Card(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

function slugifyDe(text) {
  const DE_MAP = { 'ä':'ae','ö':'oe','ü':'ue','Ä':'Ae','Ö':'Oe','Ü':'Ue','ß':'ss' };
  return text
    .toString()
    .replace(/[äöüÄÖÜß]/g, ch => DE_MAP[ch])   // German-friendly
    .normalize('NFKD')                          // decompose accents
    .replace(/[\u0300-\u036f]/g, '')            // remove combining marks
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')                // ASCII only
    .replace(/^-+|-+$/g, '')                    // trim dashes
    .replace(/-{2,}/g, '-');                    // collapse
}

  function stripHtml(htmlString) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || "";
}


  const changeAuthorPic = (str) => {
  if (str === "Christian Gebert") {
    return gebbi;
  } else if (str === "Matthias Scholle") {
    return scholle;
  }
  else if (str === "admin") {
    return admin;
  }
  };

  return (
    <div className={`col-12 col-sm-6 col-md-4 mb-4 p-4-0 ${isMobile ? 'blog-card-mobile-banner' : ''}`}>
      <div className="card h-100 d-flex flex-column">
        <Link to={`/${props.teamClass}/${slugifyDe(props.titel)}`} className="text-decoration-none text-dark d-flex flex-column flex-grow-1 ">
          <img src={props.imgUrl} className="card-img-top" alt="..." loading="lazy" />
          <div className="card-body flex-grow-1">
            <span className="badge bg-primary">{props.teamClass}</span>
            <h5 className="card-title mt-2">{props.titel}</h5>
            <p className="card-text" style={{ overflow: 'hidden' }}>{stripHtml(props.text.substring(0, 100) + '...')}</p>
          </div>
          <div className="card-footer d-flex align-items-center mt-auto">
            <img src={changeAuthorPic(props.author)} alt={props.author} className="rounded-circle me-2" style={{ width: '64px', height: '60px' }} />
            <small className="text-muted pt-2">
              {props.author} - {props.time}
            </small>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
