<template>
	<transition name="fade">
		<Overlay>
		  <div class="photo-modal">
		  	<div class="photo-modal__wrapper">
		  		<div class="photo-modal__col photo-modal__col--left">
		  			<img class="photo-modal__img" :src="`${photo.name}`">
		  		</div>
		  		<div class="photo-modal__col photo-modal__col--right">
		  			<p class="photo-modal__descr">{{ photo.descr }}</p>
		  		</div>
		  		<button class="photo-modal__close" @click="$emit('displayModal')">X</button>
		  	</div>
		  </div>
		</Overlay>
	</transition>
</template>

<script>

export default {
	name: "GalleryModal",
	props: ["photo"],
	data() {
		return {};
	}
};
</script>

<style>
.photo-modal {
	position: fixed;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
	margin: auto;
	background-color: #fff;
	z-index: 1000;
	background-color: transparent;
}

.photo-modal__wrapper {
	display: flex;
	justify-content: center;
	position: relative;
	padding: 2% 2.5%;
	max-width: 100%;
}

.photo-modal__col--left {
	width: 50%;
}

.photo-modal__col--right {
	width: 25%;
	background-color: #fff;
	opacity: 0.95;
	padding: 20px;
	box-sizing: border-box;
}

.photo-modal__img {
	max-width: 100%;
	height: auto;
}

.photo-modal__descr {
	text-align: left;
	color: #000;
	margin: 0;
}

.photo-modal__close {
	position: absolute;
	top: 0;
	right: 11.5%;
	cursor: pointer;
}
</style>
