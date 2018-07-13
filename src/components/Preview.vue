<template>
<div class="preview">
	<form enctype="multipart/form-data" method="post">
		<PreviewPhoto v-for="file in files" :files="files" :file="file"></PreviewPhoto>
		<button class="preview__btn">Загрузить</button>
	</form>
</div>	
</template>

<script>
export default {
	name: "Preview",
	props: ["files"],
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.preview {
	min-height: 200px;
	background-color: #ababab;
	border-radius: 15px;
	max-width: 1160px;
	margin: 0 auto;
	margin-bottom: 40px;
}

.preview__btn {
	padding: 10px 25px;
	border: none;
	background-color: #fff;
	border-radius: 5px;
}
</style>
