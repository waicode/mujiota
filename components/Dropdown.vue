<template>
  <div
    class="dropdown"
    :class="{ 'is-active': isActive }"
    @click="toggleDropDown"
  >
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span class="dropdown-text">{{ text }}</span>
        <span class="icon is-small">
          <fa :icon="faAngleDown" class="fa-angle-down" aria-hidden="true" />
        </span>
      </button>
    </div>
    <div id="dropdown-menu" class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </div>
    </div>
  </div>
</template>
<script>
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
export default {
  props: {
    text: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    faAngleDown() {
      return faAngleDown
    },
  },
  methods: {
    toggleDropDown() {
      this.isActive = !this.isActive
    },
  },
}
</script>
<style lang="scss" scoped>
$dropbox-text-color: #757575;
.dropdown {
  width: 100%;
  .dropdown-text {
    font-size: 0.8175rem;
    font-weight: bold;
    color: $dropbox-text-color;
  }
  svg.fa-angle-down {
    color: #bdbdbd;
  }
  .dropdown-trigger,
  .dropdown-menu,
  button {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
