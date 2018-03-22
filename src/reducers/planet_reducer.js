import * as types from '../constants/types'

const INITIAL_STATE = {
  planets: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PLANETS:
      return {
        ...state, planets: action.payload.map(planet =>
          ({...planet, compare: false})
        )
      }
    case types.COMPARE_PLANET:
      return {
        ...state, planets: state.planets.map(planet =>
          planet.id === action.planet.id ?
            ({...planet, compare: !planet.compare}) :
            planet
        )
      }
    default:
      return state
  }
}
