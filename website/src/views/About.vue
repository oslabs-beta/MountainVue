<template>
  <div class="about">
    <h1>About</h1>
    <div class="team">
      <Ryan lastName="Lim" birthday="Oct 9" />
      <Matt lastName="Huang" />
      <Sohee lastName="Lee" />
      <Sean lastName="Lee" />
      <Andy lastName="Tsou" />
      <Uni lastName="Lee" />
    </div>
  </div>
</template>

<script>
// @ is an alias for ~/src/webviews
import Ryan from '@/components/team/Ryan.vue';
import Matt from '@/components/team/Matt.vue';
import Sohee from '@/components/team/Sohee.vue';
import Sean from '@/components/team/Sean.vue';
import Andy from '@/components/team/Andy.vue';
import Uni from '@/components/team/Uni.vue';

export default {
  name: 'About',

  components: {
    Ryan,
    Matt,
    Sohee,
    Sean,
    Andy,
    Uni,
  },

  props: {
    lastName: {
      type: String,
    },
    birthday: {
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped>
.team {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
