import "./App.css";
import Home from "./pages/Home";
import Header from "../src/components/Header";
import Detail from "./pages/Detail";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-black text-white h-full w-full font-roboto">
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:imdbID" element={<Detail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
