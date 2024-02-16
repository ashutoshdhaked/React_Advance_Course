import { useState,useEffect } from "react";
const DataStoreWithRender = ({getdata = ()=>{},render})=>{
    const [data,setData] = useState({});
    useEffect(()=>{
        (async()=>{
            const response = await getdata();
            setData(response);
        })()
    },[getdata])
    return render(data); 
}

export default DataStoreWithRender;