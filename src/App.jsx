import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Dragon/Nav";
import Knight from "./Pages/Knight";
import Dragon from "./Pages/Dragon";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Dragon />}></Route>
        <Route
          path="/knight"
          element={<Knight />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
