import React from 'react';
import './style.css';

const UseState = () => {
    const [myNum, SetmyNum]= React.useState(0);
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
       <div className="button2" onClick={()=> (myNum>1 ? SetmyNum(myNum - 1) : SetmyNum(0))}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           DICR
       </div>
      
       </div>
      </>
    
  );
};
export default UseState;