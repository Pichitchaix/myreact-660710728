import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/HomePage";
import BookListPage from "./pages/BookListPage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* หน้า Home */}
        <Route path="/" element={<HomePage />} />

        {/* หน้า Books */}
        <Route path="/books" element={<BookListPage />} />

        {/* หน้า Category แบบ dynamic */}
        <Route path="/category/:name" element={<CategoryPage />} />

        {/* หน้า About */}
        <Route path="/about" element={<AboutPage />} />

        {/* หน้า Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* หน้า 404 */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
};

export default App;
