
<template>
  <router-view />
</template>

<script>
import { focusHandling } from 'cruip-js-toolkit'

export default {
  mounted() {
    if (this.$router) {
      this.$watch('$route', () => {
        this.$nextTick(() => {
          focusHandling('outline')
        })
      });
    }    
  }
}
</script>
