<style scoped>
  span {
    display: inline-block;
    padding-left: 21px;
  }
  .fade-enter-active, .fade-leave-active{
    transition: all 2s ease
  }
  .fade-enter, .fade-leave-to {
    transform: translate3d(0, 20px, 0)
  }
  .fade2-enter-active, .fade2-leave-active{
    transition: all 2s ease
  }
  .fade2-enter, .fade2-leave-to {
    transform: translate3d(0, 20px, 0)
  }
  .fade-move {
    transition: all 2s ease-in-out
  }
  .fade2-move {
    transition: all 2s ease-in-out
  }
</style>

<template>
  <div class="c1">
    <h2>例子1</h2>
    <p>span标签必须变成inline-block</p>
    <button @click="add">增加</button>
    <button @click="del">删除</button>
    <button @click="shuffle">洗牌</button>
    <button @click="ascending">升序</button>
    <button @click="descending">降序</button>
    <p>:key="item"的效果</p>
    <h3>
      <transition-group name="fade" tag="p">
        <span v-for="(item, index) in list" :key="item">{{item}}</span>
      </transition-group>
    </h3>
    <p>:key="index"的效果</p>
    <h3>
      <transition-group name="fade" tag="p">
        <span v-for="(item, index) in list" :key="index">{{item}}</span>
      </transition-group>
    </h3>
  </div>
</template>

<script>

export default {
  name: 'c1',
  data () {
    return {
      list: [0,1,2,3,4,5,6,7,8,9],
      number: 10
    }
  },
  methods: {
    random_number () {
      return parseInt(Math.random()*this.list.length)
    },
    del () {
      this.list.splice(this.random_number(), 1)
    },
    add () {
      this.list.splice(this.random_number(), 0, this.number++)
    },
    shuffle () {
      let new_list = []
      let n = [...this.list]  //这样n就不会跟着this.list一起变化了
      for (let i in n) {
        let n = parseInt(Math.random()*this.list.length)
        new_list.push(this.list[n])
        this.list.splice(n,1)
      }
      this.list = new_list
    },
    ascending () {
      this.list.sort((a, b) => a-b)
    },
    descending () {
      this.list.sort((a, b) => b-a)
    }
  }
}
</script>

