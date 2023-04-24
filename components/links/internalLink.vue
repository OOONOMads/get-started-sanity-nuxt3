<template>
  <div class="link">
    <NuxtLink class="text" :class="size + ' ' + order" :to="locale + destination">
      <span class="text"> {{ title }}</span>

      <div class="icon" v-if="hasIcon">
        <base-icon :name="icon" :size="size" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
let order = ''

export default {
  name: 'InternalLink',
  data() {
    return {
      locale: ''
    }
  },
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
  created() {
    if (this.iconPlacement === 'left') {
      this.order = 'iconLeft'
    } else {
      this.order = 'iconRight'
    }
  },
  mounted() {
    this.locale = document.documentElement.getAttribute('lang');
    if (this.locale) {
      if (this.locale === 'en') {
        this.locale = ''
      } else {
        this.locale = '/' + this.locale
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

span.text {
  font-weight: 300;
}

a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: 0.2s ease-in-out color;
  font-weight: 200;

  &:hover {
    color: $primary-color--c02 !important;
    transition: 0.3s ease-in-out color;

    * {
      color: $primary-color--c02 !important;
      transition: 0.3s ease-in-out color;
    }
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
