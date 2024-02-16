const UserInfo = ({user})=>{
     console.log('user ; '+JSON.stringify(user));
    if (!user) {
        return <div>User data not available</div>;
    }
    return(
        <>
         <h2>Name : {user.name}</h2>
         <p>age : {user.age}</p>
         <p>country :{user.country}</p>
         <h3>Books </h3>
         <ul>
            {
              user.books &&   user.books.map((item,index)=>{
                    return(
                        <li key={index}> {index+1}  - :  {item}</li>
                    )
                })
            }
         </ul>          
        </>
    )
}
export default UserInfo;