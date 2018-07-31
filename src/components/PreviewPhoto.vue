<template>
	<span class="preview__photo"><img :src="file"></span>
</template>

<script type="text/javascript">
import Vue from "vue";

export default {
	name: "PreviewPhoto",
	props: ["file"],
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.preview__photo {
	position: relative;
  display: block;
  width: 15%;
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 5%;
  border-radius: 15px;
}

.preview__photo img {
	position: absolute;
	left: 0;
	top: 0;
	max-width: 100%;
	height: auto;
}

.preview__photo::after {
	content: "";
  display: block;
  padding-bottom: 50%;
}
</style>
