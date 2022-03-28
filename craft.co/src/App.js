import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import SearchCompany from './components/SearchCompany/SearchCompany';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes> 
        <Routes>
          <Route path='/search' element={<SearchCompany/>} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
