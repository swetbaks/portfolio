<template>

	<div id="page" class="container">
		<hooper>
			<slide>
				<project1 />
			</slide>

			<slide>
				slide 2
			</slide>


		<hooper-pagination slot="hooper-addons"></hooper-pagination>
		</hooper>
	</div>

</template>

<script>

import project1 from './Project1.vue'
import {Hooper, Slide, Pagination as HooperPagination} from 'hooper';

export default {

	components : {
		project1,
		Hooper,
		Slide,
		HooperPagination
	}

}

</script>

<style>

@import '../css/hoopers.css';

</style>