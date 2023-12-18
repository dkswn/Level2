import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Header from "../redux/Components/Header";
import Footer from "../redux/Components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
