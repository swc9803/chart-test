<template>
  <ul>
    <slot name="navbar" />
    <li v-for="(menu, i) in menus" :key="menu.id">
      <router-link :to="{ path: menus[i] }">
        {{ menus[i] }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
const menus = [];
const testCount = 2;
for (let i = 1; i <= testCount; i++) {
  menus.push(`test${i}`);
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(38, 38, 38);
  li {
    list-style: none;
    line-height: 30px;
  }
}
</style>
