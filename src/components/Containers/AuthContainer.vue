<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Page",
  },
});
</script>

<template>
  <div class="bg-[#fff]">
    <div class="container mx-auto">
      <div class="flex items-center justify-center min-h-[100vh]">
        <div
          class="w-[95%] my-12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-[35%] 2xl:w-[30%] min-h-[300px] bg-white rounded-[10px] sm:rounded-[20px] px-1 sm:px-3 pb-12 pt-5"
        >
          <div class="auth-header mb-4">
            <!-- {{ title }} -->
          </div>

          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
