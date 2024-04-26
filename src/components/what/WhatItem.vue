<template>
 <div class="flex flex-col">
  <span class="flex items-center gap-[10px] text-24 font-600 mb-[20px]"
   >{{ title }}
   <button
    v-if="btn"
           @[desktop?'mouseenter':'click']="togglePopup"
    @[desktop&&'mouseleave']="togglePopup"
    class="relative w-[24px] aspect-square bg-[url('/src/assets/img/svg/i.svg')] bg-center bg-cover bg-no-repeat"
   >
    <span
     v-show="popup"
     class="absolute left-[50%] bottom-[40px] translate-x-[-50%] text-16 font-400 whitespace-nowrap bg-[var(--b-white)] p-[15px_20px] shadow-[0_2px_8px_0_rgba(20,16,36,0.1)] rounded-[5px] pointer-events-none"
     >{{ textPopup }}</span
    >
   </button></span
  >
  <p class="leading-[1.6] text-[var(--t-gray)]">
   {{ text }}
  </p>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'what-item',
 props: {
  title: String,
  text: String,
  btn: {
   type: Boolean,
   default: false,
  },
  textPopup: {
   type: String,
   default: '',
  },
 },
 data() {
  return {
   popup: false,
   desktop: true,
  };
 },
 mounted() {
  window.innerWidth > 1024 ? (this.desktop = true) : (this.desktop = false);
 },
 methods: {
  togglePopup() {
    this.popup = !this.popup;
  },
 },
});
</script>
