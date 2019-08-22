<template>
  <div id="app">
    <transition name="fade">
      <router-view :key="$route.fullpath" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
#app{
  >.fade-enter-active, >.fade-leave-acitve {
    transition: all  0.4s ease-in-out 0s;
  }
  >.fade-enter, >.fade-leave-to{
    opacity : 0;
    transform: translate(0,0px);
  }
}
</style>
