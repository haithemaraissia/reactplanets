import React from 'react'
import './styles.css'

const Compare = ({planets}) =>
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th></th>
            {planets.map(planet =>
              <th key={planet.id}>
                {planet.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <th scope="row" className="text-center">Mass (1024kg)</th>
            {planets.map(planet =>
              <td key={planet.id} className="text-center">{planet.mass}</td>
            )}
          </tr>
          <tr className="colors">
            <th scope="row" className="text-center">Colors</th>
            {planets.map(planet =>
              <td key={planet.id}>
                {planet.colors.map((color, index) =>
                  <span key={index} className={"bg-" + color}></span>
                )}
              </td>
            )}
          </tr>
          <tr>
            <th scope="row" className="text-center">Temperature (C)</th>
            {planets.map(planet =>
              <td key={planet.id} className="text-center">{planet.temperature}
              </td>
            )}
          </tr>
          <tr>
            <th scope="row" className="text-center">Moons</th>
            {planets.map(planet =>
              <td key={planet.id} className="text-center">{planet.moons}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>

export default Compare
