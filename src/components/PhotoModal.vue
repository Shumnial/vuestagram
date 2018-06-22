<template>
  <div class="photo-modal">
  	<div class="photo-modal__wrapper">
  		<slot></slot>
	  	<button class="photo-modal__close" @click="$emit('displayModal')">CLOSE ME!</button>
  	</div>
  </div>
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
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
}

.photo-modal__wrapper {
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
}

.photo-modal__img {
	width: 100%;
	height: 100%;
}

.photo-modal__close {
	position: absolute;
	top: 0;
	right: 0;
}
</style>
