import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'
import Table from 'react-native-simple-table'

const parseData = (data) => {
  switch (typeof data) {
    case 'string':
      return JSON.parse(data)
    case 'object':
      return data
    default:
      return []
  }
}

const getColumnKeys = (tableData) => {
  return Object.keys(parseData(tableData[0])).map((el) => {
    return {
      title: el,
      dataIndex: el
    }
  })
}

const getTableData = (data) => {
  if (data.length === 0) {
    return []
  }
  return data.map((el) => {
    el.date = el.date.date
    return el
  })
}

const TableBox = ({tableData, height, colwidth}) => {
	return (
    <Table
      height={height || 320}
      columnWidth={colwidth || 60}
      columns={getColumnKeys()}
      dataSource={getTableData(parseData(tableData))} />
	)
}

export default TableBox;
