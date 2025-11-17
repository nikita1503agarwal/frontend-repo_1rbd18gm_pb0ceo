import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-white text-emerald-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <CTA />
      </main>
      <footer className="border-t border-emerald-900/10 bg-emerald-950 text-emerald-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Furnish Majlis • All rights reserved</p>
          <p className="text-sm text-emerald-200/80">Arabic Majlis • Curtains • Cushions • Bolsters • KSA</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
