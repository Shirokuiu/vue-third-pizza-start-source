<template>
  <layout-header />
  <main class="layout">
    <div class="layout__sidebar sidebar">
      <a href="index.html" class="logo layout__logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </a>

      <a class="layout__link layout__link--active" href="#">История заказов</a>
      <a class="layout__link" href="#">Мои данные</a>
    </div>

    <router-view />
  </main>
</template>
<script setup>
import LayoutHeader from "@/layouts/LayoutHeader.vue";
</script>
