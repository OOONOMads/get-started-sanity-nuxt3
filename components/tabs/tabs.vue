<template>
  <div class="tabs">
    <ul class="tabs__header" :class="size">
      <li
        v-for="element in tabData"
        :key="element.title"
        class="tabs__item"
        :class="{ active: selectedTitle === element.title }"
      >
        <BaseIcon v-if="hasIcon" :name="element.icon" :size="size" />
        <p>{{ element.title }}</p>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    props: {
      hasIcon: {
        type: Boolean,
        default: true
      },
      icon: {
        type: String,
        default: 'warning'
      },
      size: {
        type: String,
        default: 'regular'
      }
    },
    setup() {
      const slots = useSlots()
      const tabTitles = ref(slots.default().map((tab) => tab.props.title))
      const tabData = ref(slots.default().map((tab) => tab.props))

      const selectedTitle = ref(tabTitles.value[0])
      return {
        tabData,
        selectedTitle
      }
    },
    mounted() {
      const tabs = this.$el.querySelectorAll('.tabs__item')
      let tableChildren = this.$el.children

      if (tableChildren[1].dataset.name === this.selectedTitle) {
        tableChildren[1].classList.add('active')
      }

      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          this.selectedTitle = tab.innerText

          for (let element of tableChildren) {
            if (element.classList.contains('tabs__content')) {
              if (element.dataset.name === this.selectedTitle) {
                element.classList.add('active')
              } else {
                element.classList.remove('active')
              }
            }
          }
        })
      })
    }
  }
</script>

<style scoped lang="scss">
  @import '~/assets/css/variables.scss';
  div.tabs {
    height: 100%;
    border-radius: 8px;
    ul.tabs__header {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      height: 65px;

      &.small {
        font-size: $small;
      }
      &.regular {
        font-size: $regular;
      }
      &.large {
        font-size: $large;
      }
      &.xlarge {
        font-size: $xlarge;
      }

      li {
        padding: 20px 0;
        background-color: $grey-medium;
        color: $dark;
        width: 100%;
        font-size: inherit;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

        @media (max-width: 850px) {
          p {
            display: none;
          }
        }
        &:first-of-type {
          border-radius: 8px 0 0 0;
        }
        &:last-of-type {
          border-radius: 0 8px 0 0;
        }

        &.active,
        &:hover {
          background-color: $grey-lightest;
          color: $black;
          transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        }
      }
    }
  }
</style>
