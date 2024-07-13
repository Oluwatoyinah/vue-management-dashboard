<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div
      className="dashboard-main-content-top-bar shadow-sm flex justify-between items-center gap-1 !py-2"
    >
      <p className="text-[14px] sm:text-[18px] font-semibold">{{ title }}</p>
      <div className="flex gap-3 items-center">
        <span className="bg-green-300 p-3 rounded-[22%] text-white">
          <!-- <FaCog /> -->
        </span>

        <div className="w-[30px] h-[30px] bg-[#eee] rounded-full"></div>
      </div>
    </div>
    <div className="dashboard-main-content-body p-2 sm:p-3">
      <div className="container-fluid  md:px-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
