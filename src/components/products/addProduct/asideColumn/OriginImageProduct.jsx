import React, { useEffect, useState } from "react";
import { axiosService } from "../../../../services/axiosService";

const OriginImageProduct = ({ product, setProduct, selectedProduct }) => {
  const [file, setFile] = useState(null);
  const [pic, setPic] = useState(null);
  const inputRef = React.useRef(null);

  const getPic = () => {
    const body = {
      id: selectedProduct?.id,
      mediaFieldName: "productImageName",
    };
    axiosService
      .post("/Media/GetMedia", body)
      .then((res) => {
        console.log("res", res);
        setPic(res?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    selectedProduct && getPic();
  }, [selectedProduct]);

  useEffect(() => {
    console.log("file: ", file);
    setProduct({ ...product, originImage: file });
  }, [file]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleDragDropEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files) {
      setFile(e.target.files[0]);
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
              backgroundImage: file
                ? `url(${URL.createObjectURL(file)})`
                : pic
                ? `url(data:image/jpeg;base64,${pic})`
                : `url(/blank-image.svg)`,
            }}
          >
            <div
              className="cursor-pointer image-input-wrapper w-150px h-150px"
              onClick={() => {
                inputRef?.current?.click();
              }}
              onDragEnter={(e) => {
                handleDragDropEvent(e);
                console.log(e);
              }}
              onDragOver={(e) => handleDragDropEvent(e)}
              onDrop={(e) => {
                handleDrop(e);
              }}
            >
              <input
                ref={inputRef}
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  handleFileChange(e);
                }}
              />
            </div>
            {/* <div className="image-input-wrapper w-150px h-150px"></div> */}
            {/* <label
              className="shadow btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body"
              data-kt-image-input-action="change"
              data-bs-toggle="tooltip"
              title="Change avatar"
            ></label> */}
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
