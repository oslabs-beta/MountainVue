<template>
  <div class="about">
    <h1>About</h1>
    <div class="team">
      <Ryan />
      <Matt />
      <Sohee />
      <Sean />
      <Andy />
      <Uni />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Ryan from '@/components/team/Ryan.vue';
import Matt from '@/components/team/Matt.vue';
import Sohee from '@/components/team/Sohee.vue';
import Sean from '@/components/team/Sean.vue';
import Andy from '@/components/team/Andy.vue';
import Uni from '@/components/team/Uni.vue';

export default {
  name: 'About',

  components: {
    Uni,
    Andy,
    Sean,
    Matt,
    Ryan,
    Sohee
  },

  // props: {
  //   linkedInUrl: {
  //     type: String,
  //   }
  // }
};
</script>

<style lang="scss" scoped>
  .team {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
</style>
