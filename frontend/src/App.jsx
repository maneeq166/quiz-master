import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainNav } from "./components/common/mainnav";
import { Home } from "./components/landing/Home";

function App() {
  return (
    <div className="bg-[linear-gradient(90deg,rgba(89, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)] ">
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
