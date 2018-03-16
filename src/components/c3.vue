<style scoped>
  .box{
    position: relative;
    width: 500px;
    height: 200px;
    background: pink;
  }
</style>

<template>
  <div class="c3">
    <h3>例子3</h3>
    <button @click="move">move</button>
    <div class="box" :style="sss"></div>
  </div>
</template>

<script>
let lll = 20
export default {
  name: 'c3',
  data () {
    return {
      l: 0,
      ss: {'left': `10px`}
    }
  },
  computed: {
    sss () {
      if (this.l === 0) {
        return {'left': `${this.l}px`}
      } else {
        return {
          'left': `${this.l}px`,
          'transition': "left .8s ease"
        }
      }
    }
  },
  methods: {
    move () {
      this.l += 500
      if (this.l>1000) {
        this.l = 0
      }
    }
  }  
}
</script>

