<template>
  <div class="flex justify-center items-center app-container">
    <div class="text-center">
      <img src="@/assets/main_logo.png" class="main-logo mx-auto" />
      <p class="mt-2 text-gray-700">
        RunningMap Admin 페이지입니다. <br />
        제공되는 템플릿을 활용해 프로젝트를 완성해 보세요!
      </p>
      <ul class="text-blue-700">
        <li class="inline-block p-1">
          <router-link :to="{ name: 'admin-station' }" class="underline"
            >역 관리</router-link
          >
        </li>
        <li class="inline-block p-1">
          <router-link :to="{ name: 'admin-line' }" class="underline"
            >노선 관리</router-link
          >
        </li>
        <li class="inline-block p-1">
          <router-link :to="{ name: 'admin-edge' }" class="underline"
            >구간 관리</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHome"
};
</script>

<style scoped></style>
