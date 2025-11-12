import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HttpProto() {

  let [quote, setQuote] = useState([])

  const fetchQuates = async () => {
    try {
      const responce = await axios.get('https://dummyjson.com/quotes');
      setQuote(responce.data.quotes);
      console.log(quote)
    }
    catch(e){console.log(e)}
  }

useEffect(() => {
  fetchQuates();
}, [])


return (
  <div>
    <ol>
      {quote.map((q,i)=>{
      return <li>{q.quote} -{q.author}</li> 
             
      })}
    </ol>

  </div>
)
}

export default HttpProto
