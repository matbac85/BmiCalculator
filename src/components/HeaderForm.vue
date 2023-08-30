<script setup>
import { ref, computed } from "vue";

const measuringUnit = ref("metric");
const kg = ref("");
const lbs = ref("");
const st = ref("");
const weight = ref(0);
const cm = ref("");
const ft = ref("");
const inch = ref("");
const height = ref(0);
const bmi = ref(0);
const classification = ref("");
const idealWeightRange = ref("");

const weightCalc = () => {
  if (measuringUnit.value === "metric") {
    weight.value = kg.value;
  }
  if (measuringUnit.value === "imperial") {
    weight.value = lbs.value * 0.45359237 + st.value * 14 * 0.45359237;
  }
};

const heightCalc = () => {
  if (measuringUnit.value === "metric") {
    height.value = cm.value;
  }
  if (measuringUnit.value === "imperial") {
    height.value = ft.value * 30.48 + inch.value * 2.54;
  }
};

const bmiCalc = computed(() => {
  weightCalc();
  heightCalc();
  bmi.value = weight.value / (height.value / 100) ** 2;
  classificationCalc();
  idealWeightCalc();
});

const classificationCalc = () => {
  if (bmi.value < 18.5) {
    classification.value = "underweight";
  } else if (bmi.value < 25) {
    classification.value = "healthy weight";
  } else if (bmi.value < 30) {
    classification.value = "overweight";
  } else {
    classification.value = "obese";
  }
};

const idealWeightCalc = () => {
  if (measuringUnit.value === "metric") {
    const idealLow = Math.round(18.5 * (height.value / 100) ** 2);
    const idealTop = Math.round(25 * (height.value / 100) ** 2);
    const units = "kg";
    idealWeightRange.value = `Your ideal weight is between ${idealLow} ${units} and ${idealTop} ${units}.`;
  } else {
    const idealLow = Math.round(18.5 * 2.20462 * (height.value / 100) ** 2);
    const idealTop = Math.round(25 * 2.20462 * (height.value / 100) ** 2);
    const units = "lbs";
    idealWeightRange.value = `Your ideal weight is between ${idealLow} ${units} and ${idealTop} ${units}.`;
  }
};
</script>
<template>
  <form
    class="flex flex-col gap-6 p-6 rounded-2xl bg-pure-white drop-shadow-3xl header-form-grid md:header-form-grid-md md:gap-8 md:h-fit xl:gap-8 xl:p-8"
    @keyup.enter="bmiCalc"
  >
    <h2 class="tracking-tighter heading-m">Enter your details below</h2>
    <div class="flex gap-6">
      <div class="flex items-center gap-[18px] md:w-full">
        <input
          type="radio"
          name="metric"
          id="metric"
          value="metric"
          class="radio"
          v-model="measuringUnit"
          checked
        />
        <label for="metric" class="body-m-bold">Metric</label>
      </div>
      <div class="flex items-center gap-[18px] md:w-full">
        <input
          type="radio"
          name="imperial"
          value="imperial"
          id="imperial"
          class="radio"
          v-model="measuringUnit"
        />
        <label for="imperial" class="body-m-bold">Imperial</label>
      </div>
    </div>
    <div class="flex flex-col gap-4 input-field md:flex-row md:gap-6">
      <div>
        <div>
          <label for="height" class="text-dark-electric-blue body-s"
            >Height</label
          >
          <div
            class="flex items-center pr-6 mt-2 cursor-pointer input"
            v-show="measuringUnit === 'metric'"
          >
            <input
              class="w-full px-6 py-5 heading-m rounded-xl focus:outline-none"
              type="number"
              v-model="cm"
            /><span class="heading-m text-blue">cm</span>
          </div>
          <div v-show="measuringUnit === 'imperial'" class="flex gap-4">
            <div class="flex items-center pr-6 mt-2 cursor-pointer input">
              <input
                class="w-full px-6 py-5 heading-m rounded-xl focus:outline-none"
                type="number"
                v-model="ft"
              /><span class="heading-m text-blue">ft</span>
            </div>
            <div class="flex items-center pr-6 mt-2 cursor-pointer input">
              <input
                class="w-full px-6 py-5 heading-m rounded-xl focus:outline-none"
                type="number"
                v-model="inch"
              /><span class="heading-m text-blue">in</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="text-input">
          <label for="weight" class="text-dark-electric-blue body-s"
            >Weight</label
          >
          <div
            class="flex items-center pr-6 mt-2 cursor-pointer input"
            v-show="measuringUnit === 'metric'"
          >
            <input
              class="w-full px-6 py-5 heading-m rounded-xl focus:outline-none"
              type="number"
              v-model="kg"
            /><span class="heading-m text-blue">kg</span>
          </div>
          <div v-show="measuringUnit === 'imperial'" class="flex gap-4">
            <div class="flex items-center pr-6 mt-2 cursor-pointer input">
              <input
                class="w-full px-6 py-5 heading-m rounded-xl focus:outline-none"
                type="number"
                v-model="st"
              /><span class="heading-m text-blue">st</span>
            </div>
            <div class="flex items-center pr-6 mt-2 cursor-pointer input">
              <input
                class="w-full px-6 py-5 heading-m rounded-xl focus:outline-none"
                type="number"
                v-model="lbs"
              /><span class="heading-m text-blue">lbs</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col gap-6 p-8 result bg-blue rounded-2xl md:rounded-r-[100px]"
      v-if="!bmi"
    >
      <p class="heading-m text-pure-white">Welcome</p>
      <p class="body-s text-pure-white">
        Enter your height and weight and you’ll see your BMI result here
      </p>
    </div>

    <div class="flex flex-col gap-6 p-8 result bg-blue rounded-2xl" v-else>
      <p class="body-m-bold text-pure-white">Your BMI is...</p>
      <p class="heading-l text-pure-white">{{ bmi.toFixed(1) }}</p>
      <p class="body-s text-pure-white">
        Your BMI suggests you're {{ classification }}.
        {{ idealWeightRange }}
      </p>
    </div>
  </form>
</template>
