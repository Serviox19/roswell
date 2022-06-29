<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <TaskEntry />
      <TaskList />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TaskEntry from './components/TaskEntry.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    Header,
    TaskEntry,
    TaskList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
