export default {
  template: /*html*/`
  <header>
    <a href="#" @click.prevent="sayHi">新冠肺炎今本土增2萬802例、22人死亡 10歲男童MIS-C</a>
  </header>
  `,
  data() {
    return{
    }
  },
  methods: {
    sayHi() {
      alert('Hello Ray');
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {}
}