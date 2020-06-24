import Vue from 'vue'

const object = {
  // install:function() {
  //   // window.Vues = Vues
  // },
  methods :{
    imageUploads(e) {
      let file = e.target.files;
			let reader = new FileReader();
			reader.readAsDataURL(file[0]);
			reader.onload = e => {
        this.$global.image = e.target.result
			};
    }
  }
}


export default function() {
  Vue.mixin(object)
}
