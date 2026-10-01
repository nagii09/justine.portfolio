import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-white selection:text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
