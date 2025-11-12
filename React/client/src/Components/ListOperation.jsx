import React from 'react'

const ListOperation = () => {
    const fruit =["Apple", "Mango","Banana", "Watermelon", "Orange", "Apple", "Mango","Banana", "Watermelon", "Orange"]
  return (
    <div className="d-flex justify-content-center">
        <ul className="list-group d-flex justify-content-center align-items-center w-50" >
        {fruit.map((f, i)=>{
            return <li className="list-group-item list-group-item-success d-flex justify-content-center w-50">{f}</li>;

          
        })}
        </ul>
    </div>
      
  )
}

export default ListOperation
