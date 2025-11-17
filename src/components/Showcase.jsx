export default function Showcase() {
  const images = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582582429416-1f6a16a118dd?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616594039964-ae9021f47e76?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop"
  ];

  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <p className="uppercase tracking-widest text-emerald-700/70 text-xs mb-2">Our work</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">Crafted for comfort and grandeur</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl">
              <img src={src} alt="Showcase" className="h-44 sm:h-56 w-full object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
