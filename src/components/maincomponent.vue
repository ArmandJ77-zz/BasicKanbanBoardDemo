<template>
   <v-container grid-list-xl>
    <v-layout row wrap>
      <template v-for="board in boards">
        <v-flex xs4 lg2 :key="board.order">
          <v-card light class="grey lighten-2 pl-2 pb-2 pr-2" flat>
            <v-card-title>{{board.name}}</v-card-title>
            <draggable class="list-group list-group_container" element="ul" v-model="board.tasks" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
              <transition-group style="min-height: 80vh !important; display:block" type="transition" :name="'flip-list'">
                <v-card light hover class="list-group-item mb-2" v-for="task in board.tasks" :key="task.order">
                  <ul class="list-group ml-2 pr-2 pb-2 pt-4">
                    <li class="list-group-item">
                      <div class="task-type red accent-1 mb-3"></div>
                    </li>
                    <li class="list-group-item">
                      <div class="body-2">{{task.title}}</div>
                    </li>
                  </ul>
                  <v-card-actions>
                    <!-- <v-btn flat icon color="grey">
                      <v-icon>star</v-icon>
                    </v-btn>
                    <v-btn flat icon color="grey">
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn flat icon color="grey">
                      <v-icon>share</v-icon>
                    </v-btn> -->
                  </v-card-actions>
                </v-card>
              </transition-group>
            </draggable>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data() {
    return {
      editable: true,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
     onMove(){
       console.log("Moved Task");
     }
  },
  computed: {
    boards(){
      return this.$store.state.column.columns;
    },
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    }
  },
  watch: {
    isDragging(newValue) {
      //   if (newValue) {
      //     this.delayedDragging = false;
      //     return;
      //   }
      //   this.$nextTick(() => {
      //     this.delayedDragging = false;
      //   });
    }
  }
};
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
  max-height: 80vh;
  list-style: none;
  
}

.list-group_container{
  overflow-y: auto;
  padding-right: 10px;
}

.list-group-item {
  cursor: move;
  word-wrap: break-word;
}

.list-group-item i {
  cursor: pointer;
}

.task-type {
  height: 5px;
  width: 30px;
}

.task-actions {
}
</style>