import { ACTIONS } from '../../utils/constants';
function ItemToolsBlock({ dispatch, handleEditButton, state, index }) {
	const trashEmoji = '🗑️';
	const editEmoji = '✏️';

	return (
		<>
			<button
				onClick={() =>
					dispatch({
						action: ACTIONS.DELETE_EXERCISE,
						itemIndex: index,
					})
				}
			>
				{trashEmoji}
			</button>
			<button
				onClick={() => handleEditButton(index)}
				style={state.isEditOn ? { outline: 'solid blue 1px' } : null}
			>
				{editEmoji}
			</button>
		</>
	);
}

export default ItemToolsBlock;
