<script setup>
import HeaderIntro from "./HeaderIntro.vue";
import HeaderForm from "./HeaderForm.vue";
</script>
<template>
  <div
    class="header-grid md:header-grid-md xl:grid xl:grid-cols-12 xl:grid-rows-6"
  >
    <header-intro
      class="xl:col-start-1 xl:col-end-9 xl:row-start-1 xl:row-end-7"
    />
    <header-form class="xl:col-start-7 xl:col-end-12 xl:row-start-2" />
  </div>
</template>
