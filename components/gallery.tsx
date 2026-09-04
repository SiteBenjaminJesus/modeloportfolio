"use client"
import Image from 'next/image'
import { useState } from 'react'

const photos = [
  { src: '/images/gallery-1.png', title: 'Tailoring', tag: 'Editorial' },
  { src: '/images/gallery-2.png', title: 'Noir', tag: 'Beauty' },
  { src: '/images/gallery-3.png', title: 'Couture', tag: 'Fashion' },
  { src: '/images/gallery-4.png', title: 'Golden Hour', tag: 'Street' },
  { src: '/images/gallery-5.png', title: 'Naturel', tag: 'Studio' },
  { src: '/images/gallery-6.png', title: 'Avant-Garde', tag: 'Editorial' },
]

export function Gallery() {
  const [sel, setSel] = useState<string | null>(null)

  return (
    <section id="galeria" className="border-t border-border py-24 lg:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.4em] text-accent">Portfólio</p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight lg:text-6xl text-white">Trabalhos selecionados</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Uma seleção de editoriais, campanhas e ensaios que definem minha assinatura visual.</p>
        </div>

        {/* AGORA SEM BURACO - 6 fotos = 2 linhas de 3 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <figure key={p.src} onClick={() => setSel(p.src)} className="group relative overflow-hidden bg-[#111] cursor-zoom-in aspect-[3/4]">
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-accent">{p.tag}</span>
                <p className="font-display text-xl font-bold uppercase text-white">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {sel && (
        <div onClick={() => setSel(null)} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 cursor-zoom-out">
          <img src={sel} className="max-h- max-w- object-contain" alt="" />
        </div>
      )}
    </section>
  )
}
