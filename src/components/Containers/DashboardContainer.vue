<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div className="sm:p-2 p-0.5">
    <main
      className="dashboard-layout container-fluid p-2 border border-[#33333330] rounded-[5px] sm:rounded-[20px]"
    >
      <div
        className="dashboard-side-nav  lg:rounded-[20px] border border-[#33333330] bg-[#fff]"
      >
        <div className="dashboard-side-nav-header mx-2.5 mb-4 hidden lg:block">
          <div className=" mt-2">
            <RouterLink to="/dashboard">
              <h1 class="font-bold text-[18px]">Logo</h1>
            </RouterLink>
          </div>
        </div>

        <div className="dashboard-side-nav-body">
          <div className="dashboard-side-nav-list flex">
            <ul
              className="flex items-center justify-evenly lg:block lg:flex-col flex-grow"
            >
              <li>
                <RouterLink
                  className="justify-center flex-col gap-1"
                  to="/dashboard"
                >
                  <span class="h-[20px] w-[20px] bg-slate-500 block"></span>
                  <!-- <span className="!text-[9px] !sm:text-[11px] text">
                    Home
                  </span> -->
                </RouterLink>
              </li>

              <li>
                <RouterLink
                  className="justify-center flex-col gap-1"
                  to="/dashboard/projects"
                >
                  <span class="h-[20px] w-[20px] bg-slate-500 block"></span>
                  <!-- <span className="!text-[9px] !sm:text-[11px] text">
                    Projects
                  </span> -->
                </RouterLink>
              </li>

              <li>
                <RouterLink
                  className="justify-center flex-col gap-1"
                  to="/dashboard"
                >
                  <span class="h-[20px] w-[20px] bg-slate-500 block"></span>
                  <!-- <span className="!text-[9px] !sm:text-[11px] text">
                    Home
                  </span> -->
                </RouterLink>
              </li>

              <li>
                <RouterLink
                  className="justify-center flex-col gap-1"
                  to="/dashboard/projects"
                >
                  <span class="h-[20px] w-[20px] bg-slate-500 block"></span>
                  <!-- <span className="!text-[9px] !sm:text-[11px] text">
                    Projects
                  </span> -->
                </RouterLink>
              </li>
            </ul>

            <div
              className="p-3 px-4 bg-black flex justify-center items-center lg:hidden"
            >
              <RouterLink to="/login">
                <button>
                  <span class="h-[16px] w-[16px] bg-white block"></span>
                </button>
              </RouterLink>
            </div>
          </div>

          <div className="dashboard-side-nav-bottom pb-3 hidden lg:block">
            <div className="p-2 text-center flex items-center justify-center">
              <RouterLink to="/login">
                <button>
                  <span class="h-[26px] w-[26px] bg-slate-800 block"></span>
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-main-content  rounded-[10px]">
        <router-view />
      </div>
    </main>
  </div>
</template>
