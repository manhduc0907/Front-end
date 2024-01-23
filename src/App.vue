<template>
  <v-app>
    <SideBar />
    <Top-bar />
    <v-main>
      <!-- <SanPhamVue />
      <UsersVue /> -->
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";
// import SanPhamVue from "../src/views/Product/SanPham.vue";
// import UsersVue from "../src/views/Product/Users.vue";
export default {
  components: { TopBar, SideBar },
};
</script>
<style>
</style>