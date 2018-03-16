<style scoped>
.c2{
  background: orange;
  padding: 21px;
}
.fade-move {
  transition: all 1s ease
}
span {
  display: inline-block;
  padding-right: 12px;
}
</style>

<template>
  <div class="c2">
    <h2>例子2: fade-move</h2>
    <button @click="shuffle">洗牌</button>
    <transition-group name="fade" tag="p">
      <span v-for="item in list" :key="item">{{item}}</span>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'c2',
  data () {
    return {
      list: [0,1,2,3,4,5,6,7,8,9]
    }
  },
  methods: {
    shuffle () {
      let new_list = []
      let n = [...this.list]  //这样n就不会跟着this.list一起变化了
      for (let i in n) {
        let n = parseInt(Math.random()*this.list.length)
        new_list.push(this.list[n])
        this.list.splice(n,1)
      }
      this.list = new_list
    }
  }
}
</script>

