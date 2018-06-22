<template>
  <div id="app">
    <!-- <router-link to="/upload-form">Форма загрузки</router-link>
    <router-link to="/photo-gallery">Галерея</router-link> -->
    <router-view></router-view>
    <UploadForm/>
    <UploadCard></UploadCard>
    <PhotoGallery 
      @openPhoto="openPhoto"/>
    <PhotoModal 
      v-if="seen" 
      :photo="activePhoto"
      @displayModal="displayModal"><img class="photo-modal__img" :src="`/static/${activePhoto}`"></PhotoModal>
  </div>
</template>

<script>
import Vue from "vue";
import UploadForm from "@/components/UploadForm";
import PhotoGallery from "@/components/PhotoGallery";
import PhotoModal from "@/components/PhotoModal";
import UploadCard from "@/components/UploadCard";
Vue.component("UploadForm", UploadForm);
Vue.component("UploadCard", UploadCard);
Vue.component("PhotoGallery", PhotoGallery);
Vue.component("PhotoModal", PhotoModal);

export default {
  name: "App",
  props: ["photo"],
  data() {
    return {
      activePhoto: null,
      seen: false
    };
  },
  methods: {
    openPhoto(photo) {
      this.activePhoto = photo.name;
      this.displayModal();
    },
    displayModal() {
      this.seen = !this.seen;
    }
  }
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
