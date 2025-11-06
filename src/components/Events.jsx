import { useEffect, useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const sampleUpcoming = [
  { date: '2025-11-22', title: 'Neon Pulse', city: 'Berlin', venue: 'Keller', link: '#' },
  { date: '2025-12-05', title: 'Ultraviolet', city: 'London', venue: 'Vault', link: '#' },
];

const samplePast = [
  { date: '2025-10-01', title: 'Synthetic Nights', city: 'Paris', venue: 'Module' },
  { date: '2025-09-14', title: 'Echo Grid', city: 'Amsterdam', venue: 'Dock' },
];

export default function Events() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const onScroll = () => setDepth(window.scrollY / (document.body.scrollHeight || 1));
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bgStyle = {
    background: `linear-gradient(180deg, rgba(124,58,237,${0.06 + depth * 0.1}), rgba(59,130,246,${0.06 + depth * 0.1}))`,
  };

  return (
    <section id="events" className="relative z-10 px-6 py-24 text-white/90">
      <div className="absolute inset-0 pointer-events-none" style={bgStyle} />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-wide">Events</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <Calendar className="h-5 w-5" /> Upcoming
            </h3>
            <ul className="space-y-4">
              {sampleUpcoming.map((e) => (
                <li key={e.title} className="group flex items-center justify-between rounded-lg border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:bg-black/10">
                  <div>
                    <div className="text-white">{e.title}</div>
                    <div className="text-xs text-white/70">
                      {new Date(e.date).toLocaleDateString()} • <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{e.city} — {e.venue}</span>
                    </div>
                  </div>
                  <a href={e.link} className="hidden sm:inline-flex items-center gap-1 text-xs text-sky-300 group-hover:text-white">
                    Details <ArrowRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="mb-4 text-lg font-semibold text-white">Past</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {samplePast.map((e) => (
                <li key={e.title} className="rounded-lg border border-white/10 bg-black/20 p-4 text-sm text-white/80 transition hover:border-white/20 hover:bg-black/10">
                  <div className="text-white">{e.title}</div>
                  <div className="text-xs text-white/60">{new Date(e.date).toLocaleDateString()}</div>
                  <div className="text-xs text-white/60">{e.city} — {e.venue}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking CTA */}
        <div id="booking" className="mt-12 rounded-xl border border-white/10 bg-gradient-to-r from-purple-600/30 to-blue-600/30 p-6 text-center text-white shadow-[0_0_25px_rgba(99,102,241,0.25)]">
          <p className="mb-4 text-white/90">For bookings and collaborations</p>
          <a href="mailto:bookings@mewfang.com" className="inline-block rounded-full bg-white/10 px-6 py-2 text-sm ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20">
            bookings@mewfang.com
          </a>
        </div>
      </div>
    </section>
  );
}
