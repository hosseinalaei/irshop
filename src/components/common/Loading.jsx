import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <FontAwesomeIcon icon="spinner" spin className="text-5xl text-blue-500" />
    </div>
  );
};

export default Loading;
