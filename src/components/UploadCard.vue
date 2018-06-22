<template>
	<div class="upload-card">
		<div class="upload-card__wrapper">
			<img class="upload-card__photo" src="/static/img2.jpg">
		</div>
	</div>
</template>

<script type="text/javascript">
import Vue from "vue";

export default {
	name: "UploadCard",
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.upload-card {
	display: none;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1000;
}

.upload-card__wrapper {
	max-width: 500px;
	padding: 30px;
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	right: 0;
	margin: auto;
	background-color: #f3f3f3;
	box-shadow: 0 0 3px 0 black;
}

.upload-card__photo {
	max-width: 100%;
	height: auto;
}
</style>
