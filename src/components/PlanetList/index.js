import React from 'react'
import {Planet} from '../'

const PlanetList = ({planets, compare}) =>
  <div>
    <div className="row mt-3">
        {planets.map(planet =>
          <Planet key={planet.id} planet={planet} compare={compare} />
        )}
    </div>
  </div>

export default PlanetList
