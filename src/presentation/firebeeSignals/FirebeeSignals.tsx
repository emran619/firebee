import React from 'react'
import { Card, Header } from './components'

import image1 from '../../images/card1.png'
import image2 from '../../images/card2.png'
import image3 from '../../images/card3.png'
import image4 from '../../images/card4.png'
import image5 from '../../images/card5.png'
import image6 from '../../images/card6.png'
import image7 from '../../images/card7.png'
import image8 from '../../images/card9.png'

function FirebeeSignals() {
  const dataCards = [
    {
      image: image1,
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.'
    },
    {
      image: image2,
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.'
    },
    {
      image: image3,
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.'
    },
    {
      image: image4,
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.'
    },
    {
      image: image5,
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.'
    },
    {
      image: image6,
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.'
    },
    {
      image: image7,
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.'
    },
    {
      image: image8,
      imageSize: 'small',
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.'
    }
  ]
  return (
    <div className='container mx-auto mt-custom-margin'>
      <Header />
      <div className='grid grid-cols-1 gap-8 mt-9 md:grid-cols-3 md:gap-14 md:mt-12'>
        {dataCards.map((dataCard: any, index: number) =>
          <Card key={index} dataCard={dataCard} />
        )}
      </div>
    </div>
  )
}

export default FirebeeSignals