<template>
 <the-wrapper>
  <the-header />
  <main>
   <section class="bg-[var(--b-dark)]">
    <v-container>
     <div
      class="relative flex flex-col gap-[20px] text-[var(--t-white)] pt-[340px] pb-[410px] max-[1024px]:p-[100px_0_0]"
     >
      <div
       class="relative flex flex-col items-start z-10 max-[1024px]:items-center max-[1024px]:text-center"
      >
       <h1 class="text-70 font-600 mb-[20px]">ROBO SCHOOL</h1>
       <p class="max-w-[470px] mb-[50px]">
        Курсы повышения квалификации по робототехнике для педагогов начальной
        школы
       </p>
       <v-button>Записаться на курс</v-button>
      </div>
      <img
       class="absolute bottom-0 right-[-200px] w-[783px] aspect-[0.853] max-[1024px]:relative max-[1024px]:w-full max-[1024px]:max-w-[783px] max-[1024px]:right-0 max-[1024px]:self-center"
       src="/src/assets/img/woman.png"
       alt=""
      />
     </div>
    </v-container>
   </section>
   <div class="">
    <v-container>
     <div class="py-[120px] max-[1024px]:py-[100px]">
      <p class="max-w-[890px] text-30 mb-[60px]">
       <span class="font-600">Robo School</span> – учреждение для формирования
       кадрового педагогического резерва в сфере робототехники и
       программирования
      </p>
      <div
       class="grid grid-cols-4 gap-[40px] max-[1024px]:grid-cols-2 max-[1024px]:gap-[20px] max-[360px]:grid-cols-1"
      >
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
      <h2 class="title mb-[60px]">Что вы получите после курса</h2>
      <div class="grid grid-cols-3 gap-[40px] max-[1024px]:grid-cols-1">
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
   <section class="">
    <v-container>
     <div class="py-[100px]">
      <h2 class="title mb-[60px]">Профессиональные тренеры</h2>
      <Splide :options="splideOptions" aria-label="My Favorite Images">
       <SplideSlide
        ><img
         class="w-full h-full object-cover object-center"
         src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
         alt="Sample 1"
       /></SplideSlide>
       <SplideSlide
        ><img
         class="w-full h-full object-cover object-center"
         src="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_1280.jpg"
         alt="Sample 1"
       /></SplideSlide>
       <SplideSlide
        ><img
         class="w-full h-full object-cover object-center"
         src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg"
         alt="Sample 1"
       /></SplideSlide>
      </Splide>
     </div>
    </v-container>
   </section>

   <section class="">
    <v-container>
     <div class="pb-[100px]">
      <h2 class="title mb-[60px]">Выберите нужный пакет</h2>
      <div
       class="grid grid-cols-3 gap-[40px] max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1"
      >
       <price-item
        name="– PRO –"
        cost="20.000 ₽"
        descr="УМК по робототетхнике и программированию"
       />
       <price-item
        name="– ROBO –"
        cost="15.000 ₽"
        descr="УМК по робототетхнике"
       />
       <price-item
        name="– PROG –"
        cost="10.000 ₽"
        descr="УМК по программированию"
       />
      </div>
     </div>
    </v-container>
   </section>

   <section
    class="bg-[var(--b-red)] py-[100px] bg-[url('/src/assets/img/svg/procent.svg')] bg-repeat-x bg-bottom"
   >
    <v-container>
     <div
      class="flex justify-between text-[var(--t-white)] max-[1024px]:flex-col max-[1024px]:items-center gap-[30px] max-[1024px]:text-center"
     >
      <div class="max-w-[400px]">
       <h2 class="text-36 font-600 leading-[1.3] mb-[20px]">
        Запишитесь на курс со скидкой 10%
       </h2>
       <p class="text-20">Акция действительна до 10 марта 2022 года</p>
      </div>
      <form action="#" class="w-full max-w-[500px] flex flex-col gap-[10px]">
       <input
        class="rounded-[5px] p-[20px] text-[var(--t-dark)] placeholder:text-[rgba(40,41,68,0.7)]"
        type="text"
        placeholder="Имя"
       />
       <input
        class="rounded-[5px] p-[20px] text-[var(--t-dark)] placeholder:text-[rgba(40,41,68,0.7)]"
        type="tel"
        placeholder="Телефон"
       />
       <input
        class="rounded-[5px] p-[20px] text-[var(--t-dark)] placeholder:text-[rgba(40,41,68,0.7)]"
        type="email"
        placeholder="E-mail"
       />
       <button class="bg-[var(--b-dark)] rounded-[5px] p-[20px]">
        Оформить заявку
       </button>
      </form>
     </div>
    </v-container>
   </section>
  </main>
  <the-footer />
 </the-wrapper>
</template>

<script lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
 components: {
  Splide,
  SplideSlide,
 },
 data() {
  return {
   splideOptions: {
    perPage: 2,
    breakpoints: {
     640: {
      perPage: 1,
     },
    },
   },
  };
 },
};
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
