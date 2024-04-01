import Buttons from "./components/buttons";
import Display from "./components/display";
import { CartProvider } from "./components/cart-context";

function App() {
  return (
    <CartProvider>
      <Display />
      <Buttons />
    </CartProvider>
  );
}

export default App;
