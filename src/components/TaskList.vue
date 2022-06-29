<template>
  <div class="task-list">
    <div class="task-list__wrapper">
      <div class="task-list__empty" v-if="!tasks && !tasks.length">
        <h2 class="No entries, please add some!"></h2>
      </div>
      <div class="task-list__listing" v-else>
        <task-list-item
          v-for="(item, index) in tasks"
          :key="index"
          :task="item"
          @remove="removeTask(item)">
        </task-list-item>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import TaskListItem from './TaskListItem.vue';

  export default {
    name: 'TaskList',
    components: {
      TaskListItem,
    },
    props: {},
    data() {
      return {}
    },
    mounted() {},
    computed: {
      ...mapState({
        tasks: (state) => state.tasks.tasks
      }),
    },
    methods: {
      removeTask(task) {
        this.$store.dispatch('tasks/removeTask', task);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .task-list {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 60px;
  }

  .task-list__wrapper {
    padding: 1rem;
  }
</style>