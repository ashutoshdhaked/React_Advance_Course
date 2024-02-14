const LargeList = ({books})=>{
    const {name , pages , tittle,price} = books;
    return(
        <>
         <h3>BookName : {name} </h3>
          <p>pages : {pages} </p>
          <p>tittle : {tittle} </p>
          <p>price : {price} </p>
        </>
    )
}

export default LargeList;
