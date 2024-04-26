<template>
 <the-wrapper>
  <the-header />
  <main>
   <section class="bg-[var(--b-dark)]">
    <v-container>
     <div class="relative text-[var(--t-white)] pt-[340px] pb-[410px]">
      <div class="relative z-10">
       <h1 class="text-70 font-600 mb-[20px]">ROBO SCHOOL</h1>
       <p class="max-w-[470px] mb-[50px]">
        Курсы повышения квалификации по робототехнике для педагогов начальной
        школы
       </p>
       <v-button>Записаться на курс</v-button>
      </div>
      <img
       class="absolute bottom-0 right-[-200px] w-[783px] aspect-[0.853]"
       src="/src/assets/img/woman.png"
       alt=""
      />
     </div>
    </v-container>
   </section>
   <div class="">
    <v-container>
     <div class="py-[120px]">
      <p class="max-w-[890px] text-30 mb-[60px]">
       <span class="font-600">Robo School</span> – учреждение для формирования
       кадрового педагогического резерва в сфере робототехники и
       программирования
      </p>
      <div class="grid grid-cols-4 gap-[40px]">
       <about-item
        num="10"
        text="УМК по различным направлениям по робототехнике"
       />
       <about-item num="20" text="Школ, в которых запущена робототехника" />
       <about-item
        num="100"
        text="Педагогов прошедших курсы повышения квалификации"
       />
       <about-item
        num="10 000"
        text="Обученных детей на базе собственных центров"
       />
      </div>
     </div>
    </v-container>
   </div>
   <section class="bg-[var(--b-light)]">
    <v-container>
     <div class="py-[100px]">
      <h2 class="text-[50px] font-600 mb-[60px]">
       Что вы получите после курса
      </h2>
      <div class="grid grid-cols-3 gap-[40px]">
       <what-item
        title="Удостоверение"
        text="Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях"
       />
       <what-item
        title="Знания"
        text="По основам разработки учебно-методических комплексов
по робототехнике и программированию"
       />
       <what-item
        title="Практику"
        text="Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)"
        btn
        text-popup="При наличии свободных мест"
       />
      </div>
     </div>
    </v-container>
   </section>
  </main>
  <the-footer />
 </the-wrapper>
</template>

<script lang="ts">
export default {};
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
