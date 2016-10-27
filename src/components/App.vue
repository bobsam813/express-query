<style>
	.f-float-left{float: left;}
	.f-clear{+zoom: 1;}
	.f-clear:before,
	.f-clear:after {clear: both;content: ".";font-size: 0;display: block;height: 0;overflow: hidden;visibility: hidden;}

	.form-rows{height: 32px;line-height: 32px;font-size: 14px;}
</style>

<template>
	<section class="form-rows f-clear">
		<div class="f-float-left">
			<p>快递公司：</p>
		</div>
		<div class="f-float-left">
			<rd-select :select="selectdata"></rd-select>
		</div>
	</section>

	<section class="form-rows f-clear">
		<div class="f-float-left">
			<p>快递单号：</p>
		</div>
		<div class="f-float-left">
			<rd-text :textfield="user"></rd-text>
		</div>
		<div class="f-float-left">
			<rd-button type="primary">提交</rd-button>
		</div>
	</section>
</template>

<script>
	import {rdText, rdButton, rdSelect} from 'radon-ui';

	export default {
		data() {
			return {
				user: {
					value: '',
					placeHolder: '请输入运单单号',
					state: 'default'
				},
				selectdata: {
					multiple: false,
					search: true,
                    key: 'selectProvince',
                    value: {},
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: false,
                        value: '深圳',
                        id: 3
                    }]
				}
			}
		},
	  	components: {
	    	rdText, rdButton, rdSelect
	  	}
	}
</script>