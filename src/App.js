import SplitScreen from './components/split-screen';
import './App.css';

const LeftSideComponent = ({tittle})=>{
  return(
    <div>
       <h2 style={{backgroundColor:'blue'}}>Left Side Component .</h2>
       <h2 style={{backgroundColor:'blue'}}>{tittle}</h2>
    </div>
  )
}
const RightSideComponent = ({tittle})=>{
  return(
    <div>
      <h2 style={{backgroundColor:'gray'}}> Right Side Component .</h2>
      <h2 style={{backgroundColor:'gray'}}>{tittle}</h2>
    </div>
  )
}
 

function App() {
  return (
    <>
    {/* <SplitScreen Left={LeftSideComponent} Right={RightSideComponent} leftwidth={1} rightwidth={3}/> */}

    {/* now we pass component as children in splitscreen  so there we have to get these as children variable */}
    {/* In this way we can pass pops to left and rigth compnent */}
     <SplitScreen leftwidth={1} rightwidth={3}>
         <LeftSideComponent tittle='left block'/>
         <RightSideComponent tittle='right block'/>
     </SplitScreen>
    </>
  );
}

export default App;
