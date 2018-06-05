import Vue from "vue";
import Router from "vue-router";

import UploadForm from "@/components/UploadForm";
import PhotoGallery from "@/components/PhotoGallery";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/upload-form",
			name: "UploadForm",
			component: UploadForm
		},
		{
			path: "/photo-gallery",
			name: "PhotoGallery",
			component: PhotoGallery
		}
	]
});
