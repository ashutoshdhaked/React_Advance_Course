const SmallList = ({books})=>{
    const {name,price} = books;
    return(
        <>
         <h3>BookName : {name} </h3>
          <p>price : {price} </p>
        </>
    )
}

export default SmallList;
