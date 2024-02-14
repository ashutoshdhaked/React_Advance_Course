const LargeListItems = ({author})=>{
   const {name , age ,country, books} = author;
    return(
         <>
         <h2>Name : {name}</h2>
         <p> age : {age} </p>
         <p>country :{country}</p>
         <h4> books </h4>
         <ul>
            {
                books.map((item,index)=>{
                    return(
                        <li key={index}> {index+1}  - :  {item}</li>
                    )
                })
            }
         </ul>
         </>
    )
}

export default LargeListItems;