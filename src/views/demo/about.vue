<template>
  <div class="pg-about">
    <cp-crumbs />
    <h1>Welcome to Your Vue.js App V=3.8.4</h1>
    <p>你好{{ _getUserInfo.userName }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CpCrumbs from '@/components/crumbs/'

export default {
  components: {
    CpCrumbs
  },
  computed: {
    ...mapGetters([
      '_getUserInfo'
    ])
  },
}
</script>
