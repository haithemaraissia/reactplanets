import * as types from '../constants/types'

export const getPlanets = () =>
  dispatch =>
    fetch(`planets.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PLANETS,
          payload: response.planets
        })
      })

export const compare = planet => ({
    type: types.COMPARE_PLANET,
    planet
  })
