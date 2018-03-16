<template>
  <div class="b">
    <h3>单元素过渡</h3>
    <b1></b1>
    <b2></b2>
    <b3></b3>
    <b4></b4>
    <b5></b5>
  </div>
</template>
<script>
import b1 from '../components/b1.vue'
import b2 from '../components/b2.vue'
import b3 from '../components/b3.vue'
import b4 from '../components/b4.vue'
import b5 from '../components/b5.vue'

export default {
  name: 'b',
  components: {
    b1, b2, b3, b4, b5
  }
}
</script>

