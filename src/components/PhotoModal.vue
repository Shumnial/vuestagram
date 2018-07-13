<template>
	<Overlay>
	  <div class="photo-modal">
	  	<slot></slot>
	  	<button class="photo-modal__close" @click="$emit('displayModal')">CLOSE ME!</button>
	  </div>
	</Overlay>
</template>

<script>
import Vue from "vue";

export default {
	name: "PhotoModal",
	data() {
		return {};
	}
};
</script>

<style>
.photo-modal {
	position: fixed;
	height: 400px;
	max-width: 450px;
	box-shadow: 0 1px 3px 0 black;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
	margin: auto;
	background-color: #fff;
	z-index: 1000;
	background-color: transparent;
}

.photo-modal__img {
	width: 100%;
	height: 100%;
	border-radius: 15px;
}

.photo-modal__close {
	position: absolute;
	top: 0;
	right: 0;
}
</style>
