<template>
  <v-app>
    <SideBar />
    <Top-bar />
    <v-main>
      <SanPhamVue />
    </v-main>
  </v-app>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";
import SanPhamVue from "../Product/SanPham.vue";
export default {
  components: { TopBar, SideBar, SanPhamVue },
};
</script>
<style>
</style>