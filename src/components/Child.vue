<style>
	.msg{font-size: 14px;font-weight: bold;}
</style>
<template>
	<p class="msg">{{user.value}}</p>
</template>
<script>
	export default {
		props: ['user']
	}
</script>