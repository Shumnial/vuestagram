<template>
	<div class="upload-card">
		<img class="upload-card__photo" src="/static/img2.jpg">
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
	z-index: 1;
}

.upload-card__photo {
	max-width: 100%;
	height: auto;
}
</style>
