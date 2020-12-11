<template>

    <div id="page" class="container">

        <div id="content">
				<div class="title">
					<h2>Contact Points</h2>
					<span class="byline">현재 개발 중인 기능입니다.</span>
				</div>

		  <form v-on:submit="onsubmit">

			<input v-on:submit.prevent type="text" id="name" name="name" autofocus placeholder="이름을 입력해 주세요.">
			<input v-on:submit.prevent type="text" id="email" name="email" placeholder="이메일을 입력해 주세요.">
			<input v-on:submit.prevent type="text" id="message" name="message" rows="10" placeholder="메시지를 입력해 주세요.">

			<button>Send</button>

 		 </form>

        </div>

		<div id="sidebar">
			<a href="#" class="image image-full"><img :src="pictures.pic2" alt="" /></a>
		</div>

	</div>

</template>

<script>

export default {

	data() {
		return {
			pictures : {
				pic2 : 'https://i.ibb.co/frqs7J0/E-mailing-Marketing-campaign-key-with-mailing-envelope-icon-on-laptop-keyboard-Included-clipping-pat.jpg'
			}
		}
	},
	methods : {
		onsubmit(e) {
			console.log(e)
		}
	}	
}



</script>

<style>

</style>