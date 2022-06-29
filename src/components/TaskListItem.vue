<template>
  <div class="task-item">
    <div class="task-item__block">
      <label>Description</label>
      <p class="task-item__block-text">
        {{ task.title }}
      </p>
    </div>
    <div class="task-item__block">
      <label>Start Time</label>
      <p class="task-item__block-text">
        {{ task.start }}
      </p>
    </div>
    <div class="task-item__block">
      <label>End Time</label>
      <p class="task-item__block-text">
        {{ task.end }}
      </p>
    </div>
    <div class="task-item__block">
      <label>Duration</label>
      <p class="task-item__block-text">
        {{ task.duration }}
      </p>
    </div>
    <button class="task-item__btn" @click="remove">
      <img src="/icon-close.svg" />
    </button>
  </div>
</template>

<script>
  export default {
    name: 'TaskListItem',
    props: {
      task: {
        type: Object,
        required: true
      },
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      remove() {
        this.$emit('remove')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .task-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px #C4C4C4;
    padding: 15px 0;

    @media only screen and (min-width: 767px) {
      padding-right: 4rem;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .task-item__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media only screen and (min-width: 767px) {
      justify-content: flex-start;
      height: min-content;
    }

    &:nth-child(1) {
      flex: 0 1 100%;
      margin-bottom: 15px;

      @media only screen and (min-width: 767px) {
        flex: 0 1 30%;
        margin-bottom: 0;
      }
    }

    label {
      font-size: 0.8rem;
      line-height: 1rem;
      margin-bottom: 0.4rem;
      font-weight: 700;

      @media only screen and (min-width: 767px) {
        display: none;
      }
    }

    p {
      font-size: 0.8rem;
      line-height: 1rem;
      margin-bottom: 0;
      font-weight: 400;
    }
  }

  .task-item__block-text {
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 0.5px;
    font-weight: 400;
    margin: 0;
  }

  .task-item__btn {
    position: absolute;
    right: -0.25rem;
    top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    background: transparent;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    &:focus {
      outline: 1.5px solid rgba(0,0,0, 0.4);
      outline-offset: 1px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media only screen and (min-width: 767px) {
      top: 50%;
      transform: translate(0%, -50%);
    }
  }
</style>