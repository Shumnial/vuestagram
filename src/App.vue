<template>
  <div id="app">
    <!-- <router-link to="/upload-form">Форма загрузки</router-link>
    <router-link to="/photo-gallery">Галерея</router-link> -->
    <router-view></router-view>
    <UploadForm/>
    <PhotoGallery/>
    <PhotoModal/>
  </div>
</template>

<script>
import Vue from "vue";
import UploadForm from "@/components/UploadForm";
import PhotoGallery from "@/components/PhotoGallery";
import PhotoModal from "@/components/PhotoModal";
Vue.component("UploadForm", UploadForm);
Vue.component("PhotoGallery", PhotoGallery);
Vue.component("PhotoModal", PhotoModal);

export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: #fff;
  margin-top: 60px;
}

body {
  background-color: #232321;
}

a {
  color: #fff;
}
</style>
