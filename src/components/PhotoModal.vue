<template>
  <div class="photo-modal">
  	<img :src="photoName">
  </div>
</template>

<script>
import Vue from "vue";

export default {
	name: "PhotoModal",
	props: ["photoName"],
	data() {
		return {};
	}
};
</script>

<style>
.photo-modal {
}
</style>
