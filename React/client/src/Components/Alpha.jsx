import React,{useState}from 'react'

function Alpha() {
let [str, changeString] = useState("");

function getString(e){
        changeString(e.target.value)
    }
function lowerCase(){
    changeString(str.toLowerCase())
}
function upperCase(){
    changeString(str.toUpperCase())
}
function reset(){
    changeString("")
}

  return (
    <div className='container d-flex flex-column align-items-center mt-5'>
      <div className="container mb-3 w-50 b-1" style={{border:'1px solid black', padding:'30px'}}>

  <label  className="form-label">Enter text</label>
  <input type="text" className="form-control mb-4 " onChange={getString} placeholder="" value={str}/>

   
    <button type="submit" className="btn btn-primary mb-3  form-control" onClick={lowerCase}>LowerCase</button>
     <button type="submit" className="btn btn-primary mb-3   form-control" onClick={upperCase}>UpperCase</button>
      <button type="submit" className="btn btn-danger mb-3  form-control" onClick={reset}>Reset</button>

</div>

    </div>
  )
}

export default Alpha
