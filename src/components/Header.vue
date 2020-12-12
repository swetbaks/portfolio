<template>

    <div id="header-wrapper">
    <div id="header" class="container">
        <div id="logo">
            <h1><a href="/"><strong>정권채 포트폴리오</strong></a></h1>
        </div>

		<div id="menu">
			<ul>
				<li v-for="(value, name) in materials" v-bind:class="{current_page_item : name === selectedmenu}" v-on:click="onClickMenu(name)">
					<router-link :to="{path : value}">{{name}}</router-link>
				</li>
			</ul>
		</div>


    </div></div>

</template>

<script>

export default {
    data() {
		return {

			materials : {
				'Home' : '/',
				'Projects' : '/projects',
				'Skills' : '/skills',
				'Contact' : '/contact'
			},

			selectedmenu : ''
		}
	},
	created() {
		this.selectedmenu = Object.keys(this.materials)[0]
	},
	methods : {
		onClickMenu(name) {
			this.selectedmenu = name
		}
	}
}

</script>

<style>

</style>