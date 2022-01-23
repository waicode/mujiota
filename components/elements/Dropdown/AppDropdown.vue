<template></template>
<script lang="ts"></script>
<style lang="scss">
// ドロップダウン
$dropbox-text-color: #757575;
$dropbox-text-font-size: 0.8175rem;
.dropdown {
  width: 100%;
  .dropdown-text {
    font-size: $dropbox-text-font-size;
    font-weight: bold;
    color: $dropbox-text-color;
  }
  svg.fa-angle-down {
    color: #bdbdbd;
  }
  .dropdown-trigger,
  .dropdown-menu,
  button {
    justify-content: space-between;
    width: 100%;
  }
}
</style>
