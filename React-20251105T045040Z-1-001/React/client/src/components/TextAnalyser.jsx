import React, { useState } from "react";

function TextAnalyser() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleReset = () => {
    setText("");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className=" card p-4 w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">{text}</h3>
        <label className="form-label"> Enter any text </label>
        <input type="Name" className="form-control mb-3" onChange={handleChange} />
        <button className="btn btn-primary w-100 mt-4" onClick={handleLowerCase}>
          LowerCase
        </button>
        <button className="btn btn-primary w-100 mt-4" onClick={handleUpperCase}>
          UpperCase
        </button>
        <button className="btn btn-danger w-100 mt-4" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TextAnalyser;
