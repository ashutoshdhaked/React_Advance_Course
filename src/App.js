// import { author } from "./data/author";
// import Regularelist from './components/list/regulareList';
// import SmallList from "./components/author/smallList";
// import LargeListItems from "./components/author/largeList";
// import LargeList from "./components/books/largebookslist";
// import SmallbookList from "./components/books/smallbookslist";
// import Model from "./components/model";
// import { books } from "./data/books";

// import HocUserInfo from "./components/showUser/hocuserinfo";
import UserInfo from "./components/showUser/userinfo";
import BookInfo from "./showbooks/booksinfo";
import DataStore from './components/datasource/DataStore';
import axios from "axios";

function App() {
  return (
    <>
     {/* <Model>
     <Regularelist items={author} sourceName="author" ItemComponent={SmallList}/> 
     </Model>
      <hr></hr>
      <Regularelist items={author} sourceName="author" ItemComponent={LargeListItems}/> 
      <hr></hr>
      <Regularelist items={books} sourceName="books" ItemComponent={SmallbookList}/> 
      <hr></hr>
      <Regularelist items={books} sourceName="books" ItemComponent={LargeList}/>  */}


         {/* <HocUserInfo userid={2}>
           <UserInfo/>
         </HocUserInfo> */}


         <DataStore getdata={async()=>{
           const response = await axios.get(`http://localhost:9090/getuserbyid/${3}`);
           return response.data;
         }}
         resourceName='user'
         >
          <UserInfo/>
         </DataStore>
       
         <DataStore  getdata={async()=>{
           const response = await axios.get(`http://localhost:9090/booksinfobyid/${3}`);
           return response.data;
         }}
         resourceName='book'>
        <BookInfo/>
       </DataStore>
    </>
  );
}

export default App;
