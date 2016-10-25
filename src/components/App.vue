<style>
	.w-input{width: 200px;}
</style>

<template>
	<div class="w-input">
		<rd-text :textfield="user"></rd-text>
	</div>
	<rd-button type="primary">提交</rd-button>
</template>

<script>
	import {rdText, rdButton} from 'radon-ui';

	export default {
		data() {
			return {
				user: {
					value: 'hehe',
					placeHolder: '请输入运单单号',
					state: 'default'
				}
			}
		},
	  	components: {
	    	rdText, rdButton
	  	}
	}
</script>