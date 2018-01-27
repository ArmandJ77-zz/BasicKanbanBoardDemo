<template>
  <v-app>
    <!-- <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar fixed app :clipped-left="clipped">
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :disabled="canAddTask" v-on:click="openDialog('Task')">
        <v-icon>note_add</v-icon>
      </v-btn>
      <v-btn icon v-on:click="openDialog('Column')">
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
           <maincomponent></maincomponent>
           <add-dialog></add-dialog>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import maincomponent from "../src/components/maincomponent.vue";
import addDialog from "../src/components/addDialog";
// import addDialog from "../components/addDialog.vue";

export default {
  components: {
    maincomponent,
    "add-dialog": addDialog
  },
  computed:{
    canAddTask:{
      get(){
        debugger;
        if(this.$store.state.column.columns.length === 0)
          return true;

        return false;
      }
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{ icon: "bubble_chart", title: "Inspire" }],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "A very basic Kanban board with Draggable.js"
    };
  },
  methods: {
    openDialog(type) {
      this.$store.dispatch("addDialog/updateDialog", {
        display: true,
        type: type
      });   
    }
  }
};
</script>
