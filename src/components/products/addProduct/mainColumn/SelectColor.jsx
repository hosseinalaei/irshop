import React, { useEffect, useState } from "react";
import Dropdown from "../../../common/DropDown";
import Button from "../../../common/Button";

const colorsArray = [
  { name: "قرمز", code: "#FF0000" },
  { name: "سبز", code: "#00FF00" },
  { name: "آبی", code: "#0000FF" },
  { name: "زرد", code: "#FFFF00" },
  { name: "بنفش", code: "#800080" },
  { name: "نارنجی", code: "#FFA500" },
  { name: "صورتی", code: "#FFC0CB" },
  { name: "قهوه‌ای", code: "#A52A2A" },
  { name: "خاکستری", code: "#808080" },
  { name: "سیاه", code: "#000000" },
  { name: "سفید", code: "#FFFFFF" },
  { name: "فیروزه‌ای", code: "#00FFFF" },
  { name: "بنفش صورتی", code: "#FF00FF" },
  { name: "تیله", code: "#008080" },
  { name: "لاوندر", code: "#E6E6FA" },
];

const InputGroup = ({ values, onChange, color }) => {
  // console.log("cccccccccccccccccccccccccccc", color);

  const value = {
    ...(color?.colorName && { name: color?.colorName }),
    ...(color?.colorCode && { code: color?.colorCode }),
  };

  return (
    <div className="input-group">
      <div className="flex justify-between pt-0 card-body">
        <div className="w-1/2 mb-10 ml-2">
          <label className="required form-label">رنگ</label>
          <Dropdown
            block
            value={value}
            onChange={(color) => onChange("color", color)}
            items={colorsArray}
            labelKey="name"
            valueKey="code"
            label="انتخاب کنید ... "
          />
        </div>
        <div className="w-1/2 mb-10">
          <label className="required form-label">قیمت</label>
          <input
            type="text"
            className="mb-2 form-control"
            placeholder="تومان"
            value={values.price}
            onChange={(e) => onChange("price", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const SelectColor = ({ product, setProduct }) => {
  const [inputGroups, setInputGroups] = useState([]);

  // useEffect(() => {
  //   !product?.id &&
  //     setInputGroups({
  //       color: {
  //         name: "",
  //         code: "",
  //       },
  //       price: "",
  //     });
  // }, [product?.id]);
  useEffect(() => {
    setInputGroups(product?.color || []);
  }, [product?.id, product?.color]);

  const handleInputChange = (index) => (fieldName, newValue) => {
    console.log(index, fieldName, newValue);
    const newInputGroups = [...inputGroups];
    newInputGroups[index][fieldName] = newValue;
    setInputGroups(newInputGroups);
    // setProductColor([...inputGroups]);
    const modifiedColorsArray = inputGroups?.map((item) => {
      return {
        colorCode: item?.color?.code || item?.colorCode,
        colorName: item?.color?.name || item?.colorName,
        price: item?.price,
      };
    });
    // console.log(
    //   "modifiedColorsArraymodifiedColorsArraymodifiedColorsArray",
    //   modifiedColorsArray,
    //   inputGroups
    // );
    setProduct({ ...product, color: modifiedColorsArray });
  };

  const addInputGroup = () => {
    setInputGroups([
      ...inputGroups,
      {
        color: {
          name: "",
          code: "",
        },
        price: "",
      },
    ]);
  };

  const removeInputGroup = (index) => {
    const newInputGroups = [...inputGroups];
    newInputGroups.splice(index, 1);
    setInputGroups(newInputGroups);
  };

  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>رنگ محصول</h2>
        </div>
      </div>

      {inputGroups.map((group, index) => (
        <InputGroup
          key={index}
          values={group}
          onChange={handleInputChange(index)}
          color={group}
          // onRemove={() => removeInputGroup(index)}
        />
      ))}

      <div className="flex justify-end w-full px-10">
        {/* <button
        onClick={(e) => {
          e.preventDefault();
          addInputGroup();
        }}
        className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-400"
      >
        افزودن
      </button> */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            addInputGroup();
          }}
          className="w-full"
        >
          افزودن
        </Button>
      </div>
    </div>
  );
};

export default SelectColor;
