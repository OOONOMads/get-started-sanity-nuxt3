<template>
  <div :data-name="title" class="tabs__content">
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsTab',
  setup() { },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/css/variables.scss';

.tabs__content {
  height: calc(100% - 65px);
  padding: $standard-spacing;

  @media (max-width: 1350px) {
    padding: $standard-spacing--half;
  }

  background-color: $grey-lightest;
  display: none;
  flex-direction: column;

  &.sticky {
    position: relative;

    >div {
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      //height: 100%;
    }
  }

  border-radius: 0 0 $border-radius $border-radius;

  &.active {
    display: flex;
  }
}</style>
