import {BrowserRouter,Routes,Route} from "react-router-dom";
import FurnitureMain from "./furnitureMain/FurnitureMain.jsx";
import FurnitureProduct from "./furnitereProduct/FurnitureProduct.jsx";
import FurnitureCategory from "./furnitureCategory/FurnitureCategory.jsx";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<FurnitureMain/>}/>
          <Route path="product" element={<FurnitureProduct/>}/>
          <Route path="category" element={<FurnitureCategory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
