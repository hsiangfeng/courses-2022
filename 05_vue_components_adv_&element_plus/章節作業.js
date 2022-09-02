export default {
  props: ['data'],
  template: /*html*/`
    <el-card @click="emit(data)">
      <template #header>
        <div class="card-header">{{ data.Name }}</div>
      </template>
      <el-image style="height: 200px; width: 200px;" :src="data.Picture1" :fit="'cover'"></el-image>
      <div>
        <p>
          <div class="far fa-clock fa-clock-time">｜{{ data.Opentime }}</div>
        </p>
        <p>
          <div class="fas fa-map-marker-alt fa-map-gps">｜{{ data.Add }}</div>
        </p>
        <p>
          <div class="fas fa-mobile-alt mobile">｜{{ data.Tel }}</div>
        </p>
      </div>
    </el-card>
  `,
  methods: {
    emit(data) {
      this.$emit('add', data);
    }
  }
}