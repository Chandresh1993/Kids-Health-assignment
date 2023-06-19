import Create from "./components/Create";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Read from './components/Read';
import Edit from "./components/Edit";


function App() {
  return (
    <div className="container">
      <div>
        <Routes>
          <Route exact path="/" element={<Read/>}></Route>
          <Route exact path="/create" element={<Create/>}></Route>
          <Route exact path="/edit" element={<Edit/>}></Route>

          
        </Routes>
      </div>
    </div>
  );
}

export default App;
