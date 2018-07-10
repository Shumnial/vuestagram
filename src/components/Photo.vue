<template>
	<a href="" class="gallery__photo">
		<button class="gallery__close-btn" @click.prevent="$emit('deletePhoto', photo)">X</button>
		<img
			@click.prevent="$emit('openPhoto', photo)"  
			:src="'/static/' + photo.name" 
			:data-id="photo.id" 
			alt=""/>
	</a>
</template>

<script>
export default {
	name: "Photo",
	props: ["photo"],
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.gallery__wrapper {
	width: 100%;
	display: flex;
	align-items: baseline;
	align-content: space-between;
	flex-wrap: wrap;
	padding: 5%;
	padding-bottom: 0;
}

.gallery__photo {
	position: relative;
	display: block;
	width: 21.25%;
	margin-right: 5%;
	margin-bottom: 5%;
	border-radius: 15px;
}

.gallery__close-btn {
	display: none;
	position: absolute;
	right: 0;
	z-index: 1;
	cursor: pointer;
}

.gallery__photo:hover .gallery__close-btn {
	display: block;
}

.gallery__photo::after {
	content: "";
	display: block;
	padding-bottom: 90%;
}

.gallery__photo img {
	position: absolute;
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 15px;
}

.gallery__photo:nth-child(4n) {
	margin-right: 0;
}
</style>
