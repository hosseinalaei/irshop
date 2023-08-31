import React, { useEffect, useState } from "react";

const MediaSection = ({ product, setProduct, setProductGallery }) => {
  const [file, setFile] = useState([]);
  const inputRef = React.useRef(null);

  useEffect(() => {
    console.log("file: ", file);
    // setProductGallery(file);
    setProduct({ ...product, gallery: file });
  }, [file]);

  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      // setFile([...file, ...[e.target.files]]);
      setFile(e.target.files);
    }
  };
  const handleDragDropEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files) {
      setFile(e.target.files);
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

      setFile([...file, ...[droppedFile]]);
      // setProductGallery(file);
      console.log("jjjjjjjjjjjjjjjj", file, droppedFile);
    }
  };

  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>تصاویر</h2>
        </div>
      </div>
      <div className="pt-0 card-body">
        <div className="mb-2 fv-row">
          <p>تصاویر محصول را انتخاب کنید</p>

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
              <p>فایل را بکشید...</p>

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
                multiple
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  e.preventDefault();
                  handleFileChange(e);
                }}
              />
              {/* <input
                ref={inputRef}
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={(e) => {
                  setFiles(e, "a");
                  inputRef.current.value = null;
                  handleSubmit(e);
                }}
              /> */}
            </div>
            {/* Display the files to be uploaded */}
            <div>
              {/* <ul>
                {fileNames.map((name) => (
                  <li key={name}>
                    <span>
                      {name?.length > 10
                        ? "..." + name?.substring(0, 10)
                        : name}
                    </span>

                    <span onClick={() => removeFile(name)}>
                      <i className="fa fa-times" />
                    </span>
                  </li>
                ))}
              </ul> */}

              {/* {files.length > 0 && (
                <ul>

                  <li className="clear-all">
                    <button onClick={() => clearAllFiles()}>
                      پاک کردن همه
                    </button>
                  </li>
                </ul>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
