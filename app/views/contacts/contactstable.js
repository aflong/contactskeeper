"use strict";

var ContactDataStore = require('./helpers/ContactDataStore')
var FixedDataTable = require('fixed-data-table')
var React = require('react');

const {Table, Column, Cell} = FixedDataTable;

const FirstNameCell = ({rowIndex,data, col, ...props}) => (
	<Cell {...props}>
		{data.getObjectAt(rowIndex)[col]}
	</cell>
);


const LastNameCell = ({rowIndex, data, col, ...props}) => (
	<cell {...props}>
		{data.getObjectAt(rowIndex)[col]}
	</cell>
);


const DateOfBirthCell = ({rowIndex, data, col, ...props}) => (
	<cell {...props}>
		{data.getObjectAt(rowIndex)[col]}
	</cell>
);


const PhoneCell = ({rowIndex, data, col, ...props}) => (
	<cell {...props}>
		{data.getObjectAt(rowIndex)[col]}
	</cell>
);



const EmailCell = ({rowIndex, data, col, ...props}) => (
	<cell {...props}>
		{data.getObjectAt(rowIndex)[col]}
	</cell>
);



const NotesCell = ({rowIndex, data, col, ...props}) => (
	<cell {...props}>
		{data.getObjectAt(rowIndex)[col]}
	</cell>
);

render() {
	var {dataList} = this.state;


	return (
		<Table
			rowHeight={50}
			headerHeight={50}
			rowsCount={dataList.getSize()}
			width={1000}
			height={500}

			{...this.props}>
			<Column
			   header={<Cell>First Name</cell>}
			   cell={<FirstNameCell data={dataList} col="firstName"/>}
			   fixed={true}
			   width={100}
			/>
			<Column
			   header={<Cell>First Name</cell>}
			   cell={<LastNameCell data={dataList} col="lastName"/>}
			   fixed={true}
			   width={100}
			/>
			<Column
			   header={<Cell>Date of Birth</cell>}
			   cell={<DateOfBirthCell data={dataList} col="dateOfBirth"/>}
			   width={75}
			/>
			<Column
			   header={<Cell>Phone</cell>}
			   cell={<PhoneCell data={dataList} col="phone"/>}
			   width={100}
			/>
			<Column
			   header={<Cell>Email</cell>}
			   cell={<EmailCell data={dataList} col="email"/>}
			   width={100}
			/>
			<Column
			   header={<Cell>Notes</cell>}
			   cell={<NotesCell data={dataList} col="notes"/>}
			   width={200}
			/>
		</table>
		);
	}
}