<script setup>
import Header from "./components/Header.vue";
import SectionDefinition from "./components/SectionDefinition.vue";
import SectionAdvices from "./components/SectionAdvices.vue";
import SectionLimitations from "./components/SectionLimitations.vue";
</script>

<template>
  <div class="grid gap-y-[4.5rem] md:gap-24">
    <Header />
    <section-definition />
    <section-advices />
    <SectionLimitations />
  </div>
</template>
