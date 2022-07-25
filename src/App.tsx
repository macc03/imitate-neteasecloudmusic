import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopListPage from './pages/toplist/TopListPage';
import Discover from './pages/discover/Discover';

import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='' element={<Discover />} />
            <Route path='toplist' element={<TopListPage />} />
            <Route path='discover' element={<Discover />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
