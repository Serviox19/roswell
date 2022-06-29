<template>
  <div class="task-item">
    <div class="task-item__main">
      <h3 class="task-item__title">
        {{ title }}
      </h3>
      <p class="task-item__timestamp">
        {{ time }}
      </p>
    </div>
    <button class="task-item__btn">
      <img src="/icon-close.svg" />
    </button>
  </div>
</template>

<script>
  export default {
    name: 'TaskListItem',
    props: {
      title: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      removeTask(task) {
        this.$emit('removeTask', task)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .task-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    border: solid 1px #000;
    border-radius: 4px;
    background: #F1F1F1;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  .task-item__main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex: 0 1 60%;
    }
  }

  .task-item__title {
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
    font-weight: 700;
    margin: 0 0 0.8rem;

    @media only screen and (min-width: 768px) {
      font-size: 1.5rem;
      margin: 0;
    }
  }

  .task-item__timestamp {
    font-size: 0.8rem;
    line-height: 1.25;
    letter-spacing: 0.5px;
    font-weight: 500;
    margin: 0;

    @media only screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .task-item__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    background: transparent;
    width: 40px;
    height: 40px;
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
  }
</style>