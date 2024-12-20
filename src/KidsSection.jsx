import React from 'react'

const KidsSection = (props) => {
    const {title,image1,image2,image3,image4,image5}=props.kid

  return (
    <div>

    <div className='mens-title'>
        <h2 style={{marginLeft:"60px",marginBottom:"10px"}}>{title}</h2>
      
    </div>
    <div className="mens-image" style={{display:"flex",flexWrap:"wrap",columnGap:"10px"}}>
        <img src={image1} alt={title} style={{width:"220px",height:"250px",border:"1px solid black",flex:"1"}}/>
        <img src={image2} alt={title} style={{width:"220px",height:"250px",border:"1px solid black",flex:"1"}}/>

        <img src={image3} alt={title} style={{width:"220px",height:"250px",border:"1px solid black",flex:"1"}}/>

        <img src={image4} alt={title} style={{width:"220px",height:"250px",border:"1px solid black",flex:"1"}}/>

        <img src={image5} alt={title} style={{width:"220px",height:"250px",border:"1px solid black",flex:"1"}}/>

    </div>
    </div>
  )
}

export default KidsSection
