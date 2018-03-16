<style scoped>
.d1{
  user-select: none;
}
.box{
  width: 300px;
  height: 120px;
  margin: 12px auto;
  overflow: hidden;
  position: relative;
}
.box-item{
  text-align: center;
  font-size: 33px;
  font-weight: border;
  width: 300px;
  line-height: 120px;
  background: gray;
  position: absolute;
  left: 300px;
  top: 0px;
}
</style>

<template>
  <div class="d1">
    <h3>轮播图1</h3>
    <div class="box">
      <div class="box-item" 
      v-for="(item, index) in card_list" 
      :style="css_pic(index, item)">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'd1',
  data () {
    return {
      current_index: 0,
      can_move: false,
      card_list: [
        {text: 0, background: 'red'},
        {text: 1, background: 'orange'},
        {text: 2, background: 'yellow'},
        {text: 3, background: 'skyblue'},
        {text: 4, background: 'pink'}
      ]
    }
  },
  methods: {
    css_pic (index, item) {
      let pre = this.current_index===0?this.card_list.length-1:this.current_index-1
      if (index === this.current_index) {
        return {'left': 0, 'background': item.background, 'transition': 'left 1s ease'}
      } else if (index === pre) {
        return {'left': '-300px', 'background': item.background, 'transition': 'left 1s ease'}
      }else {
        return {'left': '300px', 'background': item.background}
      }
    },
    move () {
      this.can_move = true
      this.current_index++
      if (this.current_index>this.card_list.length-1) {
        this.current_index = 0
      }
    }
  },
  mounted () {
    setInterval(() => {this.move()}, 2000)
  }
}
</script>
