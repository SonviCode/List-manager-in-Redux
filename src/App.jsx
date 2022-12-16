import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Knight from "./Pages/Knight";
import Dragon from "./Pages/Dragon";
import Log from "./Pages/Log";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Dragon />}></Route>
        <Route path="/knight" element={<Knight />}></Route>
        <Route path="/log" element={<Log />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
