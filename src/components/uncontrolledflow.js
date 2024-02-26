import React, { useState } from 'react';
const Uncontrolledflow = ({children })=>{

 const [currentstepIndex , setcurrentstepIndex] = useState(0);
 const childelem =  React.Children.toArray(children)[currentstepIndex];
 function goNext(){
    setcurrentstepIndex(currentstepIndex + 1);
 }

//  function onDone(){
//     if(children.length === currentstepIndex){
//         alert("Hurray you have done all things !!");
//     }
//  }

   
   return (
    <> {
             React.cloneElement(childelem,{goNext})
         }
    </>
   );
}

export default Uncontrolledflow;