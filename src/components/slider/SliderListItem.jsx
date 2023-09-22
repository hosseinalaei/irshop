import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";
import { ToastContainer, toast } from "react-toastify";

const SliderListItem = ({ slider, getSliders }) => {
  const [sliderAvatarImageName, setSliderAvatarImageName] = useState(null);
  const [sliderBackImageName, setSliderBackImageName] = useState(null);
  const [sliderImageName, setSliderImageName] = useState(null);

  const getMedia = (mediaFieldName) => {
    const body = {
      id: slider?.id,
      mediaFieldName: mediaFieldName,
    };

    return axiosService
      .post("/Media/GetMedia", body)
      .then((res) => res?.status === "Success" && res);
  };

  useEffect(() => {
    if (slider) {
      const fetchMedia = async () => {
        const sliderAvatarImageName = await getMedia("sliderAvatarImageName");
        setSliderAvatarImageName(sliderAvatarImageName?.data);
        const sliderBackImageName = await getMedia("sliderBackImageName");
        setSliderBackImageName(sliderBackImageName?.data);
        const sliderImageName = await getMedia("sliderImageName");
        setSliderImageName(sliderImageName?.data);
      };
      fetchMedia();
    }
  }, []);
  // console.log("sliderAvatarImageName", sliderAvatarImageName);
  // console.log("sliderBackImageName", sliderBackImageName);
  // console.log("sliderImageName", sliderImageName);

  const deleteSlider = () => {
    const body = {
      id: slider?.id,
      isDelete: true,
    };

    axiosService.put("/AdminSlider/updateSlider", body).then((res) => {
      if (res?.status === "Success") {
        toast.success("عملیات با موفقیت انجام شد", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: undefined,
          theme: "light",
          style: { fontFamily: "inherit" },
        });
        setTimeout(() => {
          getSliders();
        }, 500);
      } else if (res?.status === "Error") {
        toast.error("مشکلی رخ داده است", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: undefined,
          theme: "light",
          style: { fontFamily: "inherit" },
        });
      }
    });
  };

  return (
    <>
      <div key={slider?.id} className="col-md-4">
        <div className="card card-flush h-md-100">
          <div className="card-header">
            <div className="card-title">
              <h2>{slider?.title}</h2>
            </div>
          </div>
          <div className="pt-1 card-body">
            <div className="mb-5 text-gray-600 fw-bold">
              خلاصه: {slider?.summary}
            </div>
            <div className="mb-5 text-gray-600 fw-bold">
              توضیحات: {slider?.description}
            </div>
            <div className="mb-5 text-gray-600 fw-bold">
              لینک: {slider?.link}
            </div>
            <div className="flex">
              <div>
                <div className="mb-2 text-gray-600 fw-bold">آواتار</div>
                <img
                  className="w-24 h-24 "
                  src={
                    sliderAvatarImageName
                      ? `data:image/jpeg;base64,${sliderAvatarImageName}`
                      : "/blank-image.svg"
                  }
                  alt=""
                />
              </div>
              <div>
                <div className="mx-3 mb-2 text-gray-600 fw-bold">پس‌زمینه</div>
                <img
                  className="w-24 h-24 mx-3"
                  src={
                    sliderBackImageName
                      ? `data:image/jpeg;base64,${sliderBackImageName}`
                      : "/blank-image.svg"
                  }
                  alt=""
                />
              </div>
              <div>
                <div className="mb-2 text-gray-600 fw-bold">اسلایدر</div>
                <img
                  className="w-24 h-24 "
                  src={
                    sliderImageName
                      ? `data:image/jpeg;base64,${sliderImageName}`
                      : "/blank-image.svg"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex-wrap pt-0 card-footer">
            <button
              type="button"
              className="my-1 btn btn-light btn-active-light-primary"
              onClick={() => deleteSlider()}
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderListItem;
