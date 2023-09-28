import React, { useEffect, useState } from "react";
import { axiosService } from "../../../../services/axiosService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MediaSection = ({ product, setProduct, selectedProduct }) => {
  const [file, setFile] = useState([]);
  const inputRef = React.useRef(null);
  const [img, setImg] = useState([]);

  const getPic = (id) => {
    console.log("ffffffffffffffffffffffffffff",id);
    const body = {
      id,
      mediaFieldName: "productGalleryImageName",
    };
    axiosService
      .post("/Media/GetMedia", body)
      .then((res) => {
        console.log("res", res);
        setImg((prev) => [...prev, res?.data]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    selectedProduct?.productGalleries?.length > 0 &&
      selectedProduct?.productGalleries?.map((item) =>
       {
        
        getPic(item?.imageuniqueId)
       }
      );
  }, [selectedProduct]);
  useEffect(() => {
    console.log("imgimgimgimg", img);
  }, [img]);

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

  const deleteImage = (index) => {
    const updatedImages = [...file];

    updatedImages.splice(index, 1);

    setFile(updatedImages);
  };

  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>تصاویر</h2>
        </div>
      </div>
      <div className="flex justify-between pt-0 card-body">
        <div className="mb-2 fv-row">
          <p>تصاویر محصول را انتخاب کنید</p>

          {/* <img src={`data:image/jpeg;base64,${img}`} alt="" /> */}

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
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-3/5">
          {file?.length > 0 &&
            Array.from(file).map((item, index) => (
              <div className="relative" key={index}>
                <FontAwesomeIcon
                  icon="times"
                  color="red"
                  onClick={() => deleteImage(index)}
                  className="absolute p-1 text-2xl rounded-full cursor-pointer left-1 -top-2 hover:bg-slate-200"
                />
                <img
                  src={URL.createObjectURL(item)}
                  className="w-20 h-20 m-2"
                />
              </div>
            ))}
        </div>
        <div className="flex flex-wrap w-3/5">
          {img?.length > 0 &&
            Array.from(img).map((item, index) => {
              console.log("itemmmmmmmmm", item, index);
              return (
                <div className="relative" key={index}>
                  <FontAwesomeIcon
                    icon="times"
                    color="red"
                    onClick={() => deleteImage(index)}
                    className="absolute p-1 text-2xl rounded-full cursor-pointer left-1 -top-2 hover:bg-slate-200"
                  />
                  <img
                    src={`data:image/jpeg;base64,${item}`}
                    className="w-20 h-20 m-2"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
