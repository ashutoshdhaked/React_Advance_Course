const SmallList = ({author}) =>{
    const{name , age} = author;
    return(
        <>
        <p> Name : {name} and  Age : {age}</p>
        </>
    )
}

export default SmallList;