import { Sofa, Square, Ruler, Scissors, CurtainIcon, Sparkles } from "lucide-react";

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-emerald-900/10 bg-white/60 backdrop-blur p-6 hover:shadow-lg transition">
      <div className="h-12 w-12 rounded-lg bg-emerald-900 text-white grid place-items-center mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-emerald-950 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-emerald-900/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Services() {
  const items = [
    { icon: Sofa, title: "Arabic Majlis", desc: "Complete floor-seating majlis with premium fabrics, foam, carpets, and accents." },
    { icon: CurtainIcon, title: "Custom Curtains", desc: "Tailored drapery, sheers and blackout with precise measurements and premium hardware." },
    { icon: Ruler, title: "Made-to-Measure", desc: "On-site measurement, layout planning, and perfect fitting for every element." },
    { icon: Scissors, title: "Upholstery & Tailoring", desc: "Backrests, cushions, bolsters and reupholstery crafted by specialists." },
    { icon: Square, title: "Room Styling", desc: "Color palettes, textures and lighting to elevate bedrooms and living spaces." },
    { icon: Sparkles, title: "Installation & Finishing", desc: "Hassle-free delivery, installation and finishing with attention to detail." },
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <p className="uppercase tracking-widest text-emerald-700/70 text-xs mb-2">What we do</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">Tailored furnishing for modern Arabic spaces</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <ServiceCard key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
