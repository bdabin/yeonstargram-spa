const upload = {
  state: {
    image: '',
    data: undefined
  },
  mutations: {
    setImage(state, payload) {
      const { image, data } = payload
      state.image = image
      state.data = data
    },
    resetImage(state) {
      state.image = ''
    }
  },
  actions: {
    async imageUpload({ commit }, payload) {
      const files = payload.files;

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = e => {
        commit('setImage', { image: e.target.result, data: files[0] })
      };
    },
    imageReset({ commit }) {
      commit('resetImage')
    }
  }
}

export default upload