import React from "react";
import firstTeam from "../pictures/firstTeam.jpg";
import MyImageGallery from "./MyImageGallery";
import useIsMobile from "../Hooks/useIsMobile";
import TeamworkQuote from "../components/TeamworkQuote";

const FullContribution = (props) => {
  const isMobile = useIsMobile();
  const [imageSrc, setImageSrc] = React.useState(firstTeam);

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const chooseRandom = (imgArr) => {
    if (!Array.isArray(imgArr) || imgArr.length === 0) return;
    const idx = Math.floor(Math.random() * imgArr.length);
    setImageSrc(imgArr[idx]);
  };

  const importAllImages = (r) => {
    let img = r.keys().map(r);
    chooseRandom(img); //random Bild wird aus importierten bildern ausgewählt
  };

  React.useEffect(() => {
    scrollToTop();
    importAllImages(
      require.context("../pictures/ErsteSpiel", false, /\.(png|jpe?g|svg|JPG)$/)
    );
  }, []);

  return (
    <div className="fullContributionWrapper mt-5">
      <div className="d-flex justify-content-center">
        {props.customImages ? (
          isMobile ? (
            <TeamworkQuote />
          ) : (
            <MyImageGallery />
          )
        ) : (
          <img
            className="w-lg-75 img-fluid image-frame"
            src={imageSrc}
            alt="SpielBild"
          ></img>
        )}
      </div>
      {/* <div className="fixed-bg bg-1" id="bg-1">
          <h1 className="main-text">{props.headline}</h1>
          <p className="sub-text">
            <em>{props.tailline}</em>
          </p>
        </div> */}
      <div className="d-flex justify-content-center align-items-center mt-5 ">
        <div className=" content-section-no-border w-lg-75 text-dark mx-3">
          <h2 className="">{props.headline}</h2>
          <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
        </div>
      </div>
    </div>
  );
};

export default FullContribution;

