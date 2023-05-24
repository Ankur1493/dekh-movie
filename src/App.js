import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import {Genre, Popular, Latest, Normal} from './components/export'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/">
          <Route index element={<Normal />} />
          <Route path="genres" element={<Genre />} />
          <Route path="popular" element={<Popular />} />
          <Route path="latest" element={<Latest />} />
        </Route>
        <Route path="*" element={<h1>wrong url path</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
