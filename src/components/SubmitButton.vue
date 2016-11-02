<style></style>
<template>
	<rd-button type="primary" @click="query">提交</rd-button>
</template>
<script>
	import {rdButton} from 'radon-ui';

	export default {
		events: {
			'hello-broadcast' () {
				console.log('button')
			}
		},
		components: {
			rdButton
		},
		methods: {
			query() {
				this.$dispatch('getCompany')
			}
		}
	}
</script>