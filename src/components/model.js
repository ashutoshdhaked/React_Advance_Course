import {useState} from 'react';
import {styled} from 'styled-components';

const ModelBackground = styled.div`
position :absolute;
left : 30%;
top :30%;
overflow :auto ;
background-color : #000000;
width :100%
heigth :100%
` 
const ModelContent = styled.div`
 margin : 12% auto;
 padding :24px;
 background-color : #ffffff;
 width : 50%
`
const Model = ({children})=>{
    const [show, setShow] = useState(false);
    return(
        <> 
         <button onClick={()=>{setShow(!show)}}>{show ? 'close model':'show model'}</button>
             {
                show && ( 
                   <ModelBackground onClick={()=>{setShow(false)}}>
                   <ModelContent onClick={(e)=>{e.stopPropagation()}}>
                     {children}
                     <button onClick={()=>{setShow(false)}}>close</button>
                   </ModelContent>
                   </ModelBackground>
                )
             }
        </>
    )
}

export default Model;