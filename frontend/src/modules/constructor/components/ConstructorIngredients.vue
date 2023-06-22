<template>
  <div class="content__ingredients">
    <layout-constructor-title content-css-mod="ingredients">
      <template #title>Выберите ингредиенты</template>
      <template #content>
        <slot name="sauce" />
        <slot name="ingredients" />
      </template>
    </layout-constructor-title>
  </div>
</template>

<script>
export default {};
</script>
<script setup>
import LayoutConstructorTitle from "@/layouts/LayoutConstructorTitle.vue";
</script>
