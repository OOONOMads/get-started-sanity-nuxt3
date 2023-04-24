<template>
  <div class="link">
    <a v-if="isValid" class="text" :class="class" :to="destination">
      {{ title }}

      <div class="icon" v-if="hasIcon">
        <base-icon :name="icon" :size="iconSize" />
      </div>
    </a>

    <NuxtLink v-if="!isValid" class="text" :class="size" :to="destination">
      {{ title }}

      <div class="icon" v-if="hasIcon">
        <base-icon :name="icon" :size="iconSize" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
  const regex =
    '[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'

  export default {
    name: 'autoLink',
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
      },
      iconSize: {
        type: String,
        default: 'small'
      },
      class: {
        type: String,
        default: ''
      }
    },

    computed: {
      isValid() {
        if (!this.destination) return false

        return this.destination.match(regex)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/variables.scss';

  a {
    display: flex;
    align-items: center;
    justify-content: center;
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

      div.icon {
        margin-right: 10px;
        margin-left: 0;
      }
    }

    div.icon {
      color: inherit;
    }
  }
</style>
