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
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  #app {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
