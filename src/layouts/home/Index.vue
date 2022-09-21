<template>
  <div>
    <Navbar>
      <template #navbar>
        <router-link to="/">
          <p class="navbar">navbar</p>
        </router-link>
      </template>
    </Navbar>
    <View />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
import View from "./View.vue";
</script>

<style lang="scss" scoped>
.navbar {
  margin: 0;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 30px;
  color: darkgray;
}
</style>
