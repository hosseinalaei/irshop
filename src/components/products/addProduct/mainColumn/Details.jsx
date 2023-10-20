import React, { useState } from "react";
import Button from "../../../common/Button";

const InputGroup = ({ values, onChange }) => (
  <div className="input-group">
    <div className="grid w-full grid-cols-12 px-5 gap-x-5">
      <div className="col-span-4">
        <label className="required form-label">جزئیات</label>
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="جزئیات"
          value={values.details}
          onChange={(e) => onChange("details", e.target.value)}
        />
      </div>

      <div className="col-span-4">
        <label className="required form-label">توضیحات</label>
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="توضیحات"
          value={values.description}
          onChange={(e) => onChange("description", e.target.value)}
        />
      </div>
      <div className="col-span-4">
        <label className="required form-label">تفاوت‌ها</label>
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="تفاوت‌ها"
          value={values.differences}
          onChange={(e) => onChange("differences", e.target.value)}
        />
      </div>
    </div>
  </div>
);

const Details = ({ product, setProduct }) => {
  const [inputGroups, setInputGroups] = useState([
    {
      details: product?.details[0]?.details,
      description: product?.details[0]?.description,
      differences: product?.details[0]?.differences,
    },
  ]);

  const handleInputChange = (index) => (fieldName, newValue) => {
    const newInputGroups = [...inputGroups];
    newInputGroups[index][fieldName] = newValue;
    setInputGroups(newInputGroups);
    // setProductColor([...inputGroups]);

    setProduct({ ...product, details: [...inputGroups] });
  };

  const addInputGroup = () => {
    setInputGroups([
      ...inputGroups,
      { details: "", description: "", differences: "" },
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
          <h2>جزئیات</h2>
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

      <div className="flex justify-end w-full px-5">
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

export default Details;
