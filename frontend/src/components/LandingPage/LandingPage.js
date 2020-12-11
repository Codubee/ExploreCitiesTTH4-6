import React from 'react'
import Explanation from './Explanation/Explanation'
import Tools from './Tools/Tools'
import Features from './Features/Features'
import Team from './Team/Team'

function LandingPage(){
    return(
      <>
        <Explanation/>
        <Features/>
        <Team/>
        <Tools/>
      </>
    )
}

export default LandingPage;