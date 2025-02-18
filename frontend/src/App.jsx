import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainNav } from './components/common/mainnav'

function App() {

  return (
    <BrowserRouter>
    <MainNav />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
