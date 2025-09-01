import React, { useEffect, useState } from "react";
import Card from "./Card";
// import parse from 'html-react-parser'; // unused
import firstTeam from "../pictures/firstTeam.jpg";
import { Spinner } from "react-bootstrap";

//TODO: Datenbank verbinden

const ContributionSite = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contributions, setContributions] = useState([]);
  const [images, setImages] = useState();
  const [visibleCount, setVisibleCount] = useState(6);
  

  const sortCon = (teamclass, conntribution) => {
    //Filter der Contributions nach teamklaasen für erste/zweite Seite
    let temp;
    if (teamclass === "first") {
      temp = conntribution.filter(
        (conn) => conn.teamClass === "Erste Mannschaft"
      );
    } else if (teamclass === "second") {
      temp = conntribution.filter(
        (conn) => conn.teamClass === "Zweite Mannschaft"
      );
    } else {
      temp = conntribution;
    }
    return temp;
  };

  const sortConBydate = (array) => {
    array.sort(function (a, b) {
      return new Date(b.zeit) - new Date(a.zeit);
    });
    return array;
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };



  
  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
  
        const isMobileNow = window.innerWidth <= 768;
        setVisibleCount(isMobileNow ? 3 : 6);
  
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URI}/Contribution/`
        );
        let data = await response.json();
        data = sortCon(props.team, data);
        data = sortConBydate(data);
        setContributions(data);
  
        const context = require.context(
          "../pictures/erste",
          false,
          /\.(png|jpe?g|svg|JPG)$/
        );
        const temp = context.keys().map((key) => context(key));
        setImages(temp);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
  
    getImages();
  }, [props.team]);
  

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (error) {
    return (
      <div className="alert alert-danger mt-4" role="alert">
        Fehler beim Laden der Beiträge: {error.message}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else {  
    return (
      <div>
        <h3 className="section-title pinch">Aktuelle Berichte</h3>

        <div className="container">
          <div className="row align-items-stretch g-4">
            {contributions.slice(0, visibleCount).map((conn, index) => (
              <Card
                key={index}
                teamClass={conn.teamClass}
                imgUrl={(() => {
                  if (!Array.isArray(images) || images.length === 0) return firstTeam;
                  const idx = Math.floor(Math.random() * images.length);
                  const picked = images[idx];
                  // support both string paths and module objects with .default
                  return typeof picked === 'string' ? picked : (picked && picked.default) || firstTeam;
                })()}
                titel={conn.titel}
                text={conn.text}
                category={conn.category}
                author={conn.autor}
                time={new Date(conn.zeit).toLocaleDateString(
                  "de-DE",
                  options
                )}
              />
            ))}
          </div>
          {visibleCount < contributions.length && (
            <div className="text-center my-4">
              <button className="btn btn-primary" onClick={loadMore}>
                Mehr laden
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default ContributionSite;
