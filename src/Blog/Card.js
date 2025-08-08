import React from 'react';
import { Link } from 'react-router-dom';
import parse from "html-react-parser";
import gebbi from "../pictures/profiles/gebbi.webp";
import scholle from "../pictures/profiles/Scholle.jpg";
import admin from "../pictures/profiles/admin.png"


function Card(props) {
  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
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
    <div className="col-12 col-sm-6 col-md-4 mb-4 p-0">
      <div className="card h-100 d-flex flex-column">
        <Link to={`/${props.teamClass}/${slugify(props.titel)}`} className="text-decoration-none text-dark d-flex flex-column flex-grow-1">
          <img src={props.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body flex-grow-1">
            <span className="badge bg-primary">{props.teamClass}</span>
            <h5 className="card-title mt-2">{props.titel}</h5>
            <p className="card-text" style={{ verflow: 'hidden' }}>{stripHtml(props.text.substring(0, 100) + '...')}</p>
          </div>
          <div className="card-footer d-flex align-items-center mt-auto">
            <img src={changeAuthorPic(props.author)} alt={props.author} className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
            <small className="text-muted">
              {props.author} - {props.time}
            </small>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
