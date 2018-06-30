<template lang="html">
  <div class="">
    
  </div>
</template>

<script>
import ListItem from '@/components/list-item'

export default {
  data(){
    return {
      arr: []
    };
  },
  methods: {
    async loadPage(page=0){
      // return (await this.axios.get(`restaurant/${page}/8/`)).data;
    }
  },
  components: {ListItem},
  async mounted(){
    // this.arr=await this.loadPage(0);
  }
}
</script>

<style lang="css" scoped>

</style>
