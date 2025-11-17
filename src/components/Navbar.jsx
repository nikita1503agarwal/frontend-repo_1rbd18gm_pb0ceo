import { Menu, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-emerald-900 grid place-items-center text-white font-semibold">FM</div>
            <div className="leading-tight">
              <p className="text-emerald-900 font-semibold">Furnish Majlis</p>
              <p className="text-xs text-emerald-900/70">KSA • Tailored Interiors</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-emerald-900/80 hover:text-emerald-900 transition">Services</a>
            <a href="#showcase" className="text-emerald-900/80 hover:text-emerald-900 transition">Showcase</a>
            <a href="#contact" className="text-emerald-900/80 hover:text-emerald-900 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+966000000000" className="hidden sm:flex items-center gap-2 text-sm text-white bg-emerald-900 hover:bg-emerald-800 px-3 py-2 rounded-md transition">
              <Phone className="h-4 w-4" /> Call Us
            </a>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-emerald-900/20 text-emerald-900">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
