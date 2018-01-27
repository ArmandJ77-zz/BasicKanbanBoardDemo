<template>
  <v-form ref="createTaskForm" lazy-validation>
        <v-card>
            <v-card-title class="pb-0 mb-0">
            <span class="headline">Add Task</span>
            </v-card-title>
            <v-card-text class="pt-0 mt-0">
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field v-model="Description" label="Description" required :rules="descriptionRules"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-select v-bind:items="Boards" v-model="SelectedBoard" label="Select Board" single-line bottom></v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="onClose()">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="onSave()" Submit>Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script>
export default {
  data() {
    return {
      SelectedBoard: "",
      Description: "",
      descriptionRules: [
        v => !!v || "Description is required",
        v => v.length <= 30 || "Description must be less than 10 characters"
      ]
    };
  },
  computed: {
    Boards: function() {
      return this.$store.state.column.columns.map(x => x.name);
    }
  },
  methods: {
    onClose: function() {
      this.$refs.createTaskForm.reset();
      this.$store.dispatch("addDialog/updateDialog", {
        display: false,
        type: ""
      });
    },
    onSave: function() {
      if (this.$refs.createTaskForm.validate()) {
        let columns = this.$store.state.column.columns;
        columns.forEach(function(el) {
          if (el.name === this.SelectedBoard) {
            el.tasks.push({
              order: el.tasks.length,
              title: this.Description
            });
          }
        }, this);

        this.$store.dispatch("column/updateColumns", columns);
        this.$refs.createTaskForm.reset();
        this.$store.dispatch("addDialog/updateDialog", {
          display: false,
          type: ""
        });
      }
    }
  }
};
</script>

<style scoped>

</style>