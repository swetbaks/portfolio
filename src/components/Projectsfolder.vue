<template>

	<div id="page" class="container">
		<hooper>

			<slide>
				<project1 />
			</slide>

			<slide>
				<project2 />
			</slide>

			<slide>
				<project3 />
			</slide>			

			<hooper-pagination slot="hooper-addons" mode="fraction"></hooper-pagination>
		
		</hooper>
	</div>

</template>

<script>

import project1 from './Project1.vue'
import project2 from './Project2.vue'
import project3 from './Project3.vue'
import {Hooper, Slide, Pagination as HooperPagination} from 'hooper';

export default {

	components : {
		project1,
		project2,
		project3,
		Hooper,
		Slide,
		HooperPagination
	}

}

</script>

<style>

@import '../css/hoopers.css';

</style>