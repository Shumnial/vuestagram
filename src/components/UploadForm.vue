<template>
  <form enctype="multipart/form-data" method="post" class="upload-form" novalidate="">
    <input 
    type="file" 
    id="upload-file" 
    class="upload-form__input" 
    name="filename" 
    required
    multiple
    accept="image/jpeg,image/png,image/gif"
    @change="$emit('handleFileSelect')">
    <p class="upload-form__text">Drop your files here</p>
<!--   <label for="upload-file" class="upload-form__label" title="Click to upload"><img src="../../static/upload.png"></label>-->
      <slot></slot>
  </form>
</template>

<script>
import Vue from "vue";

export default {
  name: "UploadForm",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.upload-form {
  position: relative;
  width: 100%;
  min-height: 200px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 40px;
  max-width: 1160px;
  border-radius: 15px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-form::before {
  position: absolute;
  content: "";
  width: 96%;
  height: 80%;
  border: 2px dashed gray;
}

.upload-form__text {
  color: black;
}

.upload-form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.upload-form__label {
  cursor: pointer;
}

.upload-form__label img {
  width: 100px;
  height: 100px;
  transition: transform 0.1s;
}

.upload-form__label:hover img {
  transform: scale(1.1);
}
</style>
