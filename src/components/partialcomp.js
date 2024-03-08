
export const Partialcomp = (Component , partialprops)=>{
  return  props => <Component {...partialprops} {...props}/>
}


export const Button = ({text, size , color , ...props})=>{
    return(
        <>
        <button style={{fontSize : `${size}`, color : `${color}` }}>
            {text}
        </button>
        </>
    )
}

export const RedButton2  =  Partialcomp(Button,{color : 'red',size : '10px',text :'redButton2'});
export const UpdatedRedButton = Partialcomp(RedButton2,{size : '30px',text:'updatedredbutton' })
