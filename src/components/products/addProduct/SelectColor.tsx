import React, { useEffect, useState } from "react";

const InputGroup = ({ values, onChange }: any) => (
  <div className="input-group">
    {/* <input type="text" value={values.text} onChange={onChange('text')} placeholder="Enter something" />
    <input type="number" value={values.number} onChange={onChange('number')} placeholder="Enter a number" /> */}
    <div className="flex justify-between pt-0 card-body">
      <div className="mb-10 ">
        <label className="required form-label">نام رنگ</label>
        <input
          type="text"
          // name="product_name"
          className="mb-2 form-control"
          placeholder="نام رنگ"
          value={values.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>

      <div className="mb-10 ">
        <label className="required form-label">کد رنگ</label>
        <input
          type="text"
          // name="product_name"
          className="mb-2 form-control"
          placeholder="کد رنگ"
          value={values.code}
          // onChange={(e) => setProductName(e.target.value)}
          onChange={(e) => onChange("code", e.target.value)}
        />
      </div>
      <div className="mb-10 ">
        <label className="required form-label">قیمت</label>
        <input
          type="text"
          // name="product_name"
          className="mb-2 form-control"
          placeholder="ریال"
          value={values.price}
          // onChange={(e) => setProductName(e.target.value)}
          onChange={(e) => onChange("price", e.target.value)}
        />
      </div>
    </div>
    {/* <button className="remove-btn" onClick={onRemove}>
      Remove
    </button> */}
  </div>
);

const SelectColor = ({ setProductColor, productColor }: any) => {
  const [inputGroups, setInputGroups] = useState([
    { name: "", code: "", price: "" },
  ]);

  useEffect(() => {
    console.log("inputGroupsinputGroupsinputGroups", inputGroups);
    // setProductColor(inputGroups);
  }, [inputGroups]);

  const handleInputChange =
    (index: string) => (fieldName: string, newValue: any) => {
      const newInputGroups = [...inputGroups];
      newInputGroups[index][fieldName] = newValue;
      setInputGroups(newInputGroups);
      setProductColor([...inputGroups]);
    };

  const addInputGroup = () => {
    setInputGroups([...inputGroups, { name: "", code: "", price: "" }]);
  };

  const removeInputGroup = (index: number) => {
    const newInputGroups = [...inputGroups];
    newInputGroups.splice(index, 1);
    setInputGroups(newInputGroups);
  };

  // const [colorArray, s/etColorArray] = useState([
  //   {
  //     name: "",
  //     code: "",
  //     price: "",
  //   },
  // ]);
  // console.log("colorArray", colorArray);

  // const [colorName, setColorName] = useState("");
  // const [colorCode, setColorCode] = useState("");
  // const [colorPrice, setColorPrice] = useState("");
  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>رنگ محصول</h2>
        </div>
      </div>
      {/* {colorArray?.map((item, index) => ( */}

      {inputGroups.map((group, index) => (
        <InputGroup
          key={index}
          values={group}
          onChange={handleInputChange(index)}
          // onRemove={() => removeInputGroup(index)}
        />
      ))}

      {/* ))} */}

      <button
        onClick={(e) => {
          e.preventDefault();
          addInputGroup();
          // setColorArray([
          //   ...colorArray,
          //   {
          //     name: "",
          //     code: "",
          //     price: "",
          //   },
          // ]);

          //   inputRef.current?.click();
        }}
        className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-400"
      >
        افزودن
      </button>
    </div>
  );
};

export default SelectColor;
