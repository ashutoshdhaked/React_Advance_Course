import {useEffect, useState} from 'react';
import { emmiter } from '../App';
const Counter = ()=>{
  const[count,setCount] = useState(0);  
   
  useEffect(()=>{
     const oninc = ()=>{
        setCount(count => count + 1);
     }
     const ondec = ()=>{
        setCount(count => count - 1);
     }
    emmiter.on('inc',oninc);
    emmiter.on('dec',ondec);
    return ()=> {
        emmiter.off('inc',oninc);
        emmiter.off('dec',ondec);
    }
  },[])
    return(
    <>
     <p> Count  = {count}</p>
    </>
  ) 
}

export default Counter;