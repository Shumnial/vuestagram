<template>
	<div class="gallery">
		<div class="gallery__wrapper">
			<Photo @openPhoto="openPhoto" v-for="item in photos" :photo="item" :key="item.id"/>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import Photo from "@/components/Photo";
Vue.component("Photo", Photo);

export default {
	name: "PhotoGallery",
	props: ["id"],
	data() {
		return {
			photos: [
				{
					name: "logo.png",
					id: 1
				},
				{
					name: "img1.jpg",
					id: 2
				},
				{
					name: "img2.jpg",
					id: 3
				}
			]
		};
	},
	methods: {
		openPhoto(photoName) {
			console.log("photoName: ", photoName);
		}
	}
};
</script>

<style type="text/css">
.gallery {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 0 auto;
	background-color: #fff;
	width: 100%;
	max-width: 1160px;
}
</style>
