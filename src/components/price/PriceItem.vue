<template>
 <div
  class="flex flex-col w-full items-center text-center p-[40px] rounded-[20px] border-[1px] border-[rgba(20,16,36,0.2)] transition-[transform_0.2s_linear_0s,_background-color_0.2s_linear_0s] hover:scale-[1.1] hover:bg-[var(--b-dark)] [&_span]:hover:text-[var(--t-white)]"
 >
  <span class="text-30 font-600 mb-[80px] transition-[color_0.2s_linear_0s]">{{
   name
  }}</span>
  <span class="text-50 font-600 mb-[20px] transition-[color_0.2s_linear_0s]">{{
   cost
  }}</span>
  <span class="grow mb-[60px] transition-[color_0.2s_linear_0s]">{{
   descr
  }}</span>
  <v-button class="self-stretch">Оставить заявку</v-button>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'price-item',
 props: ['name', 'cost', 'descr'],
});
</script>
