<style>
	
</style>

<template>
	<input type="text" v-model="msg" />
	<child :msg.sync="msg"></child>
</template>

<script>
	import Child from './Child.vue';

	export default {
		data() {
			return {
				msg: ''
			}
		},
	  	components: {
	    	Child
	  	}
	}
</script>