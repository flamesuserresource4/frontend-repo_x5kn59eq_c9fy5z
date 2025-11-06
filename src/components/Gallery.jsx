import { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464375117522-1311d6a5b81a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-8 text-center text-2xl font-semibold tracking-wide text-white/90">Gallery</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(src)}
            className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/5"
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-600/0 via-blue-600/0 to-fuchsia-600/10 opacity-0 transition group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        >
          <img src={active} alt="active" className="max-h-[85vh] w-auto rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
