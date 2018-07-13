<template>
  <div id="app">
    <!-- <router-link to="/upload-form">Форма загрузки</router-link>
    <router-link to="/photo-gallery">Галерея</router-link> -->
    <router-view></router-view>
    <UploadForm @handleFileSelect="handleFileSelect">
      <FormModal 
        v-if="formSeen" 
        @displayForm="displayForm"><img class="photo-modal__img" :src="`http://via.placeholder.com/500x400/${getPhotoColor()}`">
      </FormModal>
    </UploadForm>
    <Preview :file="files[0]"></Preview>
    <PhotoGallery @openPhoto="openPhoto"/>
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
import Photo from "@/components/Photo";
import PhotoModal from "@/components/PhotoModal";
import UploadCard from "@/components/UploadCard";
import Preview from "@/components/Preview";
import PreviewPhoto from "@/components/PreviewPhoto";
import Overlay from "@/components/Overlay";
Vue.component("UploadForm", UploadForm);
Vue.component("FormModal", FormModal);
Vue.component("UploadCard", UploadCard);
Vue.component("PhotoGallery", PhotoGallery);
Vue.component("Photo", Photo);
Vue.component("PhotoModal", PhotoModal);
Vue.component("Preview", Preview);
Vue.component("PreviewPhoto", PreviewPhoto);
Vue.component("Overlay", Overlay);

export default {
  name: "App",
  props: ["photo"],
  data() {
    return {
      activePhoto: null,
      files: [],
      src: null,
      seen: false,
      formSeen: false,
      colors: [
        "ff5800",
        "22af6b",
        "51b0d4",
        "364c95",
        "8b38d1",
        "d98ee2",
        "e1306a",
        "e3d42f",
        "e5a638",
        "b61a0e",
        "f8f8f8"
      ]
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
    },
    getPhotoColor() {
      const color = Math.floor(Math.random() * (this.colors.length - 1)) + 1;
      return this.colors[color];
    },
    handleFileSelect(evt) {
      let files = document.querySelector("#upload-file").files;
      console.log("files: ", files);
      for (let i = 0; i < files.length; i++) {
        this.files.push(files[i].name);
      }
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
