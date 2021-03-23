import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, nextFour, eatSushi }) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
         sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/>)
        }
        <MoreButton nextFour={nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer