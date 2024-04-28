<template>
 <a
  href="#"
  class="text-center inline-block text-[var(--t-white)] bg-[var(--b-red)] rounded-[5px] p-[25px_54px]"
  ><slot></slot
 ></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'v-button',
});
</script>

<style scoped></style>
