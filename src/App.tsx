import { AddProductForm, ProductList } from "./components";
import "./style.css"
const App = () => {
  return (
    <div>
      <h1>Redux</h1>
      <AddProductForm />
      {/* @ts-ignore */}
      <ProductList />
    </div>
  );
};

export default App;