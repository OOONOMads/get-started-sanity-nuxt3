<template>
  <div class="ooonoInput">
    <label :class="iconPlacement" id="searchUser">
      <input @keyup="updateValueClass" @keydown.enter.prevent="submitEvent" :type="type" class="text search" :class="size"
        :value="value" :placeholder="placeholder" />

      <div id="search-icon" class="search-icon" @click="submitEvent" v-if="hasIcon" :class="spinning">
        <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <path
            d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"
            transform="translate(0 0)" />
        </svg>
        <svg class="spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
          style="background: none">
          <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
            stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(161.767 50 50)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50"
              keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
          </circle>
        </svg>
      </div>
    </label>
  </div>
</template>

<script>
const emailRegex =
  /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
const numberRegex = /^[1-9]\d*$/

export default {
  name: 'inputText',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Text Field Placeholder'
    },
    size: {
      type: String,
      default: 'regular'
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'view'
    },
    iconPlacement: {
      type: String,
      default: 'right'
    },
    status: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    submitFunction: {
      type: Function,
      default: () => { }
    }
  },
  data() {
    return {
      spinning: ''
    }
  },

  methods: {
    updateValueClass(e) {
      this.$emit('input', e.target.value)
      e.target.classList.toggle('hasValue', e.target.value !== '')
    },
    submitEvent() {
      const input = document.querySelector('input.text.search')
      const searchValue = input.value.trim()

      if (!this.validateInput(searchValue, input)) return

      this.spinning = 'loading'
      this.setSearchValue(searchValue)

      this.spinning = ''
      this.spinning = 'loading success'
      window.location.href = `/${searchValue}/user-info`
    },

    setSearchValue(searchValue) {
      useSearchStore().setSearchValue(searchValue)
    },

    validateInput(searchValue, input) {
      if (searchValue === '') {
        input.classList.add('error')
        this.spinning = 'loading error'

        setTimeout(() => {
          this.spinning = ''
          input.classList.remove('error')
        }, 2000)
        return false
      }

      if (!searchValue.match(emailRegex) && !searchValue.match(numberRegex)) {
        input.classList.add('error')
        this.spinning = 'loading error'


        setTimeout(() => {
          this.spinning = ''
          input.classList.remove('error')
        }, 2000)

        return false
      }

      input.classList.remove('error')
      return true
    }
  },

  mounted() {
    if (this.status !== '') {
      this.$el.classList.add(this.status)
      this.$el.classList.add('status')
    }

    if (this.hasIcon) {
      this.$el.classList.add('hasIcon')
    }
  }
}
</script>

<style lang="scss">
@import '/assets/css/variables.scss';


html[data-theme='dark'] {
  .search-icon {
    svg {
      fill: $black;
    }
  }
}

.ooonoInput {
  label {
    position: relative;
  }

  input {
    padding: 0 0 10px;
    border: none;
    border-bottom: 1px solid $grey-light;
    width: 100%;
    height: 100%;
    font-family: 'ooono';
    background-color: transparent;
    font-weight: 100;
    min-height: 50px;

    &.small {
      min-height: unset;
      font-size: $small + 2px;
    }

    &.regular {
      font-size: $regular + 2px;
    }

    &.large {
      font-size: $large + 2px;
    }

    &.hasValue {
      border-bottom: 1px solid $black;

      &::placeholder {
        color: $black;
      }
    }

    &:focus-visible {
      outline: none;
      border-bottom: 1px solid $black;
    }
  }

  &.hasIcon {
    .search-icon {
      cursor: pointer;
      position: absolute;
      right: -30px;
      top: 50%;
      transform: translate(0, -50%);
      width: 30px;
      height: 30px;

      svg {
        width: 100%;
        height: 100%;
        opacity: 1;
        visibility: visible;
        transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

        &:first-of-type {
          width: 40px;
          height: 40px;
        }

        &:last-of-type {
          margin-top: -2px;
          margin-left: -2px;
        }
      }

      .spinner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

        circle {
          stroke: $dark;
          stroke-dasharray: 164.93361431346415 56.97787143782138;
          animation: spin 1s ease-in-out infinite;
        }
      }

      &.loading {
        svg {
          opacity: 0;
          visibility: hidden;
        }

        .spinner {
          opacity: 1;
          visibility: visible;
        }

        &.error {
          .spinner circle {
            stroke: $secoundary-highlight;
            transition: stroke 0.2s ease-in-out;
          }
        }
      }
    }

    &.left {
      input {
        padding: 0 10px 10px 40px;
      }

      .icon {
        left: 10px;
        right: unset;
      }
    }

    &.right {
      input {
        padding: 0 40px 10px 10px;
      }

      .icon {
        right: 10px;
        left: unset;
      }
    }
  }

  .status {
    &.disabled {
      >label>input {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &.success {
      >label>input {
        border-color: $primary-highlight;
      }
    }

    &.warning {
      >label>input {
        border-color: $secoundary-highlight;
      }
    }

    &.danger {
      >label>input {
        border-color: $tertiary-highlight;
      }
    }
  }
}
</style>
