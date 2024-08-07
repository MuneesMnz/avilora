import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import HistoryPage from "./pages/HistoryPage";
import StarIconsPage from "./pages/StarIconsPage";
import GalleryPage from "./pages/GalleryPage";
import Footer from "./components/Footer";
import HistoryHome from "./components/History/HistoryHome";
import HistoryItem from "./components/History/HistoryItem";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/history" element={<HistoryPage />} >
          <Route index element={<HistoryHome />} />
          <Route path="item/:id" element={<HistoryItem />} />
        </Route>
        <Route path="/staricons" element={<StarIconsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
