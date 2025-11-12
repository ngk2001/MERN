import React from 'react'
import data from "../assets/newData.json/"

function Cards() {

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {data.map((d, i) => {
        return <div className="card  mb-3" style={{width:"20rem"}}>
          <img src={d.picture} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{d.name.title} {d.name.first}  
            </h5>
               <p className="card-text mb-0">{d.cell}</p>
               <p className="card-text mb-0">{d.location.city},{d.location.state}</p>
               <p className="card-text mb-1"> {d.location.country}</p>
            
            <a href="#">{d.email}</a>
          </div>
        </div>


      })}
    </div>
  )
}

export default Cards
