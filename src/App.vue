<template>
  <div id="app">
    <!-- <router-link to="/upload-form">Форма загрузки</router-link>
    <router-link to="/photo-gallery">Галерея</router-link> -->
    <router-view></router-view>
    <UploadForm @openForm="openForm">
      <FormModal 
        v-if="formSeen" 
        @displayForm="displayForm"><img class="photo-modal__img" src="/static/img2.jpg">
      </FormModal>
    </UploadForm>
    <PhotoGallery 
      @openPhoto="openPhoto"/>
    <PhotoModal 
      v-if="seen" 
      :photo="activePhoto"
      @displayModal="displayModal"><img class="photo-modal__img" :src="`/static/${activePhoto}`">
    </PhotoModal>
  </div>
</template>

<script>
import Vue from "vue";
import UploadForm from "@/components/UploadForm";
import FormModal from "@/components/FormModal";
import PhotoGallery from "@/components/PhotoGallery";
import PhotoModal from "@/components/PhotoModal";
import UploadCard from "@/components/UploadCard";
import Overlay from "@/components/Overlay";
Vue.component("UploadForm", UploadForm);
Vue.component("FormModal", FormModal);
Vue.component("UploadCard", UploadCard);
Vue.component("PhotoGallery", PhotoGallery);
Vue.component("PhotoModal", PhotoModal);
Vue.component("Overlay", Overlay);

export default {
  name: "App",
  props: ["photo"],
  data() {
    return {
      activePhoto: null,
      seen: false,
      formSeen: false
    };
  },
  methods: {
    openPhoto(photo) {
      this.activePhoto = photo.name;
      this.displayModal();
    },
    displayModal() {
      this.seen = !this.seen;
    },
    displayForm() {
      this.formSeen = !this.formSeen;
    },
    openForm() {
      this.displayForm();
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
