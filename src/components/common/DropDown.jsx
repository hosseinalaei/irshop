import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";

function Dropdown({
  items,
  value,
  onChange,
  labelKey,
  valueKey,
  label,
  disabled,
  size,
  multiple,
  block,
}) {
  // const [internalSelected, setInternalSelected] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedArray, setSelectedArray] = useState([]);

  useEffect(() => {
    value && setSelectedArray([value]);
  }, []);

  const selectClasses = () => {
    const sizesClasses = {
      base: "p-3",
      large: "p-5",
    };

    const style = "rounded-xl p-3 w-full".split(" ");

    style.push(sizesClasses[size] || sizesClasses.base);

    if (disabled) {
      style.push(..."bg-grayscale-bg cursor-not-allowed".split(" "));
    } else {
      style.push("bg-grayscale-input");
    }

    return style.join(" ");
  };

  const closeDropDown = () => {
    setShowDropDown(false);
  };

  const openDropDown = async () => {
    if (disabled) return;
    setShowDropDown(true);

    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for the component to re-render
  };

  const toggleDropDown = async () => {
    if (showDropDown) {
      closeDropDown();
    } else {
      await openDropDown();
    }
  };

  const getLabel = (item) => {
    return item[labelKey] || null;
  };

  const optionClicked = (item, event) => {
    if (!multiple) {
      setSelectedArray([item]);
      // setInternalSelected([item]);
      onChange(item);
      return false;
    }
    if (!multiple) closeDropDown();

    // if (internalSelected.includes(item)) {
    //   setInternalSelected(internalSelected.filter((f) => f !== item));
    // } else {
    //   setInternalSelected([...internalSelected, item]);
    // }
  };

  return (
    <div
      className={`relative font-normal ${block ? "w-full" : "w-48"} ${
        showDropDown ? "z-20" : ""
      }`}
      onClick={toggleDropDown}
    >
      <div
        className={`transition-all ease-app-default delay-100 ring-1 ring-slate-500 ${selectClasses()} ${
          showDropDown ? "bg-white ring-4 ring-primary-light" : ""
        }`}
      >
        <div
          className={`text-grayscale-label flex items-center select-none justify-between ${
            disabled ? "text-grayscale-placehold" : ""
          }`}
        >
          <div
          //  className="placeholder"
          >
            {selectedArray.length === 0 && label}
            {selectedArray.length > 0 && (
              <div>
                {selectedArray
                  .map((i) => {
                    // console.log("iiiiiiiiiiiiiiiiiiiiiiiiii", i);
                    return i?.name ? getLabel(i) : label;
                  })
                  .join(", ")}
              </div>
            )}
          </div>
          <i
            className={`icon-arrow_chevron_down transform transition-all ease-app-default ${
              showDropDown ? "rotate-180" : ""
            }`}
          ></i>
        </div>
      </div>

      {showDropDown && (
        <div
          className="absolute left-0 w-full p-0 overflow-hidden overflow-y-auto duration-500 bg-white shadow ease-app-default rounded-2xl animate-duration-200"
          style={{
            top: "calc(100% + 8px)",
            minWidth: "180px",
            maxHeight: "250px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`border-b p-2 hover:bg-grayscale-bg text-grayscale-label transition-all ease-app-default cursor-pointer flex items-center ${
                selectedArray.includes(item) || item[valueKey] === value
                  ? "bg-primary-bg text-primary-dark hover:bg-primary-light"
                  : ""
              }`}
              onClick={(event) => optionClicked(item, event)}
            >
              <div
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: item?.code }}
              ></div>
              <div className="mx-5 text-lg ">{getLabel(item)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Dropdown.defaultProps = {
  label: "Select an option",
  size: "base",
  multiple: false,
  block: false,
};

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.object, // for single select
    PropTypes.arrayOf(PropTypes.object), // for multiple select
  ]),
  onChange: PropTypes.func.isRequired,
  labelKey: PropTypes.string.isRequired,
  valueKey: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["base", "large"]),
  multiple: PropTypes.bool,
  block: PropTypes.bool,
};

export default Dropdown;
