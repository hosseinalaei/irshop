import React, { useEffect, useRef } from "react";
import { useFileUpload } from "react-use-file-upload/dist/lib/useFileUpload";

const OriginImageProduct = ({ setOriginImage }) => {
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

    // setOriginImage(files);
  };

  useEffect(() => {
    console.log("filesfilesfilesfilesfiles", files);
    files && setOriginImage(files);
  }, [files]);

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
              className="image-input-wrapper w-150px h-150px"
              onDragEnter={(e: any) => handleDragDropEvent(e)}
              onDragOver={(e: any) => handleDragDropEvent(e)}
              onDrop={(e: any) => {
                handleDragDropEvent(e);
                setFiles(e, "a");
              }}
            >
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
            {/* <div className="image-input-wrapper w-150px h-150px"></div> */}
            <label
              className="shadow btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body"
              data-kt-image-input-action="change"
              data-bs-toggle="tooltip"
              title="Change avatar"
              onClick={(e) => {
                e.preventDefault();

                inputRef.current?.click();
              }}
            >
              {/* <i className="ki-outline ki-pencil fs-7"></i>
              <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
              <input type="hidden" name="avatar_remove" /> */}
            </label>
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
