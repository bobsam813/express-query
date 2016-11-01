<style></style>
<template>
	<rd-button type="primary" @click="query">提交</rd-button>
</template>
<script>
	import {rdButton} from 'radon-ui';

	export default {
		components: {
			rdButton
		},
		methods: {
			query() {
				console.log('query')
			}
		}
	}
</script>