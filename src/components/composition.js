const Composition = ({text, size , color , ...props})=>{
    return(
        <>
        <button style={{fontSize : `${size}`, color : `${color}` }}>
            {text}
        </button>
        </>
    )
}


export const RedButton = ({...props})=>{
    return(
        <>
        <Composition {...props} text={props.text} size={props.size} color='red'/>
        </>
    )
}

export const GreenButton = ({...props})=>{
    return(
        <>
        <Composition {...props} text={props.text} size={props.size} color='green'/>
        </>
    )
}
