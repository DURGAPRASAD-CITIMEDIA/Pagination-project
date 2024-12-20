import React from 'react'
import { useState } from 'react'
import HeadComponent from './HeadComponent'
import BannerOne from '../public/men/banner-1.gif'
import Bannertwo from '../public/women/banner-5.gif'
import Bannerthree from '../public/kids/banner-7.webp'
import Bannerfore from '../public/kids/banner-8.gif'

import {Gents} from './data'
import {Womens} from './data'
import {Kids} from './data'
import MenSection from './MenSection'
import WomensSection from './WomensSection'
import KidsSection from './KidsSection'
const App = () => {
  const [mens,setMens]=useState(Gents)
  const [womens,setWomens]=useState(Womens)
  const [kids,setKids]=useState(Kids)
  return (
    <div>
     
     <HeadComponent />
     <div className="men-banner-1">
      <img src={BannerOne} style={{width:"100%",height:"200px",marginTop:"10px",marginBottom:"10px"}} />
     </div>
     <MenSection men={mens}/>
     <div className="men-banner-1">
      <img src={Bannertwo} style={{width:"100%",height:"200px",marginTop:"10px",marginBottom:"10px"}} />
     </div>
     <WomensSection women={womens}/>
     <div className="men-banner-1">
      <img src={Bannerthree} style={{width:"100%",height:"200px",marginTop:"10px",marginBottom:"10px"}} />
     </div>
     <KidsSection kid={kids}/>
     <div className="men-banner-1">
      <img src={Bannerfore} style={{width:"100%",height:"200px",marginTop:"10px",marginBottom:"10px"}} />
     </div>
    </div>
  )
}

export default App
