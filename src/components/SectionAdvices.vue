<script setup>
import iconEating from "@/assets/images/icon-eating.svg";
import iconExercise from "@/assets/images/icon-exercise.svg";
import iconSleep from "@/assets/images/icon-sleep.svg";

const advices = [
  {
    id: 1,
    url: iconEating,
    title: "Healthy eating",
    text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    alt: "icon representing a bowl containing food",
  },
  {
    id: 2,
    url: iconExercise,
    title: "Regular exercise",
    text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    alt: "icon representing weights to lift",
  },
  {
    id: 3,
    url: iconSleep,
    title: "Adequate sleep",
    text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    alt: "icon representing the moon and some stars",
  },
];
</script>
<template>
  <div
    class="grid px-6 py-14 gap-y-10 gradient-advices xl:flex xl:gap-8 xl:pt-[72px] xl:pb-24 xl:p-[116px] xl:rounded-[35px] xl:m-6"
  >
    <div
      v-for="advice in advices"
      class="md:flex md:gap-10 md:items-center xl:grid"
    >
      <div>
        <img
          :src="advice.url"
          :alt="advice.alt"
          :key="advice.id"
          class="mb-8 md:w-16 md:m-0"
        />
      </div>
      <div>
        <h3 class="mb-6 heading-m">{{ advice.title }}</h3>
        <p class="body-m text-dark-electric-blue">{{ advice.text }}</p>
      </div>
    </div>
  </div>
</template>
