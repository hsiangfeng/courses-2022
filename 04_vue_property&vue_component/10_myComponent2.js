import myComponent1 from './10_myComponent1.js';

export default {
  template: /*html*/`
   <p>{{ text }}</p>
   <my-component1></my-component1>
  `,
  data() {
    return {
      text: '這是一個區域元件 2',
    }
  },
  components: {
    myComponent1
  }
}