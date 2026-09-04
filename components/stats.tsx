const measurements = [
  { label: 'Altura', value: '1,17', unit: 'm' },
  { label: 'Busto', value: '62', unit: 'cm' },
  { label: 'Cintura', value: '68', unit: 'cm' },
  { label: 'Quadril', value: '62', unit: 'cm' },
  { label: 'Manequim', value: '06', unit: 'BR' },
  { label: 'Calçado', value: '28', unit: 'BR' },
]
const attributes = [
  { label: 'Cabelo', value: 'Castanho escuro' },
  { label: 'Olhos', value: 'Castanhos' },
  { label: 'Base', value: 'Mogi das Cruzes - SP' },
  { label: 'Base', value: 'Disponível p/ viagens' },
]

export function Stats() {
  return (
    <section id="medidas" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14">
          <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.4em] text-accent">
            Ficha técnica
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight lg:text-6xl">
            Medidas & atributos
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {measurements.map((m) => (
            <div key={m.label} className="bg-background p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {m.label}
              </p>
              <p className="mt-3 font-display text-4xl font-bold tracking-tight lg:text-5xl">
                {m.value}
                <span className="ml-1 text-lg text-accent">{m.unit}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {attributes.map((a) => (
            <div key={a.label} className="bg-background p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {a.label}
              </p>
              <p className="mt-2 font-medium leading-snug">{a.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
