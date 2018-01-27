const state = {
	columns: []
}

const getters = {
	columns: state => {
		return state.columns;
	}
}

const mutations = {
	UPDATE_COLUMNS (state, value) {
		state.columns = value;
	}
}

const actions = {
	updateColumns (context, value) {
		context.commit('UPDATE_COLUMNS', value)
	}
}

const column = {
	namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default column;