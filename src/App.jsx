import "./App.css";
import Home from "./pages/Home";
import Header from "../src/components/Header";
import MovieDetail from "./pages/MovieDetail";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-black text-white h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
