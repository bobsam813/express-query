<style></style>
<template>
	<rd-button type="primary" @click="query">提交</rd-button>
</template>
<script>
	import {rdButton} from 'radon-ui';

	export default {
		events: {
			
		},
		components: {
			rdButton
		},
		methods: {
			query() {
				
				console.log(this.$parent);
			}
		}
	}
</script>