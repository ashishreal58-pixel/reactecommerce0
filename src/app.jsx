import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { StoreProvider } from "./context/StoreContext";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
