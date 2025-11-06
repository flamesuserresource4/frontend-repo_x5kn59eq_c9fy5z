export default function Music() {
  return (
    <section id="music" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-8 text-center text-2xl font-semibold tracking-wide text-white/90">Music</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Spotify Embed - Mew Fang artist profile */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <iframe
            title="Spotify Artist: Mew Fang"
            className="h-[380px] w-full rounded-lg"
            src="https://open.spotify.com/embed/artist/2gdNAVJj0BZlegUZry7PZ6"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <div className="mt-3 text-center">
            <a
              href="https://open.spotify.com/intl-it/artist/2gdNAVJj0BZlegUZry7PZ6#login"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-violet-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
            >
              Open on Spotify
            </a>
          </div>
        </div>
        {/* SoundCloud Embed */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <iframe
            title="SoundCloud Player"
            className="h-[380px] w-full rounded-lg"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/209262931&color=%236b21a8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </div>
      </div>
    </section>
  );
}
