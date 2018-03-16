<style lang="stylus" scoped>
p
  width 50px
  position relative
  margin 0 auto
  margin-top 12px
</style>

<template>
  <div class="b4">
    <h3 class="animated tada">例子4: 修改默认classname</h3>
    <button @click="is_show=!is_show">click</button>
    <transition name="fade"
                enter-active-class="animated bounceInUp"
                leave-active-class="animated hinge" >
      <p v-if="is_show">dog</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'b4',
  data () {
    return {
      is_show: true
    }
  }
}
</script>

