import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages and components
import Home from "./pages/Homepage/Home";
import Navbar from "./components/Navbar/navbar";
import Offers from "./pages/Homepage/Offers/Offers"
import StoreDetails from "./pages/Homepage/StoreDetails/StoreDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path ="/StoreDetails" element = {<StoreDetails />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}



export default App;