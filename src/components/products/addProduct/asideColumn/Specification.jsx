import React, { useState } from "react";

const InputGroup = ({ values, onChange }) => (
  <div className="input-group">
    <div className="flex justify-between pt-0 card-body">
      <div className="">
        <label className="required form-label">نام ویژگی</label>
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="نام ویژگی"
          value={values.specName}
          onChange={(e) => onChange("specName", e.target.value)}
        />
      </div>

      <div className="">
        <label className="required form-label">مقدار</label>
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="مقدار"
          value={values.specValue}
          onChange={(e) => onChange("specValue", e.target.value)}
        />
      </div>
    </div>
  </div>
);

const Specification = ({ product, setProduct }) => {
  const [inputGroups, setInputGroups] = useState([
    {
      specName: product?.specification[0]?.specName,
      specValue: product?.specification[0]?.specValue,
    },
  ]);

  const handleInputChange = (index) => (fieldName, newValue) => {
    const newInputGroups = [...inputGroups];
    newInputGroups[index][fieldName] = newValue;
    setInputGroups(newInputGroups);
    // setProductColor([...inputGroups]);

    setProduct({ ...product, specification: [...inputGroups] });
  };

  const addInputGroup = () => {
    setInputGroups([...inputGroups, { specName: "", specValue: "" }]);
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
          <h2>ویژگی‌ها</h2>
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

export default Specification;
