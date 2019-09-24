import React, { Component } from 'react';
import propTypes from 'prop-types';

import sortIcon from '../../assets/SORT.svg?inline';
import sortUpIcon from '../../assets/SORT_UP.svg?inline';
import sortDownIcon from '../../assets/SORT_DOWN.svg?inline';

import InlineSVG from 'react-svg-inline';
import { MOVIE_COLUMNS } from '../../utilities/constants';

class Table extends Component {
  state = {
    data: this.props.data,
    sortIcons:{
      initial: sortIcon,
      ascending: sortUpIcon,
      descending: sortDownIcon,
    },
    sort: {
      key: '',
      order: 'initial',
    }
  }
  render() {
    return (
      <table className="table">
        <thead className="table-header">
          <tr className="table-row">
            {
              MOVIE_COLUMNS.map((column) => {
                const {sort, sortIcons,} = this.state;
                let thClassName = column.name === 'Planet Name' ? 'table-main-column-header' : 'table-column-header'
                let sortIcon = sort.key === column.accessor ? sortIcons[sort.order] : sortIcons.initial
                return (
                  <th
                    key={column.name}
                    className={thClassName}                    
                  >
                    <p className ="table-column-name">{column.name}</p>
                    <InlineSVG
                      svg={sortIcon}
                      className="table-sort-button"                      
                      onClick={() => this.sortTable(column.accessor)}
                    />
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            this.state.data.map((item) => {
              return (
                <tr key={item.name} className="table-row">
                  <td className="table-main-column">{item.name}</td>
                  <td className="table-column">{item.rotationPeriod}</td>
                  <td className="table-column">{item.orbitalPeriod}</td>
                  <td className="table-column">{item.diameter}</td>
                  <td className="table-column">{item.climate}</td>
                  <td className="table-column">{item.surfaceWater}</td>
                  <td className="table-column">{item.population}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
  }

  componentWillReceiveProps() {
    this.setState({
      data: this.props.data
    })
  }

  sortTable = (key) => {
    let order = key !== this.state.sort.key ? '' : this.state.sort.order;
    switch (order) {      
      case 'ascending' : order='descending'
      break;
      case 'descending' : order='ascending'
      default: order='ascending'
    }      
    this.setState({
      sort: {
        key: key,
        order: order
      }
    }, () => {
      let {data, sort} = this.state
      data.sort(this.generateCompareFunction(sort.key, sort.order));
      this.setState({
        data: data
      })
    })
  }

  generateCompareFunction = (key, order) => {
    if (order === 'ascending') {
      return  (a, b) => a[key] == b[key] ? 0 : a[key] < b[key] ? -1 : 1
    } else {
      return  (a, b) => a[key] == b[key] ? 0 : a[key] < b[key] ? 1 : -1
    }
  }
}

Table.propTypes = {
  data:propTypes.array.isRequired
}

export default Table;
