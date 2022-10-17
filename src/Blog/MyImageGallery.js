import { useEffect } from "react";
import { useState } from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const importAllImages = (r) => {
  return r.keys().map(r);
};

const MyImageGallery = (props) => {
  const [finalImages, setfinalImages] = useState();
  useEffect(() => {
    let formattedImages = [];
    const temp = props.path || "../pictures/baumersroda";
    const img = importAllImages(
      require.context(
        "../pictures/baumersroda",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
    for (let i = 0; i < img.length; i++) {
      console.log(img[i])
      for (let j = i + 1; j < img.length; j++) {
        let tempO = img[i].default.split(".")[0]
        let tempT = img[j].default.split(".")[0]
        if (
          tempT.includes(tempO) 
          ) {
          formattedImages.push({
            original: img[i].default,
            thumbnail: img[j].default,
          });
          break;
        }
      }
    }
    setfinalImages(formattedImages);
  }, []);
  return <ImageGallery items={finalImages || images}  additionalClass="w-75" originalWidth = "200px"/>;
};

export default MyImageGallery;
