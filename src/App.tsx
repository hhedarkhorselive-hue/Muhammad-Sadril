import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialFeed from "./components/SocialFeed";
import PoliticalLife from "./components/PoliticalLife";
import PersonalLife from "./components/PersonalLife";
import Initiatives from "./components/Initiatives";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <SocialFeed />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-emerald-600 selection:text-white bg-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/political" element={<PoliticalLife />} />
            <Route path="/personal" element={<PersonalLife />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-stone-900 text-white py-12 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-serif font-bold tracking-tighter mb-2">MUHAMMAD SADRIL</h2>
              <p className="text-stone-500 text-sm font-medium">© ২০২৬ সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-stone-400 font-bold">
              <span>Developed by</span>
              <a 
                href="https://hebdzbefrkc7o.mocha.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-500 transition-all shadow-lg transform hover:scale-105"
              >
                SHARIAR AL SHAKIB
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
