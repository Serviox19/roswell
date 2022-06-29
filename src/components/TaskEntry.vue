<template>
  <div class="task-entry">
    <div class="task-entry__wrapper">
      <input type="text" placeholder="Enter task details" />
      <div class="task-entry__actions">
        <button @click="startTimer">Start</button>
        <button @click="stopTimer">Stop</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TaskEntry",
    components: {},
    props: {},
    data() {
      return {}
    },
    computed: {},
    methods: {
      startTimer() {},
      stopTimer() {},
      clearData() {}
    }
  }
</script>

<style lang="scss" scoped></style>