import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const OriginImageProduct = ({ setOriginImage }: any) => {
  const [file, setFile] = useState<File>();
  const inputRef = React.useRef(null);

  useEffect(() => {
    console.log("file: ", file);
  }, [file]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setOriginImage(e.target.files[0]);
    }
  };
  const handleDragDropEvent = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files) {
      setFile(e.target.files[0]);
      setOriginImage(e.target.files[0]);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    // console.log("Dropped event:", e);

    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];
      // console.log("Dropped file:", droppedFile);

      setFile(droppedFile);
      setOriginImage(droppedFile);
    }
  };

  return (
    <>
      <div className="py-4 card card-flush">
        <div className="card-header">
          <div className="card-title">
            <h2>تصویر اصلی محصول</h2>
          </div>
        </div>
        <div className="pt-0 text-center card-body">
          <div
            className="mb-3 image-input image-input-empty image-input-outline image-input-placeholder"
            style={{
              backgroundImage: "url(/blank-image.svg)",
            }}
          >
            <div
              className="cursor-pointer image-input-wrapper w-150px h-150px"
              onClick={() => {
                inputRef?.current?.click();
              }}
              onDragEnter={(e: any) => {
                handleDragDropEvent(e);
                console.log(e);
              }}
              onDragOver={(e: any) => handleDragDropEvent(e)}
              onDrop={(e: any) => {
                handleDrop(e);
              }}
            >
              <input
                ref={inputRef}
                type="file"
                style={{ display: "none" }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleFileChange(e);
                }}
              />
            </div>
            {/* <div className="image-input-wrapper w-150px h-150px"></div> */}
            <label
              className="shadow btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body"
              data-kt-image-input-action="change"
              data-bs-toggle="tooltip"
              title="Change avatar"
            ></label>
            <span
              className="shadow btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body"
              data-kt-image-input-action="cancel"
              data-bs-toggle="tooltip"
              title="Cancel avatar"
            >
              <i className="ki-outline ki-cross fs-2"></i>
            </span>
            <span
              className="shadow btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body"
              data-kt-image-input-action="remove"
              data-bs-toggle="tooltip"
              title="Remove avatar"
            >
              <i className="ki-outline ki-cross fs-2"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OriginImageProduct;
