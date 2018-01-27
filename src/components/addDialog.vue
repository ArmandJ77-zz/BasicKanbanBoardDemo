<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog.display" persistent max-width="500px">    
      <add-column-form v-if="dialog.type === 'Column'"></add-column-form>
      <add-task-from v-if="dialog.type === 'Task'"></add-task-from>
    </v-dialog>
  </v-layout>
</template>

<script>
import addColumnForm from "../components/addColumnForm";
import addTaskFrom from "../components/addTaskForm";

export default {
  components: {
    "add-column-form": addColumnForm,
    "add-task-from": addTaskFrom
  },
  data() {
    return {
      dlg: false
    };
  },
  computed: {
    dialog: {
      get: function() {
        var result = this.$store.state.addDialog.dialog;
        return (result === null) ? {'display': false, 'type': ''} : result;
      }
    },
  },
  methods: {}
};
</script>

<style scoped>

</style>