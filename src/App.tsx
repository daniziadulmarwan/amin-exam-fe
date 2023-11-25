import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kelas from "./pages/Kelas";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/class/:id" element={<Kelas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
