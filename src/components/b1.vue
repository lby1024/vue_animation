<style lang="stylus" scoped>
  // .fade-enter, .fade-leave-to 
  //   opacity 0
  .fade-enter-active, .fade-leave-active
    transition opacity .5s
</style>

<template>
  <div class="b1">
    <h3>例子1</h3>
    <button @click="is_show = !is_show">show/hidden</button>
    <transition name="fade">
      <p v-show="is_show">fuck the fucking world</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'b1',
  data () {
    return {
      is_show: true
    }
  }
}
</script>

