<template>
	<div class="gallery">
		<Photo/>
	</div>
</template>

<script>
import Vue from "vue";
import Photo from "@/components/Photo";
Vue.component("Photo", Photo);

export default {
	name: "PhotoGallery",
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.gallery {
	margin: 0 auto;
	background-color: #fff;
	height: 500px;
	width: 100%;
	max-width: 1160px;
}
</style>
