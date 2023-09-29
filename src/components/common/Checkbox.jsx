import React, { useState } from "react";

const Checkbox = (props) => {
  const { label, checked, disabled, value, size } = props;
  const [isChecked, setIsChecked] = useState(checked);

  const id = Math.random().toString(36).substring(7);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (props.onChange) {
      props.onChange(!isChecked);
    }
  };

  return (
    <div
      className={` ${disabled ? "disabled" : ""} inline-block my-2`}
      onClick={handleCheckboxChange}
    >
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        value={value}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={id}
        className="flex items-start w-full gap-2 cursor-pointer select-none"
      >
        <span className="w-full">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
