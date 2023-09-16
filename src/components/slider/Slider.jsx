import React, { useState } from "react";
import UploadImages from "./UploadImages";
import ShowImages from "./ShowImages";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { axiosService } from "../../services/axiosService";

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

  const [slider, setSlider] = useState({
    title: "",
    summary: "",
    description: "",
    link: "",
  });

  const postMedia = (id, image, key) => {
    const body = new FormData();
    body.append("originImage", image);
    body.append("mediaFieldName", key);
    body.append("id", id);
    axiosService.post("/Get/PostMedia", body, "multipart/form-data");
  };

  const createSlider = () => {
    console.log(file);
    const body = {
      sliderImageName: file[0]?.name,
      sliderBackImageName: file[0]?.name,
      sliderAvatarImageName: file[0]?.name,
      title: "slider1",
      summary: "this is a slider",
      description: "test",
      link: "www.a.com",
    };

    axiosService.post("/AdminSlider/createSlider", body).then((res) => {
      if (res?.status === "Success") {
        console.log(res);
        postMedia(res?.data?.id, file[0], "sliderImageName");
      }
    });
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
          <div className="flex justify-between">
            <div className="mb-10 fv-row">
              <label className="required form-label">عنوان</label>
              <input
                type="text"
                name="title"
                className="mb-2 form-control"
                placeholder="عنوان"
                value={slider?.title}
                onChange={(e) =>
                  setSlider({ ...slider, title: e.target.value })
                }
              />
            </div>
            <div className="mb-10 fv-row">
              <label className="required form-label">توضیحات کوتاه</label>
              <input
                type="text"
                name="short-description"
                className="mb-2 form-control"
                placeholder="توضیحات کوتاه"
                value={slider?.summary}
                onChange={(e) =>
                  setSlider({ ...slider, summary: e.target.value })
                }
              />
            </div>
            <div className="mb-10 fv-row">
              <label className="required form-label">توضیحات</label>
              <input
                type="text"
                name="description"
                className="mb-2 form-control"
                placeholder="توضیحات"
                value={slider?.description}
                onChange={(e) =>
                  setSlider({ ...slider, description: e.target.value })
                }
              />
            </div>
            <div className="mb-10 fv-row">
              <label className="required form-label">لینک</label>
              <input
                type="text"
                name="link"
                className="mb-2 form-control"
                placeholder="لینک"
                value={slider?.link}
                onChange={(e) => setSlider({ ...slider, link: e.target.value })}
              />
            </div>
          </div>
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
          onClick={createSlider}
        >
          ثبت
        </button>
      </div>
    </>
  );
};

export default Slider;
