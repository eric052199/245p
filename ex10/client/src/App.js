import logo from './logo.svg';
import './App.css';

// External Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from "./Header";
import Footer from "./footer";
import Sidebar from "./sidebar";
//import Main from "./main.js";
import ShowTemp from "./ShowTemp";
import ArtDrinkology from "./ArtDrinkology";

//Data
import { MAIN_DATA } from "./data.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<ShowTemp />} />
          <Route path="exampledataview" element={<ArtDrinkology />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
