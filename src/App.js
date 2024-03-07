import Recursive from "./components/Recursive";
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
    </>
  );
}

export default App;
