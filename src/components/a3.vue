<style lang="stylus" scoped>
</style>

<template>
  <span class="a3">{{number_animation}}</span>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'

export default {
  name: 'a3',
  data () {
    return {
      number_animation: 0
    }
  },
  props: {
    number: Number
  },
  watch: {
    number (new_v, old_v) {
      function loop () {
        if (TWEEN.update()) {
          requestAnimationFrame(loop)
        }
      }
      let obj = {num: old_v}
      new TWEEN.Tween(obj).to({num: new_v}, 500).onUpdate(() => {this.number_animation = parseInt(obj.num)}).start()
      loop()
    }
  }
}
</script>
