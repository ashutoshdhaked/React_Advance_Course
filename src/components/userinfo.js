const Userinfo = ({user})=>{
   if(!user){
    return<h1>loading ......</h1>
   }
   const{name, email,age } = user;
   return(
    <>
       <h1>Name : {name}</h1>
       <p> Email : {email}</p>
       <p> Age : {age}</p>
    </>
   )
}

export default Userinfo;
