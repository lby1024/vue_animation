<style scoped>
  p{
    font-size: 1em;
    position: relative;
    width: 60px;
    transform-origin: left;
    margin: 0 auto;
    padding: 6px;
    background: orange
  }
</style>

<template>
  <div class="b5">
    <h3>例子5: 钩子函数</h3>
    <button @click="is_show=!is_show">click</button>
    <transition name="fade"
                @before-enter="before_enter"
                @enter='enter'
                @leave="leave"
                :css="false">
      <p v-if="is_show">demo</p>
    </transition>
  </div>
</template>
<script>
import Velocity from "velocity-animate"

export default {
  name: 'b5',
  data () {
    return {
      is_show: true
    }
  },
  methods: {
    before_enter (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
      el.style.fontSize = '1em'
    },
    enter (el, done) {
      // Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300})
      // Velocity(el, {fontSize: '1em'}, {complete: done})
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave (el, done) {
      Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 500})
      Velocity(el, {rotateZ: '100deg'}, {loop: 3})
      Velocity(el, {rotateZ: '45deg', translateX: '30PX', translateY: '30px'}, {complete: done})
    }
  }
}
</script>
