import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

import GeneralLayout from './layout/GeneralLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneralLayout/>}>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/"} element={<Home/>} />
          <Route path={"/"} element={<Home/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
