<template>
 <footer class="bg-[var(--b-dark)]">
  <v-container>
   <div class="flex justify-between text-[var(--t-white)] py-[40px]">
    <div class="flex flex-col gap-[10px]">
     <a href="#" class="text-30 font-700">ROBO.SCHOOL</a>
     <span class="text-16 text-[rgba(255,255,255,0.7)]">© ROBO.SCHOOL</span>
    </div>
    <a href="tel:+78000001122" class="text-30 font-600">+7 800 000 11 22</a>
   </div>
  </v-container>
 </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
 name: 'the-footer',
});
</script>
