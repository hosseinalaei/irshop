import React, { useState } from "react";

const SelectColor = ({
  colorName,
  setColorName,
  colorPrice,
  setColorPrice,
  colorCode,
  setColorCode,
}: any) => {
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
      <div className="flex justify-between pt-0 card-body">
        <div className="mb-10 ">
          <label className="required form-label">نام رنگ</label>
          <input
            type="text"
            // name="product_name"
            className="mb-2 form-control"
            placeholder="نام رنگ"
            value={colorName}
            onChange={(e) => setColorName(e?.target?.value)}
          />
        </div>

        <div className="mb-10 ">
          <label className="required form-label">کد رنگ</label>
          <input
            type="text"
            // name="product_name"
            className="mb-2 form-control"
            placeholder="کد رنگ"
            value={colorCode}
            // onChange={(e) => setProductName(e.target.value)}
            onChange={(e) => setColorCode(e.target.value)}
          />
        </div>
        <div className="mb-10 ">
          <label className="required form-label">قیمت</label>
          <input
            type="text"
            // name="product_name"
            className="mb-2 form-control"
            placeholder="ریال"
            value={colorPrice}
            // onChange={(e) => setProductName(e.target.value)}
            onChange={(e) => setColorPrice(e.target.value)}
          />
        </div>
      </div>
      {/* ))} */}

      {/* <button
        onClick={(e) => {
          e.preventDefault();
          setColorArray([
            ...colorArray,
            {
              name: "",
              code: "",
              price: "",
            },
          ]);

          //   inputRef.current?.click();
        }}
        className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-400"
      >
        افزودن
      </button> */}
    </div>
  );
};

export default SelectColor;
