<script setup>
  defineProps({
    inputType: {
      type: String,
      default: "text",
    },
    name: String,
    label: String,
    value: String,
  });
</script>

<template>
  <div>
    <label :htmlFor="name" class="text-[13px]">
      {{ label }}
    </label>
    <input
      :type="inputType"
      :name="name"
      class="border border-[#33333330] block w-full py-3 px-3 rounded-[5px] outline-none mt-1"
      :id="name"
      :value="value" 
    />
  </div>
</template>
