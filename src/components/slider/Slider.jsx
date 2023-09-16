import React, { useState } from "react";
import UploadImages from "./UploadImages";
import ShowImages from "./ShowImages";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = () => {
  const [file, setFile] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
  const [images, setImages] = useState([]);

  const deleteImage = (index) => {
    const updatedImages = images?.splice(index, 1);
    const updatedThumbnail = thumbnail?.splice(index, 1);
    setImages(images?.splice(index, 1));
    setThumbnail(thumbnail?.splice(index, 1));
    console.log(index, images);
  };

  const submitSlider = () => {
    console.log(file);
  };
  return (
    <>
      <div className="m-3 page-title d-flex flex-column justify-content-center">
        <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
          افزودن دسته‌بندی
        </h1>

        <ul className="pt-1 my-0 breadcrumb breadcrumb-separatorless fw-semibold fs-7">
          <NavLink
            to="/"
            className="text-lg font-bold text-black hover:text-red-500"
          >
            صفحه اصلی
          </NavLink>

          <li className="breadcrumb-item">/</li>
          <li className="text-lg font-bold text-black hover:text-red-500">
            اسلایدر
          </li>

          {/* <li className="breadcrumb-item text-muted">نقش‌ها</li> */}
        </ul>
      </div>
      <div className="card">
        <div className="card-body">
          <div>
            <UploadImages file={file} setFile={setFile} />
            <div className="flex mt-3">
              {thumbnail?.length > 0 &&
                thumbnail?.map((item, index) => (
                  <div className="relative">
                    <FontAwesomeIcon
                      icon="times"
                      color="red"
                      onClick={() => deleteImage(index)}
                      className="absolute p-1 text-2xl rounded-full cursor-pointer left-1 -top-2 hover:bg-slate-200"
                    />
                    <img src={item} className="w-20 h-20 mx-2" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <ShowImages
          file={file}
          setFile={setFile}
          setThumbnail={setThumbnail}
          setImages={setImages}
          images={images}
        />
        <button
          className="px-4 py-2 my-3 text-2xl text-white bg-blue-300 rounded-lg hover:bg-blue-400"
          onClick={submitSlider}
        >
          ثبت
        </button>
      </div>
    </>
  );
};

export default Slider;
