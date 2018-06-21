<template>
	<a href="" @click.prevent="$emit('openPhoto', photo.name)" class="gallery__photo">
		<img :src="'/static/' + photo.name" :data-id="photo.id" alt="">
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
	background-color: #41b883;
	margin-right: 5%;
	margin-bottom: 5%;
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
}

.gallery__photo:nth-child(4n) {
	margin-right: 0;
}
</style>
