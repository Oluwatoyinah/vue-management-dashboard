<script setup>
import AuthContainer from "@/components/Containers/AuthContainer.vue";
import PlainInput from "@/components/form/PlainInput.vue";
import PasswordInput from "@/components/form/PasswordInput.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <AuthContainer>
    <div class="w-11/12 mx-auto">
      <div class="header mb-5 text-center">
        <h2 class="text-[30px] -tracking-[1.3px] font-bold tx-blue">
          Register
        </h2>
        <p class="text-[#33333390] text-[14px]">
          Hi! create an account to get started.
        </p>
      </div>

      <div>
        <form action="">
          <div class="mb-3">
            <PlainInput label="Full name" name="text" value="" />
          </div>

          <div class="mb-3">
            <PlainInput label="Email address" name="email" value="" />
          </div>

          <div class="mb-3">
            <PasswordInput label="Password" name="password" />
          </div>

          <div class="mb-3">
            <PasswordInput label="Confirm Password" name="confirm_password" />
          </div>

          <div class="mt-5">
            <RouterLink to="/dashboard">
              <button
                class="w-full bg-[#333] p-3 text-white rounded-[5px] text-[13px]"
              >
                Submit
              </button>
            </RouterLink>

            <p class="text-[13px] text-center mt-1">
              Already have an account?
              <RouterLink to="/login" class="underline"> Login </RouterLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  </AuthContainer>
</template>
