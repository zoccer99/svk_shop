import React, { useEffect, useState } from "react";
import Card from "./Card";

//TODO: Datenbank verbinden

const ContributionSite = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [contributions, setContributions] = useState();
  const [images, setImages] = useState();

  const sortCon = (teamclass, conntribution) => {
    //Filter der Contributions nach teamklaasen für erste/zweite Seite
    let temp;
    if (teamclass === "first") {
      temp = conntribution.filter(
        (conn) => conn.teamClass == "Erste Mannschaft"
      );
    } else if (teamclass === "second") {
      temp = conntribution.filter(
        (conn) => conn.teamClass == "Zweite Mannschaft"
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


  useEffect(() => {
    const getImages = async() => {
      const response = await fetch(
        "https://svkretzschau.herokuapp.com/Contribution/"
        );
        let data = await response.json();
        data = sortCon(props.team,  data);
        data = sortConBydate(await data);
        setContributions(await data); //beiträge von db holen
        const temp = await require
        .context("../pictures/erste", false, /\.(png|jpe?g|svg|JPG)$/)
        .keys()
        .map(
          await require.context("../pictures/erste", false, /\.(png|jpe?g|svg|JPG)$/)
          );
          
          setImages(temp); //images importieren(alle)
        }
        
        try {
          setIsLoading(true)
          getImages();
          setIsLoading(false)
        }
        catch(err) {
          console.log(err)
          setIsLoading(false)
        }
        
  }, []);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if(isLoading) {
    return <h1>Loading..</h1>
  }

  else {

  
  return (
    <div>
      <h3 className="text-center mt-4 pinch" style={{ color: "#251F47" }}>
        Aktuelle Berichte
      </h3>
        {contributions && images && (
          <div className="row justify-content-center">
            {contributions.map((conn, index) =>
              index + 1 % 3 == 0 ? (
                <div>
                  <div className="w-100"></div>
                  <Card
                    key={index}
                    teamClass={conn.teamClass}
                    imgUrl={
                      images[Math.floor(Math.random() * (images.length - 1))]
                    } //random image
                    titel={conn.titel}
                    text={conn.text}
                    category={conn.category}
                    author={conn.autor}
                    time={new Date(conn.zeit).toLocaleDateString(
                      "de-DE",
                      options
                    )}
                  />
                </div>
              ) : (
                <Card
                  key={index}
                  teamClass={conn.teamClass}
                  imgUrl={
                    images[Math.floor(Math.random() * (images.length - 1))]
                  } //random image
                  titel={conn.titel}
                  text={conn.text}
                  category={conn.category}
                  author={conn.autor}
                  time={new Date(conn.zeit).toLocaleDateString(
                    "de-DE",
                    options
                  )}
                />
              )
            )}
          </div>
        )}
      </div>
  );
                  }
};

export default ContributionSite;
