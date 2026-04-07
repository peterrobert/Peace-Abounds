import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/about-page";
import Home from "./pages/home-page";
import ServicePage from "./pages/service-page";
// -----
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="h-2 w-full bg-brand-sage"></div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route
          path="*"
          element={
            <>
              <h1 className="text-4xl font-bold text-center mt-20">
                404 - Not Found
              </h1>
            </>
          }
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
