<template>
  <div class="task-list">
    <div class="task-list__wrapper">
      <div class="task-list__wrapper" v-if="!tasks && !tasks.length"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskList',
    components: {},
    props: {},
    data() {
      return {
        tasks: []
      }
    },
    mounted() {},
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" scoped></style>