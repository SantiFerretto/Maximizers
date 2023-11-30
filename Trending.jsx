import './Trending.css'

function Trending (){
    return (
        <section style={{padding: "0.5rem 2rem", marginBottom:"2rem"}}>
        <div style={{display:"flex", gap:"0.6rem", marginBottom:"1em"}}>
                <img src="Trending.png"/>
                <h2>Trending</h2>
            </div>
        <section className="trending-section">
        <a href="https://jimpal.vercel.app/" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="jp_funcionalidad.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>JimPal</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
            <a href="https://mybraiin.framer.website" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="braiin_funcionalidad.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Braiin</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
            <a href="http://random-bites.vercel.app" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="random_bites_funcionalidad.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Random Bites</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
            <a href="https://fixit-flax.vercel.app/" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="fixitflax.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Fix it</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
        </section>
        </section>
    )
}



export {Trending}