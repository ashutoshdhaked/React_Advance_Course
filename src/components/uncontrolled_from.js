import {useRef} from 'react';
 
const UncontrolledForm = ()=>{
    const nameRef = useRef('');
    const ageRef = useRef('');
  
    function submit(e){
        console.log("name is like : "+nameRef);
        console.log("age is like : "+ageRef);
         e.preventDefault();
    }

    return(
        <>
        <form onSubmit={submit}>
            <input type="text" ref={nameRef} />
            <input type="text" ref={ageRef}/>
            <button type='submit'>submit</button>
        </form>
        </>
    )
}

export default UncontrolledForm;