import { useMemo } from 'react';

import { useTable } from 'react-table';

import ItemToolsBlock from './ItemToolsBlock';

function tableDataFormater(rowData, handleEditButton, dispatch, state) {
	const data = [];
	rowData.forEach((row, i) => {
		const { name, tempo, type } = row;
		data.push({
			name,
			tempo,
			type,
			tools: (
				<ItemToolsBlock
					index={i}
					handleEditButton={handleEditButton}
					dispatch={dispatch}
					state={state}
				/>
			),
		});
	});


	return data;
}

export default function ExTable({ data, dispatch, handleEditButton, state }) {
	const tableData = useMemo(
		() => [...tableDataFormater(data, handleEditButton, dispatch, state)],
		[data, dispatch, handleEditButton, state]
	);

	const columns = useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'name',
			},
			{
				Header: 'Tempo',
				accessor: 'tempo',
			},
			{
				Header: 'Type',
				accessor: 'type',
			},
			{
				Header: 'Tools',
				accessor: 'tools',
			},
		],
		[]
	);


	const tableInstance = useTable({ columns, data: tableData });


	const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
		tableInstance;

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
