<template>
  <div class="task-list" v-if="tasks && tasks.length > 0">
    <h2 class="task-list__header">Previous Tasks</h2>
    <div class="task-list__wrapper">
      <div class="task-list__listing">
        <div class="task-listing__header">
          <h6>Description</h6>
          <h6>Start Time</h6>
          <h6>End Time</h6>
          <h6>Duration</h6>
        </div>
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
    margin-top: 30px;
  }

  .task-list__header {
    text-align: left;
    margin-bottom: 10px;
    font-size: 1rem;
    line-height: 1.25;
    font-weight: 700;
  }

  .task-list__wrapper {
    padding: 25px 27px;
    background-color: #F7F7F7;
    border-radius: 10px;
  }

  .task-list__listing {}

  .task-listing__header {
    display: none;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 28px;
    padding-right: 4rem;

    @media only screen and (min-width: 768px) {
      display: flex;

      h6 {
        font-size: 1rem;
        line-height: 1.25;
        font-weight: 700;
        margin: 0;

        &:nth-child(1) {
          flex: 0 1 30%;
          text-align: left;
        }
      }
    }
  }
</style>