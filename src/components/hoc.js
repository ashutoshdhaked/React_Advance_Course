export const hoc = (Component)=>{
   return(props)=>{
     console.log(props);
     return <Component {...props}/>
   }
}