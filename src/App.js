import "./App.css";

import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { Route, Routes } from "react-router-dom";
import Elepant from "./component/Elepant";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Sidebar />
              <Header />
            </>
          }
        />
        <Route
          path='ele'
          element={
            <>
              <Sidebar />
              <Elepant />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
