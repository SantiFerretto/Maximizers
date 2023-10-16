import './globals.css'
import { News } from '@/Components/News/News.jsx'
import {Trending} from '../Components/Trending/Trending.jsx'
import { Startups } from '@/Components/Startups/Startups.jsx'


export default function Home() {
  return (

    <main style={{maxWidth:"1300px", margin:"0 auto"}}>
    <Trending/>
    <News/>
    <Startups/>
    </main>
  )
}
