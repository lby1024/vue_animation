<template>
  <div class="a2">
      <div class="h">
        <input type="text" v-model="color_string" placeholder="editor a color">
        <button @click="submit">提交</button>
      </div>
      <div class="box" v-bind:style="{ backgroundColor: color_css_animation }"></div>
      <h5>{{color_css_animation}}</h5>
  </div>
</template>
<script>
import Color from 'color-js'
import TWEEN from '@tweenjs/tween.js'

export default {
  name: 'a2',
  data () {
      return {
        color_string: '',
        color_rgb: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
        },
        color_rgb_animation: {}
      }
  },
  created () {
    this.color_rgb_animation = this.color_rgb
  },
  computed: {
    color_css_animation () {
      return new Color(this.color_rgb_animation).toCSS()
    }
  },
  watch: {
    color_rgb () {
      // TWEEN.update()==>>每执行一次==>>数据就改变一点
      function loop () {
        if (TWEEN.update()) {
          requestAnimationFrame(loop)
        }
      }
      new TWEEN.Tween(this.color_rgb_animation)   // 要改变的数据
               .to(this.color_rgb, 500)           // 数据将要变成的模样==>>用时半秒钟
               .start()
      loop()
    }
  },
  methods: {
    submit () {
      this.color_rgb = new Color(this.color_string).toRGB()
      this.color_string = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
    .a2 {
        width 200px
        height 180px
        padding 30px
        text-align left 
    }
    .box 
        width 100px
        height 100px
        background yellow 
        margin-top 9px
    h5
        text-align left 
</style>

