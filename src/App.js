import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/frames' element={<ShopCategory category="frame"/>}/>
        <Route path='/bars' element={<ShopCategory category="bar"/>}/>
        <Route path='/seats' element={<ShopCategory category="seat"/>}/>
        <Route path="/product" element={<Product/>}>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
