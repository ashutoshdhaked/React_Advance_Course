import {useDeferredValue, useState} from 'react';
import "./App.css";
import {HavyComponent} from './HavyComponent';
function App() {
   const [keyword,setkeyword] = useState("");
   const differedvalue = useDeferredValue(keyword);
   console.log("keyword"+keyword);
   console.log('diffkeyword :'+differedvalue);
  return (
   <>
     <input type='text' onChange={(e)=>{setkeyword(e.target.value)}}></input>
     <HavyComponent keyword={differedvalue} />
   </>
  );
}

export default App;
