<template>
  <div class="about">
    <h1>About</h1>
    <div class="team">
      <Ryan lastName="Lim" />
      <Matt />
      <Sohee />
      <Sean />
      <Andy />
      <Uni />
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  components: {
    // @ is an alias to /src
    Ryan: () => import('@/components/team/Ryan.vue'),
    Matt: () => import('@/components/team/Matt.vue'),
    Sohee: () => import('@/components/team/Sohee.vue'),
    Sean: () => import('@/components/team/Sean.vue'),
    Andy: () => import('@/components/team/Andy.vue'),
    Uni: () => import('@/components/team/Uni.vue'),
  },

  props: {
    lastName: {
      type: String,
    }
  }
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
