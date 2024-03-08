import Card from "./components/card";

function App() {
  return (
    <> 
    <div style={{width:'500px'}}>
    <Card>
      <Card.Header>
        Header 
      </Card.Header>
      <Card.Body>
        This is the body of the Card and Contain the many of data and
         this data is visible to you on the browser screeen. 
      </Card.Body>
      <Card.Footer>
        <button>Ok</button>
        <button>CANCEL</button>
      </Card.Footer>
    </Card>
    </div>
    </>
  );
}

export default App;
