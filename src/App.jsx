import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/home-page";

function App() {
  return (
    <main className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="h-2 w-full bg-brand-sage"></div>
      <Navigation />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
