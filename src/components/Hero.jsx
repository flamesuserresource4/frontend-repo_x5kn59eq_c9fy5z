import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Instagram, Youtube, Music2, ExternalLink } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const glowStyle = {
    background: `radial-gradient(600px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(168,85,247,0.16), rgba(59,130,246,0.08) 40%, transparent 60%)`,
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Interactive gradient glow following cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={glowStyle}
      />

      {/* Header / logo */}
      <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-purple-500/80 to-blue-500/80 text-white shadow-[0_0_35px_rgba(124,58,237,0.55)] ring-1 ring-white/20 transition-transform duration-300 hover:scale-105">
          <span className="font-black tracking-widest">MF</span>
        </div>
        <span className="text-sm uppercase tracking-widest text-white/70">Mew Fang</span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="select-none text-5xl font-black tracking-tight text-white/90 sm:text-6xl md:text-7xl">
          <span className="inline-block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent [background-size:200%_auto] transition-[background-position] duration-700 hover:[background-position:right_center]">
            MEW FANG
          </span>
        </h1>
        <div className="mt-4 text-lg uppercase tracking-[0.4em] text-white/70">
          <span className="typewriter after:ml-2 after:inline-block after:w-1 after:animate-pulse after:bg-white/80">
            Musician • DJ • Live Sets
          </span>
        </div>

        {/* Actions / social */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#music"
            className="group rounded-full text-white/90 transition hover:text-white"
          >
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-white/10 group-hover:ring-white/20">
              <Music2 className="h-5 w-5" />
              <span className="text-sm">Listen</span>
            </div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group rounded-full text-white/80 transition hover:text-white"
          >
            <div className="rounded-full bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-white/10 group-hover:ring-white/20">
              <Instagram className="h-5 w-5" />
            </div>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="group rounded-full text-white/80 transition hover:text-white"
          >
            <div className="rounded-full bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-white/10 group-hover:ring-white/20">
              <Youtube className="h-5 w-5" />
            </div>
          </a>
          <a
            href="#booking"
            className="group rounded-full text-white/90 transition hover:text-white"
          >
            <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600/80 to-blue-600/80 px-4 py-2 text-white shadow-[0_0_25px_rgba(99,102,241,0.45)] ring-1 ring-white/10 backdrop-blur-sm transition group-hover:scale-105">
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm">Book</span>
            </div>
          </a>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/60">
          SCROLL
        </div>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))]" />

      {/* Local styles */}
      <style>{`
        .typewriter { position: relative; white-space: nowrap; overflow: hidden; display: inline-block; animation: typing 3.6s steps(24,end) 0.25s 1 both; }
        @keyframes typing { from { width: 0; } to { width: 100%; } }
      `}</style>
    </section>
  );
}
