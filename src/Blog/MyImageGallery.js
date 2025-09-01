import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { BsChevronLeft, BsChevronRight, BsArrowsFullscreen, BsPlayFill, BsPauseFill } from "react-icons/bs";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const img = importAllImages(
      require.context(
        "../pictures/baumersroda",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );

    const pairs = new Map();
    for (const mod of img) {
      const url = typeof mod === 'string' ? mod : mod.default;
      if (!url) continue;
      const filename = url.split('/').pop() || '';
      let base = filename.split('.')[0];
      const isThumb = base.endsWith('_thumbnail');
      if (isThumb) base = base.replace(/_thumbnail$/, '');

      const entry = pairs.get(base) || {};
      if (isThumb) entry.thumbnail = url; else entry.original = url;
      pairs.set(base, entry);
    }

    const formattedImages = [];
    pairs.forEach(({ original, thumbnail }) => {
      if (original && thumbnail) formattedImages.push({ original, thumbnail });
    });
    setfinalImages(formattedImages);
  }, []);

  const renderLeftNav = (onClick, disabled) => (
    <button
      type="button"
      className="rig-nav rig-left"
      onClick={onClick}
      disabled={disabled}
      aria-label="Vorheriges Bild"
    >
      <BsChevronLeft />
    </button>
  );

  const renderRightNav = (onClick, disabled) => (
    <button
      type="button"
      className="rig-nav rig-right"
      onClick={onClick}
      disabled={disabled}
      aria-label="Nächstes Bild"
    >
      <BsChevronRight />
    </button>
  );

  const renderFullscreenButton = (onClick, isFullscreen) => (
    <button
      type="button"
      className="rig-utility rig-fs"
      onClick={onClick}
      aria-label={isFullscreen ? "Vollbild verlassen" : "Vollbild"}
    >
      <BsArrowsFullscreen />
    </button>
  );

  const renderPlayPauseButton = (onClick, isPlaying) => (
    <button
      type="button"
      className="rig-utility rig-play"
      onClick={onClick}
      aria-label={isPlaying ? "Pause" : "Abspielen"}
    >
      {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
    </button>
  );

  const galleryItems = finalImages || images;
  const isHero = !!props.hero;
  const classes = isHero ? "modern-gallery modern-hero" : "image-gallery--contained modern-gallery";

  return (
    <ImageGallery
      items={galleryItems}
      additionalClass={classes}
      infinite
      lazyLoad
      slideDuration={600}
      slideInterval={4500}
      showNav={galleryItems.length > 1}
      showPlayButton
      showFullscreenButton
      showThumbnails={!isMobile}
      showBullets={isMobile}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      renderFullscreenButton={renderFullscreenButton}
      renderPlayPauseButton={renderPlayPauseButton}
    />
  );
};

export default MyImageGallery;
