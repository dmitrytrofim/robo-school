<template>
 <div class="flex flex-col">
  <span class="text-70 font-600 text-[var(--t-red)]">{{ num }}</span>
  <p class="leading-[1.6] text-[var(--t-gray)]">{{ text }}</p>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'about-item',
 props: {
  num: String,
  text: String,
 },
});
</script>
