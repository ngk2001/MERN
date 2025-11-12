import React, {useState} from 'react'

function LightDarkMode() {
  let[backGround, setBackground] = useState("white")
  let[txtColor, setTextColor] = useState("black")
  let[mainText, setMainText] = useState("Light Mode🎇")
  let[btnText, setBtnText] = useState("Switch to Dark")


function changeTheme() {
       
  if(backGround =="white"){
    setBackground("black")
    setTextColor("white")
    setMainText("Dark Mode 👻")
    setBtnText("Swith to Light")
  }else{
     setBackground("white")
    setTextColor("black")
    setMainText("Light Mode🎇")
    setBtnText("Swith to Dark")

  }
  }


  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{backgroundColor:backGround, color:txtColor, height:"100vh"}}>
       
      <h2>{mainText}</h2>
      <button onClick={changeTheme} style={{ height:"40px", backroundColor:"grey", borderRadius:"5px"}}>{btnText} </button>
      
    </div>
  )
}

export default LightDarkMode
