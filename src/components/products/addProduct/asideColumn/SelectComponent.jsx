import useAxios from "../../../../hooks/useAxios";
import React, { useEffect, useState } from "react";

const SelectComponent = ({ product, setProduct, options, onChange }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <select
      className="mb-2 form-select"
      value={selectedItem}
      onChange={(e) => {
        setSelectedItem(e?.target?.value);
        onChange(e?.target?.value);
      }}
    >
      <option></option>
      {options?.length > 0 ? (
        options?.map((item, index) => {
          return (
            <option key={index} value={item?.id}>
              {item?.name}
            </option>
          );
        })
      ) : (
        <div>موردی وجود ندارد</div>
      )}
    </select>
  );
};

export default SelectComponent;
