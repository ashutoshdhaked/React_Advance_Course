import { useEffect, useState } from "react";

 
const ControlledForm = ()=>{
    const [name , setName] = useState("");
    const [age,setAge ]=useState("");

  useEffect(()=>{
     if(name !== "" || name.length >! 5){
         console.log("not a valid name !!");
     }
  },[])

    function submit(e){
         e.preventDefault();
          console.log("name is like : "+name);
        console.log("age is like : "+age);
    }

    return(
        <>
        <form onSubmit={submit}>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
            <button type='submit'>submit</button>
        </form>
        </>
    )
}

export default ControlledForm;