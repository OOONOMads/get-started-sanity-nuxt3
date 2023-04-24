<template>
  <div class="card" :class="size + ' ' + aligment">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'BasicCard',
    props: {
      aligment: {
        type: String,
        default: 'center'
      },
      size: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~/assets/css/variables.scss';
  div.card {
    background-color: $grey-lightest;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    flex-basis: 100%;

    &.half {
      flex-basis: calc(50% - 12.5px);

      @media (max-width: 550px) {
        flex-basis: 100%;
      }
    }
    &.center {
      align-items: center;
    }
    &.start {
      align-items: flex-start;
    }
    &.end {
      align-items: flex-end;
    }
  }
</style>
