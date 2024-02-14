import { author } from "./data/author";
import Regularelist from './components/list/regulareList';
import SmallList from "./components/author/smallList";
import LargeListItems from "./components/author/largeList";
import LargeList from "./components/books/largebookslist";
import SmallbookList from "./components/books/smallbookslist";
import { books } from "./data/books";
function App() {
  return (
    <>
      <Regularelist items={author} sourceName="author" ItemComponent={SmallList}/> 
      <hr></hr>
      <Regularelist items={author} sourceName="author" ItemComponent={LargeListItems}/> 
      <hr></hr>
      <Regularelist items={books} sourceName="books" ItemComponent={SmallbookList}/> 
      <hr></hr>
      <Regularelist items={books} sourceName="books" ItemComponent={LargeList}/> 
    </>
  );
}

export default App;
