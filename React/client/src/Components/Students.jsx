import React from 'react'

function Students() {
    const students  =[{id:1,name:"Kavin"},{id:2, name:"Niranjan"
    },{id:3, name:"Antony"}]
  return (
    <div style={{textAlign:"center", marginTop:"10px"}}>
      <h3 >Student Names</h3>
     {students.map((s,i)=>{
        return <p>{s.name}</p>
     })}
     
    </div>
  )
}

export default Students
