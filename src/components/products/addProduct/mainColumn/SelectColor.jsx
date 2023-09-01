import React, { useState } from "react";

const InputGroup = ({ values, onChange }) => (
  <div className="input-group">
    <div className="flex justify-between pt-0 card-body">
      <div className="mb-10 ">
        <label className="required form-label">نام رنگ</label>
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="نام رنگ"
          value={values.colorName}
          onChange={(e) => onChange("colorName", e.target.value)}
        />
      </div>

      <div className="mb-10 ">
        <label className="required form-label">کد رنگ</label>
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="کد رنگ"
          value={values.colorCode}
          onChange={(e) => onChange("colorCode", e.target.value)}
        />
      </div>
      <div className="mb-10 ">
        <label className="required form-label">قیمت</label>
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="ریال"
          value={values.price}
          onChange={(e) => onChange("price", e.target.value)}
        />
      </div>
    </div>
  </div>
);

const SelectColor = ({ product, setProduct }) => {
  const [inputGroups, setInputGroups] = useState([
    {
      colorName: product?.color[0]?.colorName,
      colorCode: product?.color[0]?.colorCode,
      price: product?.color[0]?.price,
    },
  ]);

  const handleInputChange = (index) => (fieldName, newValue) => {
    const newInputGroups = [...inputGroups];
    newInputGroups[index][fieldName] = newValue;
    setInputGroups(newInputGroups);
    // setProductColor([...inputGroups]);

    setProduct({ ...product, color: [...inputGroups] });
  };

  const addInputGroup = () => {
    setInputGroups([
      ...inputGroups,
      { colorName: "", colorCode: "", price: "" },
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
          // onRemove={() => removeInputGroup(index)}
        />
      ))}

      <button
        onClick={(e) => {
          e.preventDefault();
          addInputGroup();
        }}
        className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-400"
      >
        افزودن
      </button>
    </div>
  );
};

export default SelectColor;
