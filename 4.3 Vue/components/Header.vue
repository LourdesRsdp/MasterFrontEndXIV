<template>
  <nav class="nav">
    <img
      src="../src/placa_pn.png"
      alt="police"
      class="logo"
    />
    <div><h1>Hacking Collective Directory</h1></div>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav {
  min-height: 80px;
  background-color: #909d9e;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.logo {
  width: 50px;
  height: auto; 
  margin-right: 20px;
}

h1 {
  font-family: "Roboto", sans-serif;
}
</style>
