<template>
  <div class="container row">
    <section class="content">
      <slot />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

section.content {
  background-color: $off-white;
  width: 100%;
  padding-left: 100px;

  @media (max-width: 850px) {
    padding-left: 0;
  }
}
</style>
