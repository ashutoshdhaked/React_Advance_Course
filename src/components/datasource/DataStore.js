import React, { useState,useEffect } from "react";
const HocUserInfo = ({children,getdata ,resourceName})=>{
    const [data,setData] = useState({});

    useEffect(()=>{
        (async()=>{
            const response = await getdata();
            setData(response);
        })()
    },[getdata])

    return(
         <>
           {  data ?
              React.Children.map(children,(child)=>{
               if(React.isValidElement(child)){
                   return React.cloneElement(child,{[resourceName]:data})
               }
               return child;
              })
            :<div>NO Any user </div>}
         </>
    )
}

export default HocUserInfo;