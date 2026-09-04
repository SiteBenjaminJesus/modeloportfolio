"use client"
import { SiteNav } from "@/components/site-nav"
import { useState } from "react"

export default function FotosPage() {
  const fotos = [
    "/fotos/Captura de tela 2026-09-01 164954.png",
    "/fotos/Captura de tela 2026-09-01 173616.png",
    "/fotos/Captura de tela 2026-09-01 173714.png",
    "/fotos/Captura de tela 2026-09-01 173739.png",
    "/fotos/Captura de tela 2026-09-01 173752.png",
    "/fotos/Captura de tela 2026-09-01 173826.png",
    "/fotos/Captura de tela 2026-09-01 173837.png",
    "/fotos/Captura de tela 2026-09-01 173850.png",
    "/fotos/Captura de tela 2026-09-01 173905.png",
    "/fotos/Captura de tela 2026-09-01 173920.png",
    "/fotos/Captura de tela 2026-09-01 173931.png",
    "/fotos/Captura de tela 2026-09-01 173946.png",
    "/fotos/Captura de tela 2026-09-01 174008.png",
    "/fotos/Captura de tela 2026-09-01 174023.png",
    "/fotos/Captura de tela 2026-09-01 174106.png",
    "/fotos/Captura de tela 2026-09-01 174120.png",
    "/fotos/Captura de tela 2026-09-01 174134.png",
    "/fotos/Captura de tela 2026-09-01 174208.png",
    "/fotos/Captura de tela 2026-09-01 174220.png",
    "/fotos/Captura de tela 2026-09-01 174233.png",
    "/fotos/Captura de tela 2026-09-01 174248.png",
    "/fotos/Captura de tela 2026-09-01 174302.png",
    "/fotos/Captura de tela 2026-09-01 174315.png",
    "/fotos/Captura de tela 2026-09-01 174326.png",
    "/fotos/Captura de tela 2026-09-01 174338.png",
    "/fotos/Captura de tela 2026-09-01 174401.png",
    "/fotos/Captura de tela 2026-09-01 174417.png",
    "/fotos/Captura de tela 2026-09-01 174448.png",
    "/fotos/Captura de tela 2026-09-01 174507.png",
    "/fotos/Captura de tela 2026-09-01 174553.png",
    "/fotos/Captura de tela 2026-09-01 174607.png",
    "/fotos/Captura de tela 2026-09-01 174700.png",
    "/fotos/Captura de tela 2026-09-01 174729.png",
    "/fotos/Captura de tela 2026-09-01 174750.png",
    "/fotos/Captura de tela 2026-09-01 174806.png",
    "/fotos/Captura de tela 2026-09-01 174819.png",
    "/fotos/Captura de tela 2026-09-01 174854.png",
    "/fotos/Captura de tela 2026-09-01 174909.png",
    "/fotos/foto00000001.jpeg",
    "/fotos/foto00000002.jpeg",
    "/fotos/foto00000003.jpeg",
    "/fotos/foto00000004.jpeg",
    "/fotos/foto00000005.jpeg",
    "/fotos/foto00000006.jpeg",
    "/fotos/foto00000007.jpeg",
    "/fotos/foto00000008.jpeg",
    "/fotos/foto00000010.jpeg",
    "/fotos/foto00000011.jpeg",
    "/fotos/foto00000012.jpeg",
    "/fotos/foto00000013.jpeg",
    "/fotos/foto00000014.jpeg",
    "/fotos/foto00000015.jpeg",
    "/fotos/foto00000016.jpeg",
    "/fotos/foto00000017.jpeg",
    "/fotos/foto00000018.jpeg",
    "/fotos/foto00000019.jpeg",
    "/fotos/foto00000020.jpeg",
    "/fotos/foto00000021.jpeg",
    "/fotos/foto00000022.jpeg",
    "/fotos/foto00000023.jpeg",
    "/fotos/foto00000024.jpeg",
  ];

  const [sel, setSel] = useState<string | null>(null)

  return (
    <>
      <SiteNav />
      <div style={{background:'black', minHeight:'100vh', color:'white', padding:'90px 15px 40px'}}>
        <h1 style={{fontSize:'42px', fontWeight:'bold', textAlign:'center', marginBottom:'10px'}}>FOTOS</h1>
        <div style={{textAlign:'center', marginBottom:'30px'}}>
          <a href="/" style={{color:'#aaa', textDecoration:'underline', fontSize:'14px', letterSpacing:'2px'}}>← VOLTAR AO INÍCIO</a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'12px', maxWidth:'1400px', margin:'0 auto'}}>
          {fotos.map((src, i) => (
            <img 
              key={i} 
              src={encodeURI(src)} 
              alt=""
              onClick={() => setSel(src)}
              style={{width:'100%', height:'380px', objectFit:'cover', background:'#111', cursor:'zoom-in'}}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
          ))}
        </div>
      </div>
      {sel && (
        <div onClick={() => setSel(null)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.92)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999, padding:'20px', cursor:'zoom-out'}}>
          <img src={encodeURI(sel)} style={{maxWidth:'95%', maxHeight:'95%', objectFit:'contain'}} alt="" />
          <span style={{position:'absolute', top:'20px', right:'25px', color:'white', fontSize:'40px'}}>×</span>
        </div>
      )}
    </>
  )
}
