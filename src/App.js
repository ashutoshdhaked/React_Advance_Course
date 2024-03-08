import mitt from 'mitt';
import Parent from './components/parent';
export const emmiter = mitt();
function App() {
  return (
    <> 
     <Parent/>
    </>
  );
}

export default App;
