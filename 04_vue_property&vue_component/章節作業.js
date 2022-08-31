export default {
  props: ['data'],
  template: /*html*/`
    <div class="card sticky-top" @click="emit">
      <div class="card-body">
        <img :src="data.Picture1" class="card-img-top" :alt="data.Name">
        <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                :src='googleMap()'></iframe>
      </div>
    </div>
  `,
  methods: {
    googleMap() {
      return `https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=${this.data.Py},${this.data.Px}(${this.data.Name})&z=16&output=embed`
    },
    emit() {
      this.$emit('like-emit', this.data.Name);
    }
  }
}