import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ShowImages = ({ file, setFile, setThumbnail, images, setImages }) => {
  useEffect(() => {
    file?.length > 0 && Array.from(file).map((item) => generateThumbnail(item));
  }, [file]);

  const generateThumbnail = (file) => {
    const mediaFile = URL?.createObjectURL(file);
    const reader = new FileReader();

    reader.onload = (e) => {
      const thumbnailDataUrl = e.target.result;
      console.log(thumbnailDataUrl);
      setThumbnail((prev) => [...prev, thumbnailDataUrl]);
      setImages((prev) => [
        ...prev,
        { original: mediaFile, thumbnail: thumbnailDataUrl },
      ]);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="max-h-1/3">
      {images?.length > 0 && <ImageGallery items={images} showBullets />}
    </div>
  );
};

export default ShowImages;
