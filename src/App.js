import { author } from "./data/author";
import Regularelist from './components/list/regulareList';
import SmallList from "./components/author/smallList";
import LargeListItems from "./components/author/largeList";
function App() {
  return (
    <>
      <Regularelist items={author} sourceName="author" ItemComponent={SmallList}/> 
      <hr></hr>
      <Regularelist items={author} sourceName="author" ItemComponent={LargeListItems}/> 
    </>
  );
}

export default App;
