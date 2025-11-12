import { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("black");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div className="container text-center mt-5">
        <label class="form-label mt-5"> Select Color </label>
        <input
          className="form-control mb-3 w-25 m-auto mt-2"
          type="color"
          onChange={handleChange}
        />
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: color,
            margin: "auto",
            marginTop: "150px",
          }}
        ></div>
      </div>
    </>
  );
};

export default ColorBox;
