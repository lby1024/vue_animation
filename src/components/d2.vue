<style scoped>
  .d2{
    user-select: none;
  }
  .box {
    width: 500px;
    height: 240px;
    position: relative;
    margin: 18px auto;
    perspective:1000px;
	 -webkit-perspective:1000px; /* Safari and Chrome */
  }
  .item {
    width: 500px;
    line-height: 240px;
    text-align: center;
    background: gainsboro;
    position: absolute;
    transform: translate3d(0, 0, -500px);
    font-size: 33px;
    border-radius: 15px;
  }
</style>

<template>
  <div class="d2">
    <h3 @click="move">轮播图2</h3>
    <div class="box">
      <div class="item"
      v-for="(item, index) in cards" :key="index"
      :style="css_pic(index)"
      >{{item.id}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'd2',
  data () {
    return {
      cards: [
        {id: 0, background: 'red'},
        {id: 1, background: 'yellow'},
        {id: 2, background: 'pink'},
        {id: 3, background: 'orange'},
        {id: 4, background: 'skyblue'}
      ],
      current_id: 0
    }
  },
  methods: {
    css_pic (index) {
      let current = this.current_id
      let pre = this.current_id===0?this.cards.length-1:this.current_id-1
      let next = this.current_id===this.cards.length-1?0:this.current_id+1
      let style = {}
      if (index===current) {
        style['transform'] = 'translate3d(0,0,0)'
        style['background'] = this.cards[index].background
        style['z-index'] = 2
        style['transition'] = 'all .8s ease'
      } else if (index===pre) {
        style['transform'] = 'translate3d(-380px,0,-300px)'
        style['background'] = this.cards[index].background
        style['z-index'] = 1
        style['transition'] = 'all .8s ease'
      } else if (index===next) {
        style['transform'] = 'translate3d(380px,0,-300px)'
        style['background'] = this.cards[index].background
        style['z-index'] = 1
        style['transition'] = 'all .8s ease'
      } else {
        style['transform'] = 'translate3d(0,0,-500px)'
        style['background'] = this.cards[index].background
        style['z-index'] = 0
        style['opacity'] = 0
        style['transition'] = 'all .8s ease'
      }
      return style
    },
    move () {
      this.current_id++
      if (this.current_id>this.cards.length-1) {
        this.current_id = 0
      }
    }
  },
  mounted () {
    setInterval(() => {this.move()}, 2000)
  }
}
</script>

