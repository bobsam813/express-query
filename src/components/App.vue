<style>
	.f-float-left{float: left;}
	.f-clear{+zoom: 1;}
	.f-clear:before,
	.f-clear:after {clear: both;content: ".";font-size: 0;display: block;height: 0;overflow: hidden;visibility: hidden;}

	.form-rows{height: 32px;line-height: 32px;font-size: 14px;}
	.row-1{margin-bottom: 10px;}
	.form-item{width: 200px;}
	.form-button{margin-left: 20px;}
</style>

<template>
	<section class="form-rows row-1 f-clear">
		<div class="form-name f-float-left">
			<p>快递公司：</p>
		</div>
		<div class="form-item f-float-left">
			<company-select></company-select>
		</div>
	</section>

	<section class="form-rows f-clear">
		<div class="form-name f-float-left">
			<p>快递单号：</p>
		</div>
		<div class="form-item f-float-left">
			<code-input></code-input>
		</div>
		<div class="form-button f-float-left">
			<submit-button></submit-button>
		</div>
	</section>
</template>

<script>
	import CompanySelect from './CompanySelect';
	import CodeInput from './CodeInput';
	import SubmitButton from './SubmitButton';

	export default {
	  	components: {
	    	CompanySelect, CodeInput, SubmitButton
	  	},
	  	events: {
	  		getCompany(data) {
	  			this.$broadcast('getCompany', data);
	  		},
	  		getCode(data){
	  			this.$broadcast('getCode', data);
	  		}
	  	}
	}
</script>