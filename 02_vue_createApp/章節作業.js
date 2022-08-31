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