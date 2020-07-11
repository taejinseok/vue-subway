<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">사용자 페이지</router-link>
      <router-link :to="{ name: 'admin-home' }">관리자 페이지</router-link>
    </div>
    <router-view />
  </div>
</template>
