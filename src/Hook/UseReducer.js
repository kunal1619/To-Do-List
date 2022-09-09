import React, { useReducer } from 'react';
import './style.css';

const reducer=(state, action)=>{          // useReducer, useState ka ek alternative hai, useState k ham
    if (action.type==="INCR"){          //small projects me use kartey hai bt in complex project we use 
        state=state+1;                // useReducer bcz ye simplified hota hai
    }
    if (state>0 && action.type==="DICR"){
        state=state-1;
    }
    return state;
}

const UseReducer = () => {
    const initialData= 0;
    const [state, dispatch]= useReducer(reducer, initialData); //state=initialData , state ka data ham reducer
  return (                                            //kii help se change kartey hai bcz usme bhi state aata 
      <>                                               hai
       <div className='center_div'>
       <p>{state}</p>
       <div className="button2" onClick={()=> dispatch({type: "INCR"})}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           INCR
       </div>
       <div className="button2" onClick={()=> dispatch({type:"DICR"})}>
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
export default UseReducer;