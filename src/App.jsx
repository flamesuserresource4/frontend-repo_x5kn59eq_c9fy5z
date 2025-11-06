import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Events from './components/Events';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient backdrop that also reacts to scroll depth */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_800px_at_20%_10%,rgba(124,58,237,0.18),transparent_60%),radial-gradient(1000px_700px_at_80%_40%,rgba(59,130,246,0.14),transparent_60%)]" />

      <Hero />
      <About />
      <Music />
      <Events />

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Mew Fang — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
