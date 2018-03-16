<style lang="stylus" scoped>
  .container-a3
    height 80px
    display flex
    flex-flow column
    justify-content space-around
    align-items center
    .box
      width 150px
      display flex
      justify-content space-around
      input 
        width 80px
</style>

<template>
  <div class="aaa">
    <h1>状态动画与监听器</h1>
    <a1></a1>
    <a2></a2>
    <a4></a4>
  </div>
</template>
<script>
import a1 from '../components/a1.vue'
import a2 from '../components/a2.vue'
import a4 from '../components/a4.vue'

export default {
  name: 'a',
  components: {
    a1, a2, a4
  }
}
</script>

