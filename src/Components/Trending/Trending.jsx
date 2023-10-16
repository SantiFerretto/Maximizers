import './Trending.css'

function Trending (){
    return (
        <section style={{padding: "0.5rem 2rem", marginBottom:"2rem"}}>
        <div style={{display:"flex", gap:"0.6rem", marginBottom:"1em"}}>
                <img src="trending.png"/>
                <h2>Trending</h2>
            </div>
        <section className="trending-section">
        <a href="/papa" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="img.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Fluasasastso</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
            <a href="/papa" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="img.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Fluasasastso</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
            <a href="/papa" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="img.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Fluasasastso</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
            <a href="/papa" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="img.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Fluasasastso</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
        </section>
        </section>
    )
}



export {Trending}