<style></style>
<template>
	<rd-text :textfield="code"></rd-text>
</template>
<script>
	import {rdText} from 'radon-ui';

	export default {
		data() {
			return {
				code: {
					value: '',
					placeHolder: '请输入运单单号',
					state: 'default'
				}
			}
		},
		components: {
			rdText
		},
		events: {
			'hello-broadcast' () {
				console.log('input')
			}
		}
	}
</script>