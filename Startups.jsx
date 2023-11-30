'use client'

import { redirect } from 'next/navigation'

function Startups (){

    const hanldeclick = (papa)=>{
        redirect(`/sas`)
    }

    return (
        <section style={{padding: "0.5rem 2rem", marginBottom:"2rem"}}>
            <div style={{display:"flex", gap:"0.6rem", marginBottom:"1em"}}>
                <img src="startups.png"/>
                <h2>Startups</h2>
            </div>
            <section style={{marginBottom:"2rem"}}>
                <div style={{display:"flex", width:"100%", gap:"1em", height:"auto", marginBottom:"2rem"}}>
                    <a href="https://mybraiin.framer.website" style={{width:"50%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="braiin_logo2.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Braiin</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://quokka-software.vercel.app/es/wearmeleon" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="quokka.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>WearMeleon</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://jimpal.vercel.app/" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="jp_logo.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>JimPal</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div style={{display:"flex", width:"100%", gap:"1em", height:"auto", marginBottom:"2rem"}}>
                    <a href="http://random-bites.vercel.app" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="random_bites.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Random Bites</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://live2gether.softr.app/" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="live2gether.png.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Live2gether</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://fixit-flax.vercel.app/" style={{width:"50%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="logo_fixit.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Fix it</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div style={{display:"flex", width:"100%", gap:"1em", height:"auto", marginBottom:"2rem"}}>
                    <a href="https://www.linkedin.com/company/innuko/about/" style={{width:"25%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="numble.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Numble</h3>
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
                                <h3>Prototipo</h3>
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
                                <h3>Prototipo</h3>
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
                                <h3>Prototipo</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
                </div>

            </section>
        </section>
    )
}



export { Startups }
