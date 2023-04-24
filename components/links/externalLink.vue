<template>
  <div class="link">
    <a class="text" :class="size" :to="destination">
      <span class="text"> {{ title }}</span>

      <div class="icon" v-if="hasIcon">
        <base-icon :name="icon" :size="size" />
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'ExternalLink',
    props: {
      title: {
        type: String,
        default: 'Link'
      },
      destination: {
        type: String,
        default: '/'
      },
      hasIcon: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: 'launch'
      },
      iconPlacement: {
        type: String,
        default: 'right'
      },
      size: {
        type: String,
        default: 'regular'
      }
    },
    created() {}
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/variables.scss';

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: 0.2s ease-in-out color;

    &:hover {
      color: $primary-color--c02;
      transition: 0.3s ease-in-out color;
    }

    &.iconLeft {
      flex-direction: row-reverse;
      justify-content: flex-end;

      div.icon {
        margin-right: 15px;
        margin-left: 0;
      }
    }

    div.icon {
      margin-left: 15px;
      color: inherit;
      width: 24px;
      height: 24px;

      svg {
        height: inherit;
        width: inherit;
      }
    }
  }
</style>
