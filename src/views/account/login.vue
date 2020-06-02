<template>
  <div>
    <LoginContainer></LoginContainer>
		<button @click="logout">로그아웃</button>
  </div>
</template>

<script>
import axios from 'axios'
import LoginContainer from '@/components/container/account/LoginContainer.vue';
export default {
	name: 'login',
	components: {
		LoginContainer,
	},
	methods:{
		async logout(){
			const response = await axios.post('/api/account/logout')
			if(response.status === 200) {
				alert('logout')
			}
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
