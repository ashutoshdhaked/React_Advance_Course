import Recursive from "./components/Recursive";
import { RedButton,GreenButton } from "./components/composition";
import { RedButton2, UpdatedRedButton } from "./components/partialcomp";
const objectData = {
  key1: "value1",
  key2: {
    innerKey1: "innervalues1",
    innerKey2: {
      innerInnerKey1: "ineerIneerValues1",
      innerInnerKey2: "innerIneerValues2",
    },
  },
  key3: "valuers",
};
 
function App() {
  return (
    <> 
      Hello Recursive  :
      <Recursive data={objectData}/>


      <RedButton  text='i am red button' size="10px"/>
      <GreenButton text='i am green button' size="20px"/>

    <RedButton2/>
    <UpdatedRedButton/>


    </>
  );
}

export default App;
