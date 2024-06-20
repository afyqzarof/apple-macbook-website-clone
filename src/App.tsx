import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Banner from "./components/Banner";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="14-inch-space-black-apple-m3-max-with-14-core-cpu-and-30-core-gpu-36gb-memory-1tb"
            element={<ProductPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
