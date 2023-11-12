import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';

export default function Api() {
    const [imgData,setImgData] = useState();

    useEffect(() => {
      axios.get('https://api.thecatapi.com/v1/images/search').
      then((response) => {
          setImgData(response.data[0].url)
      }).catch((error) => {
        console.error("errore")
      })
  
    },[])
    return (
      
        <div className="mt-5">
          <img src={imgData} alt="" style={{width:'400px',height:'400px'}}/>
        </div>
   
    );
}
