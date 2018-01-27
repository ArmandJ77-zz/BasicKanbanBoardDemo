<template>
    <v-form ref="createColumnForm" lazy-validation>
        <v-card>
            <v-card-title class="pb-0 mb-0">
            <span class="headline">Add Column</span>
            </v-card-title>
            <v-card-text class="pt-0 mt-0">
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field v-model="Name" label="Name" required :rules="nameRules"></v-text-field>
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
            Name: "",
            nameRules: [
                (v) => !!v || 'Name is required',
                (v) => v.length <= 20 || 'Name must be less than 10 characters'
            ],
        };
  },
  methods: {
    onClose: function() {
        this.$refs.createColumnForm.reset();
        this.$store.dispatch("addDialog/updateDialog", {'display': false, 'type': ''});
    },
    onSave: function(){
        if(this.$refs.createColumnForm.validate()){
            debugger;
            var columns = this.$store.state.column.columns;
            let board = {
                "order": columns.length, 
                "name": this.Name,
                "tasks": []
            }            
            columns.push(board);

            this.$store.dispatch("column/updateColumns", columns);
            this.$refs.createColumnForm.reset();
            this.$store.dispatch("addDialog/updateDialog", {'display': false, 'type': ''});
        }        
    }
  }
};
</script>

<style scoped>

</style>