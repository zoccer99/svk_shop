import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';

const ImageSlideshow = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://svkretzschau.ddns.net/api/images/kretzschau_nessa_2526_hr');
        const fetchedImages = response.data.map(url => ({
          original: url,
          thumbnail: url, // Using the same URL for thumbnail for simplicity
        }));
        setImages(fetchedImages);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Failed to load images. Please try again later.');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading slideshow...</div>;
  }

  if (error) {
    return <div className="text-danger">Error: {error}</div>;
  }

  if (images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div className="image-slideshow-container">
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
    </div>
  );
};

export default ImageSlideshow;