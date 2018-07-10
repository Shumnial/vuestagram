<template>
  <form enctype="multipart/form-data" method="post" class="upload-form" novalidate="">
    <input type="file" id="upload-file" class="upload-form__input" name="filename"  required="">
    <label for="upload-file" class="upload-form__label" title="Click to upload"><img src="../../static/upload.png"
      @click.prevent="$emit('openForm')"
      ></label>
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
  margin-bottom: 40px;
}

.upload-form__input {
  display: none;
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
