// import { author } from "./data/author";
// import Regularelist from './components/list/regulareList';
// import SmallList from "./components/author/smallList";
// import LargeListItems from "./components/author/largeList";
// import LargeList from "./components/books/largebookslist";
// import SmallbookList from "./components/books/smallbookslist";
// import Model from "./components/model";
// import { books } from "./data/books";

import HocUserInfo from "./components/showUser/hocuserinfo";
import UserInfo from "./components/showUser/userinfo";

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
         <HocUserInfo>
           <UserInfo/>
         </HocUserInfo>
    </>
  );
}

export default App;
