export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-emerald-700/70 text-xs mb-2">Get started</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">Book a free site visit & measurement</h2>
            <p className="mt-3 text-emerald-900/70">We operate across KSA. Share your details and we’ll call back within 24 hours.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:+966000000000" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition shadow">Call +966</a>
              <a href="https://wa.me/966000000000" target="_blank" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-emerald-900 border border-emerald-900/20 hover:bg-emerald-50 transition">WhatsApp Us</a>
            </div>
          </div>
          <form className="bg-white/70 backdrop-blur border border-emerald-900/10 rounded-2xl p-6 grid grid-cols-1 gap-4">
            <input placeholder="Full name" className="h-11 px-4 rounded-md border border-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-600/30" />
            <input placeholder="Phone (KSA)" className="h-11 px-4 rounded-md border border-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-600/30" />
            <input placeholder="City" className="h-11 px-4 rounded-md border border-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-600/30" />
            <textarea placeholder="Tell us about your majlis or room" rows="4" className="px-4 py-3 rounded-md border border-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-600/30" />
            <button type="button" className="h-11 rounded-md bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition">Request Callback</button>
            <p className="text-xs text-emerald-900/60">By submitting, you agree to be contacted by our team.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
