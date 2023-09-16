import React, { useState } from "react";
import UploadImages from "./UploadImages";
import ShowImages from "./ShowImages";

const Slider = () => {
  const [file, setFile] = useState([]);
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <UploadImages file={file} setFile={setFile} />
        </div>
      </div>
      <ShowImages file={file} setFile={setFile} />
    </div>
  );
};

export default Slider;
