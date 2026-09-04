"use client"

const videos = [
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video0000001.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video0000002.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video0000003.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video0000004.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video0000005.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video0000006.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video0000007.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video0000008.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video00000011.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video00000012.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video00000013.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video00000014.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video00000015.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video00000016.mp4",
  "https://xlhz4s0k2sch705v.public.blob.vercel-storage.com/Video00000017.mp4",
]

export function Reel() {
  return (
    <section id="reel" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-600 text-xs tracking-[0.3em] mb-4 font-bold">REEL</p>
        <h2 className="text-white text-4xl md:text-6xl font-black mb-10 leading-[0.9]">EM<br/>MOVIMENTO</h2>

        {/* GRADE BONITA - 2 no celular, 3 no PC, 5 no telão */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {videos.map((src, i) => (
            <div key={i} className="group relative aspect-[9/16] bg-zinc-900 rounded- overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all hover:scale-[1.02]">
              <video
                src={src}
                muted
                loop
                playsInline
                preload="metadata"
                controls
                className="w-full h-full object-cover"
                onMouseEnter={e => e.currentTarget.play()}
                onMouseLeave={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur px-2 py-1 rounded-full text- text-white font-mono">
                {String(i+1).padStart(2,'0')}
              </div>
            </div>
          ))}
        </div>

        <p className="text-zinc-500 text-center text-xs mt-8 font-mono tracking-widest">15 VÍDEOS • PASSE O MOUSE PARA TOCAR</p>
      </div>
    </section>
  )
}

export default Reel
