import React,{useState} from 'react'

function ColorChanger() {
    let [c, getColor] = useState("black");

function changeColor(e){
  getColor(e.target.value);
}

  return (
    <div className="d-flex align-items-center flex-column mt-5 ">

        <input className="w-50" type="color" onChange={changeColor}/>

        <div id="dabba" style={{width:"200px", height:"200px", backgroundColor:c, marginTop:"30px"}}></div>

      
    </div>
  )
}

export default ColorChanger
