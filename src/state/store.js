import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


import column from '../state/modules/column'
import addDialog from '../state/modules/addDialog'
import task from '../state/modules/task'

export default new Vuex.Store({
    modules: {
        column,
        task,
        addDialog
    }
})

