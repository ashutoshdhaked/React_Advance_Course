//  import UncontrolledForm from "./components/uncontrolled_from";
//  import ControlledForm from "./components/controlled_form";
// import UncontrolledModal from "./components/uncontrolled_modal";
// import ControlledModal from "./components/controlled_modal";
// import { useState } from "react";

import Uncontrolledflow from "./components/uncontrolledflow"

const Stepone = ({goNext})=>{
  console.log(goNext);
  return (
    <>
    <h1># Step - 1 </h1>
     <button onClick={goNext}>next</button>
    </>
  )
}
const Steptwo = ({goNext})=>{
  return(
    <>
    <h1># Step - 2 </h1>
     <button onClick={goNext}>next</button>
    </>
  )
}
const Stepthree = ({goNext})=>{
  return(
    <>
    <h1># Step - 3 </h1>
     <button onClick={goNext}>next</button>
    </>
  )
}



function App() {
//  const[show, setshow] = useState(false); 

//  function showingdata(){
//     setshow(false);
//  } 

  return (
    <>
     {/* <UncontrolledForm/> 
     <ControlledForm/> */}


{/* 
     <UncontrolledModal/>
     { show &&
     <ControlledModal showmodal={showingdata}/>
      }
     <button onClick={()=>{setshow(!show)}}>{show ? 'close modal':'show Modal'}</button>
 */}

   <Uncontrolledflow>
    <Stepone/>
    <Steptwo/>
    <Stepthree/>
   </Uncontrolledflow>
    </>
  );
}

export default App;
