import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.js';
import DashboardPage from './pages/Dashboard.js';
import CoinPage from './pages/Coin.js';
import ComparePage from './pages/Compare.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
        <Route path="/compare" element={<ComparePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
