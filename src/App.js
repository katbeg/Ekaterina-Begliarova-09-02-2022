import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Main from "./components/Main/Main";


function App() {
  return (
      <div className="App">
        <Main></Main>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </div>
  );
}

export default App;
