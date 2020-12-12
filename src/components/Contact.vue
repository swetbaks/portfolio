<template>

    <div id="page" class="container">

        <div id="content">
				<div class="title">
					<h2>Contact Point</h2>
					<span class="byline">아래 항목을 입력하면 제게 이메일을 보낼 수 있습니다.</span>
				</div>

		  <form @submit.prevent="onsubmit" class="gform" method="POST" data-email="swetbaks@gmail.com"
		  action="https://script.google.com/macros/s/AKfycbz7yTQRIzsQgs43pGOm5UHMmSiErwvWaDZPHgBzVMKVFeYR0VIF/exec">

			<input type="text" v-model="name" id="name" name="name" placeholder="홍길동">
			<input type="text" v-model="email" id="email" name="email" placeholder="sample@email.com">
			<input type="text" v-model="message" id="message" name="message" placeholder="메시지를 입력해 주세요.">

			<button type="submit">Send</button>

			<p v-if="errors.length">
				<ul>
					<li v-for="error in errors">{{error}}</li>
				</ul>
			</p>

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
				pic2 : 'https://i.ibb.co/rMSG7n7/E-mailing-Marketing-campaign-key-with-mailing-envelope-icon-on-laptop-keyboard-Included-clipping-pat.jpg'
			},
			errors : [],
			name : '',
			email : '',
			message : ''
		}
	},
	methods : {
		onsubmit : function(e) {
			if (this.name && this.email && this.message){
				return true;
			}
			this.errors = [];
			if (!this.name || this.name.length < 2) {
				this.errors.push('이름을 입력해 주세요.');
			}
			if (!this.email) {
				this.errors.push('이메일을 입력해 주세요.');
			} else if (!this.validEmail(this.email)) {
				this.errors.push('이메일을 정확히 입력해 주세요.');
			}
			if (!this.message) {
				this.errors.push('메시지를 입력해 주세요.');
			}
			e.preventDefault();
		},
		validEmail: function (email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}	
	}
}

</script>

<style>

</style>