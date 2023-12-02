export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:"#448480"}}>
        <nav style={{display:"flex", justifyContent:"space-between", padding:"1em 1em", alignItems:"center", maxWidth:"1300px", margin:"0 auto", marginBottom:"5rem"}}>
          <div style={{height:"4rem"}}>
            <img src="maximizers-logo-png.png" style={{height:"90%"}} />
          </div>
          <div style={{padding:"0.75rem", backgroundColor:"#fe912a", borderRadius:"10px"}}>
            <a href="https://forms.gle/EqirDqrE2Pcb62Vk7" style={{color:"black", textDecoration: "none", height:"1.5em", fontWeight:"900", border:"none"}}>
              PROMOCIONATE
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
