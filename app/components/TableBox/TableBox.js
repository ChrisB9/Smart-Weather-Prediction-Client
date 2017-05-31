import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'
import Table from 'react-native-simple-table'
//import styles from './styles'

class TableBox extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

  parseData(data) {
    switch (typeof data) {
      case 'string':
        return JSON.parse(data)
      case 'object':
        return data
      default:
        return []
    }
  }

  getColumnKeys() {
    return Object.keys(this.parseData(this.props.tableData[0])).map((el) => {
      return {
        title: el,
        dataIndex: el
      }
    })
  }

  getTableData(data) {
    data = this.parseData(data)
    if (data.length === 0) {
      return []
    }
    return data.map((el) => {
      el.date = el.date.date
      return el
    })
  }

	render() {
		return (
      <Table
        height={320}
        columnWidth={60} 
        columns={this.getColumnKeys()}
        dataSource={this.getTableData(this.props.tableData)} />
		)
	}
}

export default TableBox;
