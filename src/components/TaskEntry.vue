<template>
  <div class="task-entry">
    <div class="task-entry__wrapper">
      <div class="task-entry__watch">
        <div class="started-wrap">
          Started at: <span class="started">{{ formattedStart }}</span>
        </div>
        <div class="started-wrap">
          Timer: <span id="timer-div"></span>
        </div>
      </div>
      <div class="task-entry__input">
        <label>Task Description:</label>
        <input
          type="text"
          placeholder="Enter task details"
          :value="title"
          @change="title = $event.target.value"
        />
      </div>
      <div class="task-entry__actions">
        <button @click="startTimer">Start</button>
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
        formattedStart: '',
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
        this.start = start;
        this.formattedStart = moment(this.start).format('hh:mm:ss');

        this.interval = window.setInterval(() => {
          document.querySelector('#timer-div').innerHTML = moment().hour(0).minute(0).second(this.counter++).format('HH:mm:ss');
        }, 1000)
      },
      stopTimer() {
        if (this.start === '') return false;
        clearInterval(this.interval);
        document.querySelector('#timer-div').innerHTML = '';

        var end = new moment();
        this.end = end;

        var a = moment(this.start);
        var b = moment(this.end);
        var duration = a.diff(b, 'seconds');
        console.log(duration);

        this.duration = Math.abs(duration);

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
          'start': moment(this.start).format('hh:mm:ss'),
          'end': moment(this.end).format('hh:mm:ss'),
          'duration': moment.utc(this.duration*1000).format("HH:mm:ss")
        }
        await this.$store.dispatch('tasks/addTask', data);
        await this.clearData();
      },
      clearData() {
        this.title = '',
        this.start = '',
        this.formattedStart = '',
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
    border-radius: 10px;
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

  .task-entry__input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      font-size: 0.8rem;
      line-height: 1rem;
      font-weight: 400;
      margin-bottom: 0.375rem;
      text-align: left;
    }

    input {
      appearance: none;
      display: block;
      max-width: 100%;
      max-height: 44px;
      border-radius: 10px;
      padding: 10px 15px;
      border: solid 1px #9E9E9E;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.2px;
      color: #000;

      &::placeholder {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.2px;
        color: #BDBDBD;
        line-height: normal !important;
      }

      &::-moz-placeholder {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.2px;
        color: #BDBDBD;
        line-height: normal !important;
      }
    }
  }

  .task-entry__actions {
    display: flex;
    align-self: flex-end;

    button {
      display: inline-flex;
      width: 84px;
      height: 35px;
      border-radius: 10px;
      padding: 8px 22px;
      justify-content: center;
      align-items: center;
      color: #FFF;
      background-color: #3563E9;
      border: solid 1px transparent;
      -webkit-tap-highlight-color: rgba(0,0,0,0);

      &:nth-child(1) {
        margin-right: 10px;
      }
    }

    .task-entry__stop {
      background-color: transparent;
      border-color: #3563E9;
      color: #3563E9;
    }
  }
</style>