<template>
	<Overlay @click="$emit('displayForm')">
		<div class="form-modal">
			<img src="/static/img2.jpg">
			<button class="form-modal__close" type="">CLOSE ME!</button>
			<div class="form-modal__fields">
				<input class="form-modal__field" type="text" name="hashtags" placeholder="#хэштег">
				<textarea class="form-modal__field form-modal__field--descr" name="descr" placeholder="Description"></textarea>
			</div>
			<button class="form-modal__submit">Отправить</button>
		</div>
	</Overlay>
</template>

<script type="text/javascript">
import Vue from "vue";

export default {
	name: "FormModal",
	data() {
		return {};
	}
};
</script>

<style>
.form-modal {
	max-width: 500px;
	padding: 30px;
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	right: 0;
	margin: auto;
	background-color: transparent;
	box-shadow: 0 0 3px 0 black;
}

.form-modal img {
	max-width: 100%;
	height: auto;
	margin-bottom: 20px;
	border-radius: 5px;
}

.form-modal__close {
	position: absolute;
	top: 0;
	right: 0;
}

.form-modal__field {
	width: 100%;
	display: block;
	margin-bottom: 20px;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 5px;
	border: none;
	box-shadow: inset 0 0 2px 0 black;
	font-size: 16px;
}

.form-modal__field--descr {
	min-height: 100px;
}

.form-modal__submit {
	background-color: #3e3e3b;
	color: #fff;
	border: none;
	padding: 15px;
	text-transform: uppercase;
	font-size: 16px;
}
</style>
