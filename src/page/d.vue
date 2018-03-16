<template>
  <div class="d">
    <h3>练习</h3>
    <d1></d1>
    <d2></d2>
    <d3></d3>
  </div>
</template>

<script>
import d1 from '../components/d1.vue'
import d2 from '../components/d2.vue'
import d3 from '../components/d3.vue'

export default {
  name: 'd',
  components: {
    d1, d2, d3
  }
}
</script>

