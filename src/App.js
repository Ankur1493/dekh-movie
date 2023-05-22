import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/login"  element = {<Login/>}/>
        <Route exact path = "/"  element = {<Home/>}/>
        <Route path="*" element={<h1>wrong url path</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
