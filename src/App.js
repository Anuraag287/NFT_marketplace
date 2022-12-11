import './App.css';
import Navbar from './components/Navbar.js';
import Marketplace from './components/Products';
import Profile from './components/Profile';
import SellNFT from './components/SellNFT';
import NFTPage from './components/NFTpage';
import ReactDOM from "react-dom/client";
import Footer from './components/Footer';
import Home from './components/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Routes>
          <Navbar />
          <Route path="/" element={<Home />}/>
          <Route path="/nftPage" element={<NFTPage />}/>        
          <Route path="/sellNFT" element={<SellNFT />}/>
          <Route path="/Products" element={<Marketplace />}/> 
          <Route path="/Profile" element={<Profile />}/>     
          <Footer />          
        </Routes>
    </div>
  );
}

export default App;
