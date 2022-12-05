import { ACTIONS } from '../../utils/constants';
function ItemToolsBlock({ dispatch, handleEditButton, state, index }) {
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
				X
			</button>
			<button
				onClick={() => handleEditButton(index)}
				style={state.isEditOn ? { outline: 'solid blue 1px' } : null}
			>
				✍️
			</button>
		</>
	);
}

export default ItemToolsBlock;
