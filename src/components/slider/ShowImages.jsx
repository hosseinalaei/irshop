import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ShowImages = ({ file, setFile }) => {
  const [imagesTest, setImagesTest] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

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

  useEffect(() => {
    console.log("imagesTestimagesTestimagesTest", imagesTest);
  }, [imagesTest]);

  useEffect(() => {
    file?.length > 0 && Array.from(file).map((item) => generateThumbnail(item));
  }, [file]);

  const generateThumbnail = (file) => {
    const mediaFile = URL?.createObjectURL(file);
    console.log("mediaFile:", mediaFile);
    const reader = new FileReader();

    reader.onload = (e) => {
      const thumbnailDataUrl = e.target.result;
      console.log(thumbnailDataUrl);
      setThumbnail(thumbnailDataUrl);
      setImagesTest((prev) => [
        ...prev,
        { original: mediaFile, thumbnail: thumbnailDataUrl },
      ]);
    };

    // You can adjust the thumbnail size by modifying the width and height below.
    reader.readAsDataURL(file);
  };
  return (
    <div className="h-screen">
      {/* {thumbnail && <img src={thumbnail} alt="Thumbnail" />} */}
      {imagesTest?.length > 0 && <ImageGallery items={imagesTest} />}
    </div>
  );
};

export default ShowImages;
