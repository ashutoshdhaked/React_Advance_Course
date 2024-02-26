import { useState } from "react";

const UncontrolledModal = ()=>{
    const[show,setshow] = useState(false);
    return (
        <>     
         <div>
            <button onClick={()=>{setshow(true)}}>open modal</button>
            { show && 
            ( <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <div style={{background:'yellow', border:'2px solid black', width:'500px' ,textAlign:'center' }}>
                  <button onClick={()=>{setshow(false)}}> close Modal</button> 
                  <div style={{boxShadow:'2%'}}> 
                   <h1>This is the modal is shown</h1>
                   <p> this modal is design to indicate the functionality of the uncontrolled modal design !!</p>
                   </div>
             </div>
             </div>
             )
           } 
         </div>
        </>
    )
}

export default UncontrolledModal;