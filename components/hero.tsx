import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="topo" className="relative min-h-screen overflow-hidden bg-black">
      <Image
        src="/images/hero.png"
        alt="Retrato editorial de Benjamin Jesus"
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />

      {/* BOTÃO CLICK KIDS - SÓ NO COMPUTADOR - LATERAL PRETA SEM QUADRADO */}
      <div className="hidden md:flex absolute right-[6%] top-[50%] -translate-y-1/2 z-20">
        <a href="/click-kids" className="flex flex-col items-center group">
          <img
            src="/clickkids_botao.png"
            alt="Click Kids Model"
            className="h-36 w-36 rounded-full object-cover border-2 border-white/20 group-hover:border-white/50 group-hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          />
          <span className="text-white font-bold tracking-[0.22em] text- mt-4">CLICK KIDS MODEL</span>
          <span className="text-white/60 text- tracking-[0.2em] mt-2">SEU CASTING A 1 CLICK →</span>
        </a>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 lg:px-10 lg:pb-24">
        <p className="mb-5 font-display text- md:text- font-medium uppercase tracking-[0.35em] text-red-500/90">
          Ator · Modelo · Mogi das Cruzes - SP
        </p>
        <h1 className="font-display text-6xl font-bold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl lg:text-">
          Benjamin
          <br />
          Jesus
        </h1>

        {/* BOTÃO CLICK KIDS - SÓ NO CELULAR - ABAIXO DO NOME, SEM SOBREPOR */}
        <div className="flex md:hidden mt-8 mb-2 justify-start">
          <a href="/click-kids" className="flex flex-col items-center group">
            <img
              src="/clickkids_botao.png"
              alt="Click Kids Model"
              className="h-28 w-28 rounded-full object-cover border-2 border-white/20 group-hover:border-white/40 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            />
            <span className="text-white font-bold tracking-[0.22em] text- mt-3">CLICK KIDS MODEL</span>
            <span className="text-white/60 text- tracking-[0.2em] mt-1.5">SEU CASTING A 1 CLICK →</span>
          </a>
        </div>

        <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Carismático, fotogênico, comunicativo, alegre, disciplinado. Possuo boa desenvoltura em frente às câmeras, facilidade no set e em estúdio. Experiência em ensaios fotográficos, passarela, publicidade e audiovisual. Perfil versátil, com boa expressão facial e corporal, ideal para campanhas de moda, publicidade,e-commerce, catálogos e produções audiovisuais.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#galeria" className="bg-accent px-7 py-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90">
            Ver Portfólio
          </a>
          <a href="#contato" className="border border-border px-7 py-3 font-display text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-secondary">
            Contato
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-2 text-muted-foreground lg:right-10 lg:flex">
        <ArrowDown className="h-4 w-4 animate-bounce" />
        <span className="font-display text-xs uppercase tracking-[0.3em]">Role</span>
      </div>
    </section>
  )
}
