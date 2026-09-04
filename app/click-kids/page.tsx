export default function Page() {
  return (
    <main style={{background:'#000', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'80px 20px'}}>
      <img src="/clickkids_botao.png" alt="Click Kids" style={{width:'140px', height:'140px', borderRadius:'9999px', objectFit:'cover', border:'2px solid rgba(255,255,255,0.2)', marginBottom:'30px'}} />
      <h1 style={{color:'white', letterSpacing:'4px', fontWeight:'bold'}}>CLICK KIDS MODEL</h1>
      <p style={{color:'rgba(255,255,255,0.5)', fontSize:'11px', letterSpacing:'3px', margin:'8px 0 40px'}}>SEU CASTING A 1 CLICK</p>
      <div style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'20px', padding:'30px', maxWidth:'420px', width:'100%', textAlign:'center'}}>
        <p style={{color:'rgba(255,255,255,0.4)', fontSize:'10px'}}>INSTAGRAM</p>
        <a href="https://instagram.com/clickkidsmodel" target="_blank" style={{color:'white', fontWeight:'bold', fontSize:'18px', textDecoration:'none', display:'block', marginBottom:'20px'}}>@clickkidsmodel</a>
        <p style={{color:'rgba(255,255,255,0.4)', fontSize:'10px'}}>SITE</p>
        <a href="https://www.clickkidsmodel.com" target="_blank" style={{color:'white', textDecoration:'none', display:'block', marginBottom:'20px'}}>www.clickkidsmodel.com</a>
        <p style={{color:'rgba(255,255,255,0.4)', fontSize:'10px'}}>WHATSAPP</p>
        <a href="https://wa.me/5511965155173" target="_blank" style={{color:'#25D366', fontWeight:'bold', fontSize:'18px', textDecoration:'none', display:'block', marginBottom:'30px'}}>(11) 96515-5173</a>
        <a href="https://wa.me/5511965155173" target="_blank" style={{display:'block', background:'white', color:'black', padding:'14px', borderRadius:'9999px', fontWeight:'bold', textDecoration:'none', fontSize:'12px'}}>FALAR NO WHATSAPP</a>
      </div>
      <a href="/" style={{marginTop:'40px', color:'#666', fontSize:'11px', letterSpacing:'2px', textDecoration:'none'}}>← VOLTAR AO SITE DO BENJAMIN</a>
    </main>
  )
}
