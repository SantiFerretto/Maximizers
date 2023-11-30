export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <nav style={{display:"flex", justifyContent:"space-between", padding:"1em 1em", alignItems:"center", maxWidth:"1300px", margin:"0 auto", marginBottom:"5rem"}}>
          <div style={{height:"4rem"}}>
            <img src="maximizers-logo-png.png" style={{height:"90%"}} />
          </div>
          <div style={{padding:"0.75rem", backgroundColor:"#fe912a"}}>
            <button src="/https://forms.gle/2oF1WLP4aFLgP1jQ9" style={{height:"1.5em", backgroundColor:"#fe912a", fontWeight:"900", border:"none"}}>PROMOCIONATE</button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
