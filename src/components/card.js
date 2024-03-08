export const Header = ({children})=>{
    return(
        <>
          <div style={{color : 'blue',border:'1px solid black'}}>
           {children}
          </div>
        </>
    )
}

export const Body = ({children})=>{
    return(
        <>
         <div style={{color :'red',border:'1px solid black'}}>
              {children}
         </div>
        </>
    )
}

export const Footer = ({children})=>{
    return(
        <>
        <div style={{color:"green",border:'1px solid black'}}>
           {children}
        </div>
        </>
    ) 
}


export const Card = ({children})=>{
    return (
        <>
          <div style={{border:'1px solid black'}}>
         {children}
          </div>
        </>
    )
}

export default Card;

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;