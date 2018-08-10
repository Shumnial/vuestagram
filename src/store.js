import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		photos: [
			{
				name: "/static/img1.jpg",
				descr: "Зимний Екатеринбург",
				id: 0
			},
			{
				name: "/static/img2.jpg",
				id: 1,
				descr: "Вечерний Екатеринбург"
			}
		],
		activePhoto: null,
		seen: false
	},
	mutations: {
		displayModal: state => {
			state.seen = !state.seen;
		},
		openPhoto: (state, photo) => {
			state.activePhoto = photo;
			state.seen = !state.seen;
		},
		uploadPhotos: (state, previewFiles) => {
			state.photos = state.photos.concat(previewFiles);
		},
		deletePhoto: (state, photo) => {
			const index = state.photos.findIndex(el => el.name === photo.name);
			state.photos.splice(index, 1);
		}
	}
});

export default store;
