import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Background from "./components/sections/Background";
import Methodology from "./components/sections/Methodology";
import Results from "./components/sections/Results";
import FutureWork from "./components/sections/FutureWork";
import Ethics from "./components/sections/Ethics";
import Process from "./components/sections/Process";
import Conclusion from "./components/sections/Conclusion";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-charcoal text-charcoal dark:text-white font-body">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Background />
          <Methodology />
          <Results />
          <FutureWork />
          <Ethics />
          <Process />
          <Conclusion />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
