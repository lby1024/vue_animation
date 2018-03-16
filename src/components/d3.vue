<style scoped>
  .d3{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: burlywood;
    position: absolute;
    top: 100px;
    left: 100px;
  }
  .d3:hover{
    cursor: pointer;
  }
</style>

<template>
  <div class="d3" :style="css_bind()" @mousedown.stop.capture="mouse_down"></div>
</template>

<script>
export default {
  name: 'd3',
  data () {
    return {
      ball: {x: 0, y: 0, can_move: false},
      temporary_data: {
        relative_x: 0,
        relative_y: 0,
      }
    }
  },
  methods: {
    css_bind () {
      let style = {}
      style['left'] = `${this.ball.x}px`
      style['top'] = `${this.ball.y}px`
      return style
    },
    mouse_down (e) {
      console.log('mouse_down')
      this.temporary_data.relative_x = e.offsetX
      this.temporary_data.relative_y = e.offsetY
      this.ball.can_move = true
    },
    mouse_move (e) {
      if (this.ball.can_move) {
        this.ball.x = e.clientX-this.temporary_data.relative_x
        this.ball.y = e.clientY-this.temporary_data.relative_y
      }
    },
    mouse_up (e) {
      console.log('mouse_up')
      this.ball.can_move = false
    }
  },
  mounted () {
    window.onmouseup = this.mouse_up
    window.onmousemove = this.mouse_move
  }
}
</script>
