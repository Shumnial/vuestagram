<template>
	<div class="gallery">
		<div class="gallery__wrapper">
			<Photo 
				@openPhoto="$emit('openPhoto', arguments[0])" 
				@deletePhoto="deletePhoto" 
				v-for="item in photos" 
				:photo="item" 
				:key="item.id"/>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import Photo from "@/components/Photo";
Vue.component("Photo", Photo);

export default {
	name: "PhotoGallery",
	props: [],
	data() {
		return {
			photos: [
				{
					name: "logo.png",
					id: 0
				},
				{
					name: "img1.jpg",
					id: 1
				},
				{
					name: "img2.jpg",
					id: 2
				}
			]
		};
	},
	methods: {
		deletePhoto(photo) {
			const index = this.photos.findIndex(el => el.name === photo.name);
			this.photos.splice(index, 1);
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
	min-height: 297px;
}
</style>
