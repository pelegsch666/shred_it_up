import { useMemo } from 'react';

import { useTable } from 'react-table';

import styled from 'styled-components';

import ItemToolsBlock from './ItemToolsBlock';

const StyledTd = styled.td`
	padding: 12px;
	background-color: rgba(255, 255, 255, 0.2);
	color: #c33a3a;
	font-size: 1rem;
	font-family: 'Roboto', sans-serif;
	border: 1px solid #c33a3a;
	background-color: #fcffbb;
`;

const StyledTh = styled.th`
	border: 1px solid #c33a3a;
	color: #fcffbb;
	font-size: 1rem;
	font-family: 'Roboto', sans-serif;
	padding: 6px;
`;

const StyledThead = styled.thead`
	background-color: #c33a3a;
`;

const StyledTable = styled.table`
	margin-top: 20px;
`;

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
		<StyledTable {...getTableProps()}>
			<StyledThead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<StyledTh {...column.getHeaderProps()}>
								{column.render('Header')}
							</StyledTh>
						))}
					</tr>
				))}
			</StyledThead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<StyledTd {...cell.getCellProps()}>
										{cell.render('Cell')}
									</StyledTd>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</StyledTable>
	);
}
