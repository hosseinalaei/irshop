import React from "react";

const MediaSection = () => {
  return (
    <>
      {/* <!--begin::Media--> */}
      <div className="card card-flush py-4">
        {/* <!--begin::Card header--> */}
        <div className="card-header">
          <div className="card-title">
            <h2>Media</h2>
          </div>
        </div>
        {/* <!--end::Card header--> */}
        {/* <!--begin::Card body--> */}
        <div className="card-body pt-0">
          {/* <!--begin::Input group--> */}
          <div className="fv-row mb-2">
            {/* <!--begin::Dropzone--> */}
            <div className="dropzone" id="kt_ecommerce_add_product_media">
              {/* <!--begin::Message--> */}
              <div className="dz-message needsclick">
                {/* <!--begin::Icon--> */}
                <i className="ki-outline ki-file-up text-primary fs-3x"></i>
                {/* <!--end::Icon--> */}
                {/* <!--begin::Info--> */}
                <div className="ms-4">
                  <h3 className="fs-5 fw-bold text-gray-900 mb-1">
                    Drop files here or click to upload.
                  </h3>
                  <span className="fs-7 fw-semibold text-gray-400">
                    Upload up to 10 files
                  </span>
                </div>
                {/* <!--end::Info--> */}
              </div>
            </div>
            {/* <!--end::Dropzone--> */}
          </div>
          {/* <!--end::Input group--> */}
          {/* <!--begin::Description--> */}
          <div className="text-muted fs-7">Set the product media gallery.</div>
          {/* <!--end::Description--> */}
        </div>
        {/* <!--end::Card header--> */}
      </div>
      {/* <!--end::Media--> */}
    </>
  );
};

export default MediaSection;
