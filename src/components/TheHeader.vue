<template>
 <header class="absolute top-0 left-0 w-full z-50">
  <v-container class="!max-w-[1740px]">
   <div
    class="relative flex items-center justify-between text-[var(--t-white)] py-[30px]"
   >
    <a href="#" class="relative text-30 font-700 z-10">ROBO.SCHOOL</a>
    <nav class="absolute inset-0 flex items-center justify-center">
     <ul class="flex items-center justify-center gap-[40px]">
      <li class="">
       <a href="#" class="text-20 font-400">О школе</a>
      </li>
      <li class="">
       <a href="#" class="text-20 font-400">Тренеры</a>
      </li>
      <li class="">
       <a href="#" class="text-20 font-400">Стоимость</a>
      </li>
     </ul>
    </nav>
    <a href="tel:+71234567891" class="relative text-30 font-600 z-10"
     >+7 123 456 78 91</a
    >
   </div>
  </v-container>
 </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
 name: 'the-header',
});
</script>
