<template>
  <div>
    <label for="todo">請輸入代辦事項：</label>
    <input v-model="cacheText" id="todo" type="text">
    <button @click="addTodo" type="button" v-bind:disabled="cacheText ? false : true ">新增代辦</button>

    <hr>

    <h4>目前代辦的事項</h4>
    <ul>
      <li v-for="item in todoList" :key="item.id">
        {{ item.todoName }} - <button @click="removeTodo(item.id)" type="button">移除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cacheText: '',
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      const id = Math.floor(Date.now());
      this.todoList.push({
        id,
        todoName: this.cacheText,
      });

      this.setItem('todoList', this.todoList);

      this.cacheText = '';
    },
    removeTodo(id) {
      // 當只有一行的時候，可以縮寫成一行
      const todoIndex = this.todoList.findIndex(item => item.id === id);
      this.todoList.splice(todoIndex, 1);

      this.setItem('todoList', this.todoList);
    },
    setItem(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  mounted() {
    this.todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  }
}
</script>

<style>
</style>