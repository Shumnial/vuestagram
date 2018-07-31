<template>
  <div id="app">
    <!-- <router-link to="/upload-form">Форма загрузки</router-link>
    <router-link to="/photo-gallery">Галерея</router-link> -->
    <router-view></router-view>
    <UploadForm @handleFileSelect="handleFileSelect">
    </UploadForm>
    <Preview :previewFiles="previewFiles"></Preview>
    <PhotoGallery :previewFiles="previewFiles" @openPhoto="openPhoto"/>
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
      previewFiles: [],
      src: null,
      seen: false
    };
  },
  methods: {
    openPhoto (photo) {
      this.activePhoto = photo.name;
      this.displayModal();
    },
    displayModal () {
      this.seen = !this.seen;
    },
    openForm () {
      this.displayForm();
    },
    handleFileSelect (evt) {
      const target = evt.currentTarget;
      const files = target.files;
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.onload = () => {
          this.previewFiles.push(reader.result); 
        }
        reader.readAsDataURL(files[i]);
      }
      target.value = '';
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
