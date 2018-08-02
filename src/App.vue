<template>
  <div id="app">
    <!-- <router-link to="/upload-form">Форма загрузки</router-link>
    <router-link to="/photo-gallery">Галерея</router-link> -->
    <router-view></router-view>
    <UploadForm @handleFileSelect="handleFileSelect">
    </UploadForm>
    <Preview 
    v-if="previewFiles.length > 0"
    :previewFiles="previewFiles"
    @openPreviewCard="openPreviewCard"
    @uploadPhotos="uploadPhotos" 
    @deletePreview="deletePreview"
    @deleteAllPreview="deleteAllPreview">
    </Preview>
    <Gallery
    v-if="photos.length > 0"
    :photos="photos" 
    @openPhoto="openPhoto" 
    @deletePhoto="deletePhoto">
    </Gallery>
    <GalleryModal 
      v-if="seen" 
      :photo="activePhoto"
      @displayModal="displayModal"><img class="photo-modal__img" :src="`${activePhoto}`">
    </GalleryModal>
  </div>
</template>

<script>
import Vue from "vue";
import UploadForm from "@/components/UploadForm";
import Gallery from "@/components/Gallery";
import GalleryPhoto from "@/components/GalleryPhoto";
import GalleryModal from "@/components/GalleryModal";
import Preview from "@/components/Preview";
import PreviewPhoto from "@/components/PreviewPhoto";
import Overlay from "@/components/Overlay";
Vue.component("UploadForm", UploadForm);
Vue.component("Gallery", Gallery);
Vue.component("GalleryPhoto", GalleryPhoto);
Vue.component("GalleryModal", GalleryModal);
Vue.component("Preview", Preview);
Vue.component("PreviewPhoto", PreviewPhoto);
Vue.component("Overlay", Overlay);

export default {
  name: "App",
  props: [],
  data() {
    return {
      photos: [
        {
          name: "/static/img1.jpg",
          id: 0
        },
        {
          name: "/static/img2.jpg",
          id: 1
        },
        {
          name: "/static/img3.jpg",
          id: 2
        }
      ],
      activePhoto: null,
      previewFiles: [],
      src: null,
      seen: false
    };
  },
  methods: {
    displayModal () {
      this.seen = !this.seen;
    },
    openPhoto (photo) {
      this.activePhoto = photo.name;
      this.displayModal();
    },
    uploadPhotos () {
      this.photos = this.photos.concat(this.previewFiles);
      this.previewFiles = [];
    },
    deletePhoto (photo) {
      const index = this.photos.findIndex(el => el.name === photo.name);
      this.photos.splice(index, 1);
    },
    openPreviewCard (file) {
      this.activePhoto = file.name;
      this.displayModal();
    },
    deletePreview (file) {
      const index = this.previewFiles.findIndex(el => el.name === file.name)
      this.previewFiles.splice(index, 1);
    },
    deleteAllPreview () {
      this.previewFiles = [];
    },
    handleFileSelect (evt) {
      const target = evt.currentTarget;
      const files = target.files;
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.onload = () => {
          this.previewFiles.push({'name': reader.result}); 
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
