import {BrowserRouter,Routes,Route} from "react-router-dom";
import FurnitureMain from "./furnitureMain/FurnitureMain.jsx";
import FurnitureProduct from "./furnitereProduct/FurnitureProduct.jsx";
import FurnitureCategory from "./furnitureCategory/FurnitureCategory.jsx";
import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<FurnitureMain/>}/>
          <Route path="product" element={<FurnitureProduct/>}/>
          <Route path="category" element={<FurnitureCategory/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
