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
        <h2 class="text-[30px] -tracking-[1.3px] font-bold tx-blue">Login</h2>
        <p class="text-[#33333390] text-[14px]">
          Welcome! Sign in to continue.
        </p>
      </div>

      <div>
        <form action="">
          <div class="mb-3">
            <PlainInput label="Email address" name="email" value="" />
          </div>

          <div class="mb-3">
            <PasswordInput label="Password" name="password" />
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
              Don't have an account?
              <RouterLink to="/register" class="underline">
                Register
              </RouterLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  </AuthContainer>
</template>
