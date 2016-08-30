"use strict";

var ContactDataStore = require('./helpers/ContactDataStore')
var FixedDataTable = require('fixed-data-table')
var React = require('react');

const {Table, Column, Cell} = FixedDataTable;

const FirstNameCell = ({rowIndex,data, col, ...props}) => (
	<Cell {...props}>
		{data.getObjectAt(rowIndex)[col]}
);

