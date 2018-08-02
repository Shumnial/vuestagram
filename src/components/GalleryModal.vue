<template>
	<transition name="fade">
		<Overlay>
		  <div class="photo-modal">
		  	<div class="photo-modal__wrapper">
		  		<slot></slot>
		  		<button class="photo-modal__close" @click="$emit('displayModal')">X</button>
		  	</div>
		  </div>
		</Overlay>
	</transition>
</template>

<script>

export default {
	name: "GalleryModal",
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
	position: relative;
	display: inline-block;
	padding: 2% 2.5%;
	max-width: 60%;
}

.photo-modal__img {
	max-width: 100%;
	height: auto;
}

.photo-modal__close {
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
}
</style>
