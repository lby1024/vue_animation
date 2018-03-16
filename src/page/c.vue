<template>
  <div class="c">
    <h3>多元素过渡</h3>
    <c1></c1>
    <c2></c2>
    <c3></c3>
  </div>
</template>

<script>
import c1 from '../components/c1.vue'
import c2 from '../components/c2.vue'
import c3 from '../components/c3.vue'

export default {
  name: 'c',
  components: {
    c1, c2, c3
  }
}
</script>

