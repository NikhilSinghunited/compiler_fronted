import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Editor from './pages/Editor';
import Home from './pages/Home';
import Comp1 from './Component/Comp1';

function App() {
  
  return (
    <>
      {/* <Comp1 /> */}
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Editor" element={<Editor/>} />
            {/* Add other routes here */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
