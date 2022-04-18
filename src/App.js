import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
