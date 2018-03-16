<template>
  <div class="animated-number-demo">
    <input type="number" v-model.number="number" >
    <h3>{{animate_number}}</h3>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      number: 0,
      animate_number: 0
    }
  },
 watch: {
    number: function(newValue, oldValue) {
      let obj = {number: oldValue}  //这里里填写初始值
      new TWEEN.Tween(obj)
               .easing(TWEEN.Easing.Quadratic.Out)  //这里设置过渡形式 
               .to({number: newValue}, 500)   //这里设置结束值==>>整个过程用时半秒钟=
               .onUpdate(() => {this.animate_number = parseInt(obj.number)})  //数值每改变一次就执行一次回调函数
               .start()
      // TWEEN.update()==>>每执行一次==>>数据就改变一次==>>知道变成最终形态
      function loop () {
        if (TWEEN.update()) {          
          requestAnimationFrame(loop)
        }
      }
      loop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .animated-number-demo {
    padding: 30px;
    text-align: left;
    background: cadetblue;
  }
</style>
