import React from "react";

function Events() {
  const handleClick = () => {
    console.log("I Got Clicked");
  };
  const handleChange =(e)=>{
    console.log(e.target.value)
  }
  return (
    <div className="">
      <button className="btn btn-primary mt-5 mx-5" onClick={handleClick}>
        Click Me
      </button>
      <div className="input-group mb-3 w-25 mt-3 mx-5">
        <input
          type="text"
          className="form-control"
          aria-label="Recipient’s username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Events;
