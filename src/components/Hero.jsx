import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-emerald-950/40 to-emerald-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl text-white">
          <p className="uppercase tracking-[0.2em] text-emerald-200/90 text-xs sm:text-sm mb-4">KSA • Bespoke Interiors</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Elegant Majlis & Tailored Furnishings
          </h1>
          <p className="mt-5 text-emerald-100/90 text-base sm:text-lg leading-relaxed">
            We craft luxurious Arabic majlis settings, custom curtains, backrest cushions, bolsters and complete room makeovers — meticulously tailored to your space and style.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-emerald-900 font-semibold hover:bg-emerald-50 transition shadow">
              Get a Quote
            </a>
            <a href="#services" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-emerald-800/60 text-white hover:bg-emerald-800 transition">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
