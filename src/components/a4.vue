<style lang="stylus" scoped>
.a4
  background orange 
  padding 30px
  text-align left 
  .box
    input 
      width 45px
    .sp
      padding-right 20px
</style>

<template>
  <div class="a4">
    <div class="box">
      <input type="number" v-model.number="number1">
      +
      <input type="number" v-model.number="number2">
      =
      <a3 :number="answer"></a3>
    </div>
    <div class="box">
      <a3 class="sp" :number="n1"></a3>
      <i class="sp">+</i>
      <a3 class="sp" :number="n2"></a3>
      <i class="sp">=</i>
      <a3 class="sp" :number="answer"></a3>
    </div>
  </div>
</template>

<script>
import a3 from './a3.vue'

export default {
  name: 'a4',
  components: {
    a3
  },
  data () {
    return {
      number1: 0,
      number2: 0
    }
  },
  computed: {
    n1 () {
      if (typeof this.number1 === 'string') {
        return 0
      } else {
        return this.number1
      }
    },
    n2 () {
      if (typeof this.number2 === 'string') {
        return 0
      } else {
        return this.number2
      }
    },
    answer () {
      return this.n1 + this.n2
    }
  }
}
</script>

