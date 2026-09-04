import Image from 'next/image'

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/about.png"
            alt="Benjamin"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.4em] text-accent">
            Sobre
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance lg:text-6xl">
            Benjamin
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Sou Benjamin Jesus, ator e modelo com mais de quatro anos de carreira entre
              passarelas, sets e produções editoriais e audiovisuais.  Meu trabalho é transformar energia e carisma em cena, com naturalidade, expressão e profissionalismo diante das câmeras.
            </p>
            <p>
              Já colaborei com marcas como Brascol, Kookabukids, Mafessoni, Kiki e Mily, Keko Baby, Kafka Baby, Sun Place, Quimera Kids, Ami, Cookie, Little Moon, Look Jeans, Evelyn, Olisofi, Tango, Gharka, Djalma, Casulo de Anjo, Rihappy, Siiikids, Lojas Avenida, Delboni, Qualy, Bio Club, Lojas Eskala, Nicoboco, Taioca, Caedu, A Fábula, Green, Damemini, Puket, Malwee, Lojix, Tal Pai Tal Filho, Fratellos Gravata, Terra d'Almofada, Gallerist Edamami, MA Moda Africana e Puket, entre destaques em Feira Ópera 2024 e 2025, Kidstok 2025 e 2026, Artista Revelação 2025, Mister Nações e Edamami 2025, em projetos que unem técnica, carisma e diversão. Transito com naturalidade entre o comercial de TV, o editorial de moda infantil e o lifestyle, do estúdio à passarela kids.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <p className="font-display text-3xl font-bold lg:text-4xl">+4</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Anos de carreira
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold lg:text-4xl">40+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Campanhas
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold lg:text-4xl">12</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Produções
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
