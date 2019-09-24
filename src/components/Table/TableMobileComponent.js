import React, { Component } from 'react';
import propTypes from 'prop-types';

import { MOVIE_COLUMNS } from '../../utilities/constants';

class TableMobile extends Component {
  state = {
    data: this.props.data
  }
  render() {
    return (
      <div className="table-mobile">
          {   
            this.state.data.map(item => {
              return (
                <div key={item.name} className="table-mobile-planet-row">
                  <table className="planet-table">
                    <tbody>
                      <tr className="planet-table-row">
                        <td className="planet-column">{MOVIE_COLUMNS[0].name}</td>
                        <td id="planet-name" className="planet-column">{item.name}</td>
                      </tr>
                      <tr className="planet-table-row">
                        <td className="planet-column">{MOVIE_COLUMNS[1].name}</td>
                        <td className="planet-column">{item.rotationPeriod}</td>
                      </tr>
                      <tr className="planet-table-row">
                        <td className="planet-column">{MOVIE_COLUMNS[2].name}</td>
                        <td className="planet-column">{item.orbitalPeriod}</td>
                      </tr>
                      <tr className="planet-table-row">
                        <td className="planet-column">{MOVIE_COLUMNS[3].name}</td>
                        <td className="planet-column">{item.diameter}</td>
                      </tr>
                      <tr className="planet-table-row">
                        <td className="planet-column">{MOVIE_COLUMNS[4].name}</td>
                        <td className="planet-column">{item.climate}</td>
                      </tr>
                      <tr className="planet-table-row">
                        <td className="planet-column">{MOVIE_COLUMNS[5].name}</td>
                        <td className="planet-column">{item.surfaceWater}</td>
                      </tr>
                      <tr className="planet-table-row">
                        <td className="planet-column">{MOVIE_COLUMNS[6].name}</td>
                        <td className="planet-column">{item.population}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            })
          }
      </div>
    );
  }

  componentWillReceiveProps() {
    this.setState({
      data: this.props.data
    })
  }
}

TableMobile.propTypes = {
  data: propTypes.array.isRequired
}

export default TableMobile;