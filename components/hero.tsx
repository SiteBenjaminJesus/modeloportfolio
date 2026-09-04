import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="topo" className="relative min-h-screen overflow-hidden bg-black flex flex-col justify-between md:block">
      
      {/* 1. IMAGEM DO COMPUTADOR (Mantém exatamente o comportamento original no PC) */}
      <div className="hidden md:block absolute inset-0 z-0">
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
      </div>

      {/* 2. SELO CLICK KIDS DO COMPUTADOR (Mantém a lateral no PC) */}
      <div className="hidden md:flex absolute right-[6%] top-[50%] -translate-y-1/2 z-20">
        <a href="/click-kids" className="flex flex-col items-center group">
          <img
            src="/clickkids_botao.png"
            alt="Click Kids Model"
            className="h-36 w-36 rounded-full object-cover border-2 border-white/20 group-hover:border-white/50 group-hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          />
          <span className="text-white font-bold tracking-[0.22em] text-xs mt-4">CLICK KIDS MODEL</span>
          <span className="text-white/60 text-[10px] tracking-[0.2em] mt-2">SEU CASTING A 1 CLICK →</span>
        </a>
      </div>

      {/* ------------------- VISUAL PARA CELULAR (EMPILHADO) ------------------- */}
      
      {/* IMAGEM NO CELULAR (Fica no topo, ajustada, sem sobrepor texto) */}
      <div className="block md:hidden relative w-full h-[40vh] pt-16 bg-gradient-to-b from-black to-black/80">
        <Image
          src="/images/hero.png"
          alt="Retrato editorial de Benjamin Jesus"
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* CONTEÚDO NO CELULAR E NO COMPUTADOR */}
      <div className="relative z-10 mx-auto flex min-h-0 md:min-h-screen max-w-7xl flex-col justify-end px-6 pb-12 pt-4 md:pb-24 lg:px-10">
        <p className="mb-3 font-display text-xs md:text-sm font-medium uppercase tracking-[0.35em] text-red-500/90">
          Ator · Modelo · Mogi das Cruzes - SP
        </p>
        
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight text-white">
          Benjamin
          <br />
          Jesus
        </h1>

        {/* SELO CLICK KIDS NO CELULAR (Abaixo do nome, limpo e sem poluição) */}
        <div className="flex md:hidden mt-6 mb-2 justify-start">
          <a href="/click-kids" className="flex items-center gap-3 bg-white/5 border border-white/10 p-2.5 rounded-2xl backdrop-blur-sm">
            <img
              src="/clickkids_botao.png"
              alt="Click Kids Model"
              className="h-12 w-12 rounded-full object-cover border border-white/20"
            />
            <div className="flex flex-col text-left">
              <span className="text-white font-bold tracking-[0.18em] text-[11px]">CLICK KIDS MODEL</span>
              <span className="text-white/60 tracking-[0.15em] text-[9px] mt-0.5">SEU CASTING A 1 CLICK →</span>
            </div>
          </a>
        </div>

        <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed text-muted-foreground">
          Carismático, fotogênico, comunicativo, alegre, disciplinado. Possuo boa desenvoltura em frente às câmeras, facilidade no set e em estúdio. Experiência em ensaios fotográficos, passarela, publicidade e audiovisual. Perfil versátil, com boa expressão facial e corporal, ideal para campanhas de moda, publicidade, e-commerce, catálogos e produções audiovisuais.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#galeria" className="bg-accent px-7 py-3 font-display text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90">
            Ver Portfólio
          </a>
          <a href="#contato" className="border border-border px-7 py-3 font-display text-xs md:text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-secondary">
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
