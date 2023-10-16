import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";
import SliderListItem from "./SliderListItem";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useAxios from "../../hooks/useAxios";

const SlidersList = () => {
  const [sliders, setSliders] = useState([]);
  const httpRequest = useAxios();
  const getSliders = () => {
    // axiosService.get("/Slider/GetActiveSliders")
      httpRequest({
        url:'/Slider/GetActiveSliders',
        method: 'GET'
      })
      .then((res) => res.status === "Success" && setSliders(res.data));
  };

  useEffect(() => {
    getSliders();
  }, []);

  console.log(sliders);
  return (
    <>
      <ToastContainer />
      <div className="relative row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
        {sliders?.length > 0 &&
          sliders?.map((item, index) => (
            <SliderListItem slider={item} getSliders={getSliders} />
          ))}
        <NavLink to="/create-slider" className="h-full col-md-4">
          <div>
            <div className="card h-md-100">
              <div className="card-body d-flex flex-center">
                <button
                  type="button"
                  className="btn btn-clear d-flex flex-column flex-center"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_add_role"
                >
                  <img src="4.png" alt="" className="mw-100 mh-150px mb-7" />
                  <div className="text-gray-600 fw-bold fs-3 text-hover-primary">
                    ساخت اسلایدر جدید
                  </div>
                </button>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default SlidersList;
