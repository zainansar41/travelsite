import React from 'react'
import './trip.css'

import TripData from './TripData'
import img11 from '../../Assests/img11.jpg'
import img12 from '../../Assests/img12.jpg'
import img13 from '../../Assests/img13.jpg'
export default function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations sing google maps</p>
        <div className="trip-card">
            <TripData image= {img11} heading={"Trip to Dubai"} text ={"Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks"}/>
            <TripData image= {img12} heading={"Trip to Turkey"} text ={"Turkey, officially the Republic of Türkiye, is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a small portion on the Balkan Peninsula in Southeast Europe."}/>
            <TripData image= {img13} heading={"Trip to Italy"} text ={"Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s \"David \"and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital."}/>
        </div>
    </div>
  )
}
