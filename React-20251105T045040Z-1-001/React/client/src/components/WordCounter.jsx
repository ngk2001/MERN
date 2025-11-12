import React, { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container mt-5">
      <h3>Word Counter</h3>
      <textarea
        className="form-control mb-3"
        rows="4"
        onChange={handleChange}
      />
      <p>Characters: {text.length}</p>
      <p>Words: {text.split(" ").length}</p>
    </div>
  );
}

export default WordCounter;
