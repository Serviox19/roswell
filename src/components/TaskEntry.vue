<template>
  <div class="task-entry">
    <div class="task-entry__wrapper">
      <div class="task-entry__watch">
        <div class="started-wrap">
          Started at: <span class="started">{{ start }}</span>
        </div>
        <div class="started-wrap">
          Timer: <span id="timer-div"></span>
        </div>
      </div>
      <label>Task Description:</label>
      <input
        type="text"
        placeholder="Enter task details"
        :value="title"
        @change="title = $event.target.value"
      />
      <div class="task-entry__actions">
        <button class="task-entry__start" @click="startTimer">Start</button>
        <button class="task-entry__stop" @click="stopTimer">Stop</button>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: "TaskEntry",
    components: {},
    props: {},
    data() {
      return {
        title: '',
        start: '',
        end: '',
        duration: '',
        timerStarted: null,
        error: null,
        interval: {},
        counter: 0
      }
    },
    computed: {},
    methods: {
      startTimer() {
        if (this.title === '') return false;

        this.timerStarted = true;
        var start = new moment();
        this.start = moment(start).format('hh:mm:ss');

        this.interval = window.setInterval(() => {
          document.querySelector('#timer-div').innerHTML = moment().hour(0).minute(0).second(this.counter++).format('HH : mm : ss');
        }, 1000)
      },
      stopTimer() {
        if (this.start === '') return false;
        clearInterval(this.interval);
        document.querySelector('#timer-div').innerHTML = '';

        var end = new moment();
        this.end = end;

        var a = this.start;
        var b = this.end;
        var duration = b.diff(a, 'seconds');
        console.log(duration);

        this.duration = duration;

        if (this.start !== '' && this.end !== '' && this.duration !== '') {
          this.addNewTask()
        } else {
          this.error = 'Something is wrong, please try again!'
        }
      },
      async addNewTask() {
        console.log(this.title);
        let data = {
          'title': this.title,
          'start': this.start,
          'end': moment(this.end).format('hh:mm:ss'),
          'duration': moment.utc(this.duration * 1000).format("hh:mm:ss")
        }
        await this.$store.dispatch('tasks/addTask', data);
        await this.clearData();
      },
      clearData() {
        this.title = '',
        this.start = '',
        this.end = '',
        this.duration = '',
        this.timerStarted = null,
        this.error = null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .task-entry {}

  .task-entry__wrapper {
    display: flex;
    flex-direction: column;
    padding: 23px 25px;
    background-color: #F6F6F6;
  }

  .task-entry__watch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    padding-right: 2rem;

    .started-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1rem;
      line-height: 1.25;
      font-weight: 700;

      span {
        display: inline;
        font-weight: 400;
        min-height: 20px;
      }
    }
  }
</style>