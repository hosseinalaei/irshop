import React, { useEffect, useState } from "react";
import { axiosService } from "../../../../services/axiosService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SliderSection = ({ category, setCategory }) => {
  const [file, setFile] = useState([]);
  const inputRef = React.useRef(null);
  const [img, setImg] = useState();

  // console.log(category);

  // useEffect(() => {
  //   category?.sliderImage?.length > 0 &&
  //     axiosService
  //       .post("/Media/GetMedia", {
  //         id: category?.id,
  //         mediaFieldName: "categorySliderImagename",
  //       })
  //       .then((res) => {
  //         setImg(res?.data);
  //       })
  //       .catch((err) => console.log(err));
  // }, [category?.sliderImage]);

  useEffect(() => {
    console.log("file: ", file);
    setCategory({ ...category, sliderImage: file });
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
      // console.log("jjjjjjjjjjjjjjjj", file, droppedFile);
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
        <div className="mb-2 ">
          <p>تصاویر دسته‌بندی را انتخاب کنید</p>

          <div className="form-container">
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
                multiple
                ref={inputRef}
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  e.preventDefault();
                  handleFileChange(e);
                }}
              />
            </div>
            <div></div>
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
      </div>
    </div>
  );
};

export default SliderSection;
