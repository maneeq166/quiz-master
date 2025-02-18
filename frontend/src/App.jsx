import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainNav } from './components/common/mainnav'
import { Home } from './components/landing/Home'

function App() {

  return (
    <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      fontFamily: "cursive",
      margin: 0,
      padding: 0,
      background: "linear-gradient(135deg, #2d2d2d, #1a1a1a)",
      overflow: "hidden",
    }}
  >
    <BrowserRouter>
    <MainNav />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </div>
  )

}

export default App
