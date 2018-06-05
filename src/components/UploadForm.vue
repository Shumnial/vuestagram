<template>
  <form action="" class="upload-form">
    <input type="file" id="upload-file" class="upload-form__input" name="filename" required="">
    <label for="upload-file" class="upload-form__label" title="Click to download"><img src="@/assets/logo.png"></label>
  </form>
</template>

<script>
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
}

.upload-form__input {
  display: none;
}

.upload-form__label {
  cursor: pointer;
}

.upload-form__label img {
  transition: transform 0.1s;
}

.upload-form__label:hover img {
  transform: scale(1.1);
}
</style>
