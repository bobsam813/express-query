<style>
	.msg{font-size: 14px;font-weight: bold;}
</style>
<template>
	<p class="msg">{{msg}}</p>
</template>
<script>
	export default {
		props: ['msg']
	}
</script>