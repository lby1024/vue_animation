<style lang="stylus" scoped>
  .fade-enter
    transform: translateX(60px)
  .fade-leave-to
    transform: translateX(-60px)
  .fade-enter-active
    transition all 3s ease 
  .fade-leave-active
    transition all 1s cubic-bezier(.38,-0.15,.89,.66) 
</style>

<template>
  <div class="b2">
    <h3>例子2: transition</h3>
    <button @click="is_show = !is_show">fade</button>
    <transition name="fade">
      <p v-if="is_show">fuck the fucking world</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'b2',
  data () {
    return {
      is_show: true
    }
  }
}
</script>
