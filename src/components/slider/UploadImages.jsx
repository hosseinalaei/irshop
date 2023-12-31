import React, { useEffect, useState } from "react";

const UploadImages = ({ file, setFile }) => {
  const inputRef = React.useRef(null);

  useEffect(() => {
    console.log("file: ", file);
    // setProductGallery(file);
    // setProduct({ ...product, gallery: file });
  }, [file]);

  const handleDragDropEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files) {
      setFile(e.target.files[0]);
      // setProductGallery(e.target.files);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // console.log("Dropped event:", e);

    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];
      // console.log("Dropped file:", droppedFile);

      setFile(droppedFile);
      // setProductGallery(file);
      // console.log("jjjjjjjjjjjjjjjj", file, droppedFile);
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      // setFile([...file, ...[e.target.files]]);
      setFile(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="form-container">
        {/* Provide a drop zone and an alternative button inside it to upload files. */}
        <div
          // onClick={(e) => {
          //   inputRef?.current?.click();
          //   // e.preventDefault();
          // }}
          onDragEnter={(e) => {
            handleDragDropEvent(e);
            console.log(e);
          }}
          onDragOver={(e) => handleDragDropEvent(e)}
          onDrop={(e) => {
            handleDrop(e);
          }}
        >
          {/* <p>فایل را بکشید...</p> */}

          <button
            onClick={(e) => {
              e.preventDefault();

              inputRef.current?.click();
            }}
            className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-400"
          >
            آپلود فایل
          </button>

          {/* Hide the crappy looking default HTML input */}
          <input
            ref={inputRef}
            // multiple
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              e.preventDefault();
              handleFileChange(e);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default UploadImages;
