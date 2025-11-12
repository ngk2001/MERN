import React,{useState} from 'react'

function WordCount() {
  let [text,changeText] = useState("");

  function getString(e){
    changeText(e.target.value)
  }
  let arr = text.split(" ");

  return (
    <div>
        <h3>Word Counter</h3>
      <textarea onChange={getString}></textarea>
      <p>Characters:{text.length} </p>
      <p>Words: {arr.length}</p>
    </div>
  )
}

export default WordCount
