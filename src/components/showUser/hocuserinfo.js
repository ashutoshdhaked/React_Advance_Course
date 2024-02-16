import axios from "axios";
import React, { useState,useEffect } from "react";
const HocUserInfo = ({children})=>{
    const [user,setUser] = useState({});

    useEffect(()=>{
        (async()=>{
          console.log("request sending...");
          const userdata = await axios.get(`http://localhost:9090/getuserbyid/${1}`);
           setUser(userdata.data);
        })()
    },[]) 
    return(
         <>
           {  user ?
              React.Children.map(children,(child)=>{
               if(React.isValidElement(child)){
                   return React.cloneElement(child,{user})
               }
               return child;
              })
            :<div>NO Any user </div>}
         </>
    )
}

export default HocUserInfo;