import { Routes, Route } from 'react-router-dom'

import GeneralLayout from './layout/GeneralLayout';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneralLayout/>}>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/favorites"} element={<Favorites />} />
          <Route path={"/about"} element={<About/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
