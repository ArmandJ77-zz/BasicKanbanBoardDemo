const state = {
	dialog: null
}

const getters = {
	dialog: sate => {
		return state.dialog;
	}
	// display: state => {
	// 	return state.display;
	// },
	// type: state => {
	// 	return state.type;
	// },
}

const mutations = {
	UPDATE_DIALOG (state, value) {
		state.dialog = value;
	},
	// UPDATE_DISPLAY (state, value) {
	// 	state.display = value;
	// },
	// UPDATE_TYPE (state, value) {
	// 	state.display = value;
	// }
}

const actions = {
	updateDialog (context,value){
		console.log(value);		
		context.commit('UPDATE_DIALOG', value);
	},
}

const addDialog = {
	namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default addDialog;