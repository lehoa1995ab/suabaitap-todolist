import logo from './logo.svg';
import './App.css';
import ProductForm from './componentTH/ProductForm';
import ProducList from './componentTH/ProductList';
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <ProductForm />
      <ProducList />
    </div>
  );
}

export default App;
