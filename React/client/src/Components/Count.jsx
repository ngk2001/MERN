import React,{useState} from 'react'
//using Sate Hook
function Count() {
    let [c,setCount] = useState(0); ;
    function changeCount() {
        setCount(++c)
       console.log(c);
        
    }
    function decCount() {
        setCount(--c)
       console.log(c);
    }
  return (
  
    <div className='container w-50 bg-primary-subtle mt-5 p-3 rounded-3'>
        <h2>Count :{c}</h2>
      <button className="btn btn-primary mt-3" onClick={changeCount}>Increase</button><br/>
         <button className="btn btn-primary mt-3" onClick={decCount}>Decrease</button>
          
    </div>
  )
}

export default Count
