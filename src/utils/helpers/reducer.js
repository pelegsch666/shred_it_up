import { ACTIONS, initialState } from '../constants';

export function reducer(state, payload) {
	const newState = { ...state };
	const { action, sec, tempo, value, itemIndex } = payload;

	switch (action) {
		case ACTIONS.GET_LOCAL_STORAGE: {
			try {
				const data = JSON.parse(window.localStorage.getItem('exList'));

				newState.exList = data;
				if (data) {
					return newState;
				} else {
					return state;
				}
			} catch (err) {
				return newState;
			}
		}
		case ACTIONS.SET_LOCAL_STORAGE: {
			window.localStorage.setItem('exList', JSON.stringify(newState.exList));

			return state;
		}

		case ACTIONS.DELETE_EXERCISE: {
			const list = newState.exList;
			const firstSlice = list.slice(0, itemIndex);
			const secondSlice = list.slice(itemIndex + 1);
			newState.exList = [...firstSlice, ...secondSlice];
			return newState;
		}
		case ACTIONS.UPDATE_CURR_EX_NAME: {
			newState.currExName = value;
			return newState;
		}
		case ACTIONS.UPDATE_CURR_EX_TYPE: {
			newState.currExType = value;
			return newState;
		}
		case ACTIONS.UPDATE_CURR_EX_TEMPO: {
			newState.currExTempo = value;
			return newState;
		}
		case ACTIONS.ADD_EXERCISE: {
			const {
				currExName: name,
				currExTempo: tempo,
				currExType: type,
			} = newState;
			const newExercise = { name, tempo, type };
			newState.exList.push(newExercise);
			newState.currExName = initialState.currExName;
			newState.currExTempo = initialState.currExTempo;
			newState.currExType = initialState.currExType;

			return newState;
		}

		case ACTIONS.SET_EDIT_ON: {
			newState.isEditOn = true;

			return newState;
		}
		case ACTIONS.SET_EDIT_OFF: {
			newState.isEditOn = false;
			return newState;
		}
		case ACTIONS.SET_CURR_LIST_ITEM_INDEX: {
			newState.currListItemIndex = itemIndex;

			return newState;
		}
		case ACTIONS.FILL_INPUTS_WITH_CURR_EX: {
			const { name, tempo, type } = newState.exList[newState.currListItemIndex];
			newState.currExName = name;
			newState.currExTempo = tempo;
			newState.currExType = type;
			return newState;
		}
		case ACTIONS.EDIT_EXERCISE: {
			const {
				currExName: name,
				currExTempo: tempo,
				currExType: type,
			} = newState;
			const newExercise = { name, tempo, type };
			newState.exList[newState.currListItemIndex] = newExercise;
			newState.currExName = initialState.currExName;
			newState.currExTempo = initialState.currExTempo;
			newState.currExType = initialState.currExType;
			newState.isEditOn = false;
			return newState;
		}

		default:
			return state;
	}
}
