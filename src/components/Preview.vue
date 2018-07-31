<template>
<div class="preview">
	<form class="preview__form" enctype="multipart/form-data" method="post">
		<div class="preview__list">
			<PreviewPhoto
			v-for="file in previewFiles"
			:file="file">
			</PreviewPhoto>
		</div>
		<button 
		class="preview__upload"
		@click.prevent="$emit('uploadPhotos', previewFiles)"
		>Загрузить</button>
	</form>
</div>	
</template>

<script>
import Vue from "vue";

export default {
	name: "Preview",
	props: ["previewFiles"],
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.preview {
	min-height: 200px;
	position: relative;
	background-color: #ababab;
	border-radius: 15px;
	max-width: 1160px;
	margin: 0 auto;
	margin-bottom: 40px;
	padding: 2.5%;
	box-sizing: border-box;
}

.preview__list {
	min-height: 140px;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 20px;
}

.preview__item {

}

.preview__upload {
	padding: 10px 25px;
	border: none;
	background-color: #fff;
	border-radius: 5px;
	cursor: pointer;
}
</style>
