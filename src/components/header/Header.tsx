import React from "react";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <>
      <div className="card-header" id="kt_activities_header">
        <h3 className="card-title fw-bold text-dark">Activity Logs</h3>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_activities_close"
          >
            <i className="ki-outline ki-cross fs-1"></i>
          </button>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;
