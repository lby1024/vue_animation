<style lang="stylus" scoped>
  button 
    display block
    margin 0 auto 
  P
    display inline-block
    width 300px
  .fade-enter-active
    animation aaa 1s
  .fade-leave-active
    animation aaa .3s reverse
  @keyframes aaa {
    0%{
      transform scale(0)
    }
    50%{
      transform scale(1.5)
    }
    100%{
      transform scale(1)
    }
  }
</style>

<template>
  <div class="b3">
    <h3>例子3: animation</h3>
    <button @click="is_show=!is_show">click</button>
    <transition name="fade">
      <p v-if="is_show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut sequi non ex, optio nisi veritatis qui dolores. Nulla iure nihil qui blanditiis! Quod assumenda, deleniti alias ab delectus quasi?</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'b3',
  data () {
    return {
      is_show: true
    }
  }
}
</script>

