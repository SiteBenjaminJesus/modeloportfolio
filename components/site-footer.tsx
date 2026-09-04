export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-10">
        <a href="#topo" className="font-display text-lg font-bold uppercase tracking-[0.2em]">
          BENJAMIN<span className="text-accent">.</span>
        </a>
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          © {new Date().getFullYear()} Grinch · Todos os direitos reservados - Site desenvolvido por www.clickkidsmodel.com (11)96515-5173
        </p>
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
           Mogi das Cruzes · SP
        </p>
      </div>
    </footer>
  )
}
