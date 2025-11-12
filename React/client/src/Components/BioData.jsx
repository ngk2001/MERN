import React from 'react'

function BioData(bio) {
  return (
    <div>
      <h4>Name: {bio.Name}</h4>
      <p>Age: {bio.Age}</p>
      <p>Bio: {bio.purpose}</p>
    </div>
  )
}

export default BioData
