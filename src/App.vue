<template>
  <div id="app">
    <div class="tab">
			<router-link tag="div" class="tab-item" to="/" @click.native="choose(0)">状态动画与监听器</router-link>
			<router-link tag="div" class="tab-item" to="/b" @click.native="choose(1)">单元素过渡</router-link>
			<router-link tag="div" class="tab-item" to="/c" @click.native="choose(2)">多元素过渡</router-link>
			<router-link tag="div" class="tab-item" to="/d" @click.native="choose(3)">练习</router-link>
		</div>
    <transition name="fade" mode="out-in" :enter-active-class="enter" :leave-active-class="out">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      current_number: 0,
      is_less: false,
      enter: 'animated slideInRight',
      out: 'animated bounceOutLeft'
    }
  },
  methods: {
    choose (number) {
      if (number>this.current_number) {
        this.enter = 'animated slideInRight'
        this.out = 'animated bounceOutLeft'
        this.current_number = number
      }else if (number< this.current_number) {
        this.enter = 'animated slideInLeft'
        this.out = 'animated bounceOutRight'
        this.current_number = number
      }
    }
  }
}

</script>

<style>
@import url('../node_modules/animate.css/animate.css');
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s
}
.router-link-exact-active {
  background: teal!important
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
.tab {
  margin: 0 auto;
  height: 100px;
  width: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tab-item {
  width: 150px;
  background: skyblue;
  color: white;
  padding: 9px 3px
}
.tab-item:hover {
  background: teal;
  cursor: pointer;
}
</style>
