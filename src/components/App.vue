<style>
	.w-input{width: 200px;}
</style>

<template>
	<div class="w-input">
		<rd-text :textfield="user"></rd-text>
	</div>
	<rd-button type="primary" size="large">提交</rd-button>
	<child :user.sync="user"></child>
</template>

<script>
	import Child from './Child.vue';
	import {rdText, rdButton} from 'radon-ui';

	export default {
		data() {
			return {
				user: {
					value: 'hehe',
					placeHolder: '请输入',
					state: 'default'
				}
			}
		},
	  	components: {
	    	Child, rdText, rdButton
	  	}
	}
</script>