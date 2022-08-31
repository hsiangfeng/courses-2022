export default {
  template: /*html*/`
   <p>{{ text }}</p>
   <my-component-global></my-component-global>
  `,
  data() {
    return {
      text: '這是一個區域元件 1',
    }
  },
}