import React,{useState, useEffect} from 'react'
import axios from 'axios'

function UserDetailsRandomAPI() {
   const [details, setDetail] = useState([])
   const getDetail = async ()=>{
    try{
     const response = await axios.get('https://randomuser.me/api/?results=50')
     setDetail(response.data.results)
    }
    catch(e){
        console.log(`Something went wrong ${e}`)
    }
}
useEffect(()=>{
    getDetail();
},[])
  return (
      <div className="d-flex flex-wrap justify-content-around">
           {details.map((d, i) => {
             return <div className="card  mb-3" data-ds-theme="dark" style={{width:"20rem"}}>
               <img src={d.picture.medium} className="card-img-top" alt="..." />
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

export default UserDetailsRandomAPI
