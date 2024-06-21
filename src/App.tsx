import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Banner from "./components/Banner";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SubHeader />
        <Banner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
