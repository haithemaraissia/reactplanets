import React from 'react'
import './styles.css'

const Planet = ({planet, compare}) =>
    <div key={planet.id} className="col-sm-6 col-md-3">
        <div className={"planet " + (planet.compare ? "compare" : "")} >
            <img src={planet.image} alt={planet.name} />
            <div className="image_overlay"></div>
            <div className="view_details" onClick={() => compare(planet)}>
              {planet.compare ? "Remove" : "Compare"}
            </div>
            <div className="stats">
                <div className="stats-container">
                    <span className="planet_price">{planet.mass}</span>
                    <span className="planet_name">{planet.name}</span>
                    <p>Moons: {planet.moons}</p>
                </div>
            </div>
        </div>
    </div>

export default Planet
