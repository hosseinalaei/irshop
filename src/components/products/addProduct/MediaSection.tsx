import React, { useEffect, useRef } from "react";
import axios from "axios";
import useFileUpload from "react-use-file-upload";

const MediaSection = ({ setProductGallery }: any) => {
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = createFormData();

    // try {
    //   axios.post("https://some-api.com", formData, {
    //     "content-type": "multipart/form-data",
    //   });
    // } catch (error) {
    //   console.error("Failed to submit files.");
    // }
  };

  useEffect(() => {
    setProductGallery(files);
  }, [files, setProductGallery]);

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
              className="flex flex-col items-center justify-center py-5 border border-2 border-dashed"
              onDragEnter={(e: any) => handleDragDropEvent(e)}
              onDragOver={(e: any) => handleDragDropEvent(e)}
              onDrop={(e: any) => {
                handleDragDropEvent(e);
                setFiles(e, "a");
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
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={(e) => {
                  setFiles(e, "a");
                  inputRef.current.value = null;
                  handleSubmit(e);
                }}
              />
            </div>
            {/* Display the files to be uploaded */}
            <div>
              <ul>
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
              </ul>

              {files.length > 0 && (
                <ul>
                  {/* <li>File types found: {fileTypes.join(", ")}</li> */}
                  {/* <li>Total Size: {totalSize}</li> */}
                  {/* <li>Total Bytes: {totalSizeInBytes}</li> */}

                  <li className="clear-all">
                    <button onClick={() => clearAllFiles()}>
                      پاک کردن همه
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
