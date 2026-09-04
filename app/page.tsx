import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Gallery } from '@/components/gallery'
import { Reel } from '@/components/reel'
import { Stats } from '@/components/stats'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Reel />
        <Stats />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
