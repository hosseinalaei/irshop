import React from "react";

const SubMenu = ({ subMenus }) => {
  return (
    <>
      {subMenus?.map((item, index) => (
        <div key={index} className="p-0 m-0 menu-item">
          <a href="#" className="menu-link">
            {item?.name}
          </a>
        </div>
      ))}
    </>
  );
};

export default SubMenu;
