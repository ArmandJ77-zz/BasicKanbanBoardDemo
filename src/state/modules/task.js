const state = {
	tasks: []
}

const getters = {
	tasks: state => {
		return state.tasks;
	}
}

const mutations = {
	UPDATE_TASKS (state, value) {
		state.columns = value;
	}
}

const actions = {
	update_Tasks (context, value) {
		context.commit('UPDATE_TASKS', value)
	}
}

const task = {
	namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default task;