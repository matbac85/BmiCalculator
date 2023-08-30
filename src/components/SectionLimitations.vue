<template>
  <div
    class="grid gap-4 px-6 pb-20 md:grid md:grid-cols-12 md:gap-y-4 md:gap-x-4 xl:grid-cols-12 xl:gap-8"
  >
    <div
      class="pb-10 text-center md:col-start-1 md:col-end-13 md:row-start-1 md:row-end-2 xl:col-start-2 xl:col-end-7 xl:text-left"
    >
      <h2
        class="font-semibold text-[32px] text-gunmetal tracking-tight leading-[110%] mb-8 xl:heading-l"
      >
        Limitations of BMI
      </h2>
      <p class="body-m text-dark-electric-blue">
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>
    </div>

    <div
      class="flex flex-col gap-4 p-6 shadow-limitation-card rounded-2xl bg-pure-white md:col-start-1 md:col-end-7 md:row-start-2 md:row-end-3 md:p-8 xl:col-start-8 xl:col-end-11 xl:row-start-1 xl:row-end-2"
    >
      <h3 class="flex items-center gap-4 heading-s">
        <img
          src="../assets/images/icon-gender.svg"
          alt="icon representing both male and female"
        />
        Gender
      </h3>
      <p class="body-m text-dark-electric-blue">
        The development and body fat composition of girls and boys vary with
        age. Consequently, a child's age and gender are considered when
        evaluating their BMI.
      </p>
    </div>
    <div
      class="flex flex-col gap-4 p-6 shadow-limitation-card rounded-2xl bg-pure-white md:col-start-7 md:col-end-13 md:row-start-2 md:row-end-3 md:p-8 xl:col-start-6 xl:col-end-9"
    >
      <h3 class="flex items-center gap-4 heading-s">
        <img
          src="../assets/images/icon-age.svg"
          alt="icon representing a birthday cake"
        />
        Age
      </h3>
      <p class="body-m text-dark-electric-blue">
        In aging individuals, increased body fat and muscle loss may cause BMI
        to underestimate body fat content.
      </p>
    </div>
    <div
      class="flex flex-col gap-4 p-6 shadow-limitation-card rounded-2xl bg-pure-white md:col-start-1 md:col-end-7 md:row-start-3 md:row-end-4 md:p-8 xl:col-start-9 xl:col-end-12 xl:row-start-2 xl:row-end-3"
    >
      <h3 class="flex items-center gap-4 heading-s">
        <img
          src="../assets/images/icon-muscle.svg"
          alt="icon representing an arm showing its muscles"
        />
        Muscle
      </h3>
      <p class="body-m text-dark-electric-blue">
        BMI may misclassify muscular individuals as overweight or obese, as it
        doesn't differentiate muscle from fat.
      </p>
    </div>
    <div
      class="flex flex-col gap-4 p-6 shadow-limitation-card rounded-2xl bg-pure-white md:col-start-7 md:col-end-13 md:row-start-3 md:row-end-4 md:p-8 xl:col-start-4 xl:col-end-7 xl:row-start-3"
    >
      <h3 class="flex items-center gap-4 heading-s">
        <img
          src="../assets/images/icon-pregnancy.svg"
          alt="icon representing an emoticon of a baby"
        />
        Pregnancy
      </h3>
      <p class="body-m text-dark-electric-blue">
        Expectant mothers experience weight gain due to their growing baby.
        Maintaining a healthy pre-pregnancy BMI is advisable to minimise health
        risks for both mother and child.
      </p>
    </div>
    <div
      class="flex flex-col gap-4 p-6 shadow-limitation-card rounded-2xl bg-pure-white md:col-start-4 md:col-end-10 md:row-start-4 md:row-end-5 md:p-8 xl:col-start-7 xl:col-end-10 xl:row-start-3 xl:row-end-4"
    >
      <h3 class="flex items-center gap-4 heading-s">
        <img
          src="../assets/images/icon-race.svg"
          alt="icon representing a simplified human being"
        />
        Race
      </h3>
      <p class="body-m text-dark-electric-blue">
        Certain health concerns may affect individuals of some Black and Asian
        origins at lower BMIs than others. To learn more, it is advised to
        discuss this with your GP or practice nurse.
      </p>
    </div>
  </div>
</template>
