import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, PlanetList} from '../../components'
import * as planetActions from '../../actions/planet'
import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getPlanets()
  }

  render() {
    const {planets, actions} = this.props
    const comparePlanets = planets.filter(planet => planet.compare)

    return (
      <div className="home mt-5">
        <PlanetList planets={planets} compare={actions.compare}/>
        {comparePlanets.length >= 2 &&
          <Compare planets={comparePlanets}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    planets: state.planet.planets
  }),
  dispatch => ({
    actions: bindActionCreators(planetActions, dispatch)
  })
)(Home)
