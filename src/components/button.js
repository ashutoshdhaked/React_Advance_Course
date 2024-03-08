import { emmiter } from "../App"

const Button = ()=>{
    const increment = ()=>{
     emmiter.emit('inc');
    }
    const decrement = ()=>{
        emmiter.emit('dec');
    }
    return(
        <>
        <button onClick={increment}>👍</button>
        <button onClick={decrement}>😒</button>
        </>
    )
}

export default Button;