const isObject = (data) => typeof data === 'object' && data !== null;
const Recursive = ({data})=>{
   if(!isObject(data)){
    return <>{data}</>
   }
   const pairs = Object.entries(data);
  return(
    <>  
       <ul>
        {
            pairs.map(([key,value])=>{return(
                <>
                   <li>{key}</li> 
                  <Recursive data={value}/>
                </> 
            )})
        }
        </ul>
    </>
  )
}

export default Recursive;