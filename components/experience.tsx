const filmography = [
  { year: '2024', title: 'Maré Alta', role: 'Protagonista', type: 'Longa-metragem' },
  { year: '2023', title: 'Noite Neon', role: 'Modelo principal', type: 'Fashion Film' },
  { year: '2023', title: 'Aurora Perfumes', role: 'Rosto da campanha', type: 'Comercial' },
  { year: '2022', title: 'Entre Silêncios', role: 'Coadjuvante', type: 'Série · streaming' },
  { year: '2021', title: 'Casa Verão', role: 'Editorial de capa', type: 'Revista' },
]

const skills = [
  'Interpretação para câmera',
  'Passarela & alta-costura',
  'Dança contemporânea',
  'Direção de movimento',
  'Improvisação',
  'Expressão corporal',
]

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14">
          <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.4em] text-accent">
            Currículo
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight lg:text-6xl">
            Experiência
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="mb-6 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Filmografia & campanhas
            </h3>
            <ul>
              {filmography.map((f) => (
                <li
                  key={f.title}
                  className="group grid grid-cols-[auto_1fr] items-baseline gap-4 border-t border-border py-5 transition-colors last:border-b hover:bg-background/50 sm:grid-cols-[80px_1fr_auto] sm:gap-6"
                >
                  <span className="font-display text-sm font-bold text-accent">{f.year}</span>
                  <span>
                    <span className="font-display text-lg font-bold uppercase tracking-tight">
                      {f.title}
                    </span>
                    <span className="block text-sm text-muted-foreground sm:hidden">
                      {f.role} · {f.type}
                    </span>
                    <span className="hidden text-sm text-muted-foreground sm:block">
                      {f.role}
                    </span>
                  </span>
                  <span className="hidden text-right text-xs uppercase tracking-[0.15em] text-muted-foreground sm:block">
                    {f.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Habilidades
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="border border-border px-4 py-2 text-sm text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="mb-6 mt-12 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Formação
            </h3>
            <div className="space-y-4">
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold uppercase tracking-tight">
                  Escola de Atores Célia Helena
                </p>
                <p className="text-sm text-muted-foreground">Formação em interpretação · 2018</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold uppercase tracking-tight">
                  Workshop internacional de moda
                </p>
                <p className="text-sm text-muted-foreground">Milão · 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
