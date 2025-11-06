export default function Music() {
  return (
    <section id="music" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-8 text-center text-2xl font-semibold tracking-wide text-white/90">Music</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Spotify Embed */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <iframe
            title="Spotify Player"
            className="h-[380px] w-full rounded-lg"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6J5NfMJS675?utm_source=generator"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
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
