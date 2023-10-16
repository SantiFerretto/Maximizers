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
                            <img className="img" src="img.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Flutso</h3>
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
                </div>
                <div style={{display:"flex", width:"100%", gap:"1em", height:"auto", marginBottom:"2rem"}}>
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
                    <a href="/papa" style={{width:"50%", height:"auto", textDecoration:"none"}}>
                        <div style={{ height:"12rem",overflow:"hidden"}}>
                            <img className="img" src="img.png" style={{height:"100%"}}/>
                        </div>
                        <div className='card-info'>
                            <img src="in.png"/>
                            <div className='card-detail'>
                                <h3>Flutso</h3>
                                <p>Available for Work</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div style={{display:"flex", width:"100%", gap:"1em", height:"auto", marginBottom:"2rem"}}>
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
                </div>

            </section>
        </section>
    )
}



export { Startups }
