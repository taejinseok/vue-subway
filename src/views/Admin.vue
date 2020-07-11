<template>
  <div class="bg-gray-200 h-screen">
    <nav class="flex items-center justify-between flex-wrap bg-yellow-500 p-4">
      <div class="flex items-center flex-shrink-0 text-gray-800 w-full">
        <router-link :to="{ name: 'admin-home' }" class="mr-2">
          <img src="@/assets/logo_small.png" class="w-6" />
        </router-link>
        <div class="flex justify-start">
          <div class="hover:bg-yellow-400 px-2 py-1 rounded">
            <router-link
              :to="{ name: 'admin-station' }"
              class="block inline-block lg:mt-0 text-gray-800 text-sm"
            >
              역 관리
            </router-link>
          </div>
          <div class="hover:bg-yellow-400 px-2 py-1 rounded">
            <router-link
              :to="{ name: 'admin-line' }"
              class="block inline-block lg:mt-0 text-gray-800 text-sm"
            >
              노선 관리
            </router-link>
          </div>
          <div class="hover:bg-yellow-400 px-2 py-1 rounded">
            <router-link
              :to="{ name: 'admin-edge' }"
              class="block inline-block lg:mt-0 text-gray-800 text-sm"
            >
              구간 관리
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
.app-container {
  height: calc(100vh - 78px);
}

.main-logo {
  width: 170px;
}

body {
  overflow-y: hidden;
}

body.modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
}

.width-350px {
  width: 350px;
}

.width-400px {
  width: 400px;
}

.width-450px {
  width: 450px;
}

.top-28px {
  top: 28px;
}

.left-10px {
  left: 10px;
}

.right-10px {
  right: 10px;
}

.top-50 {
  top: 50%;
}

.bottom-6px {
  bottom: 6px;
}

.height-90 {
  height: 90%;
}
</style>
