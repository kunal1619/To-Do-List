import React, { useEffect, useState } from 'react';
import './style.css';

const UseEffect=()=>{
    const[myNum, SetmyNum]=useState(0);
    useEffect(()=>{                            
        document.title = `Counts(${myNum})`;
    });//with the help of useEffect ham ham fix timming pe add show kra saktey hain,whatsapp pe number of msg show karta hai , aur bhii bahut kuchh --- read it deply when use

  return (
      <>
       <div className='center_div'>
       <p>{myNum}</p>
       <div className="button2" onClick={()=>SetmyNum(myNum + 1)}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           INCR
       </div>
             
       </div>
      </>
    
  );
} 
  
export default UseEffect;