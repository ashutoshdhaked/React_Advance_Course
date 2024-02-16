const BookInfo = ({book})=>{
   if (!book) {
       return <div>User data not available</div>;
   }
   return(
       <>
        <h2>Name : {book.name}</h2>
        <p>pages : {book.pages}</p>
        <p>tittle :{book.tittle}</p>
        <p>price : {book.price}</p>
       </>
   )
}
export default BookInfo;