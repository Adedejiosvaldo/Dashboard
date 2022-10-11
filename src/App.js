import "./App.css";
import { Route, Routes } from "react-router-dom";
import ElephantPage from "./pages/ElephantPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/ele/:id' element={<ElephantPage />} />
      </Routes>
    </div>
  );
}

export default App;
