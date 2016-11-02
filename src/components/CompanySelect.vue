<style></style>
<template>
	<rd-select :select="selectdata" @change="changeAction"></rd-select>
</template>
<script>
	import {rdSelect} from 'radon-ui';

	export default {
		data() {
			return {
				selectdata: {
					multiple: false,
					search: true,
                    key: 'selectCompany',
                    value: {},
                    options: [{
                        selected: true,
                        disabled: false,
                        id: 'YTO',
                        value: '圆通快递'
                    }, {
                        selected: false,
                        disabled: false,
                        id: 'EMS',
                        value: 'EMS'
                    }, {
                        selected: false,
                        disabled: false,
                        id: 'YD',
                        value: '韵达'
                    }]
				}
			}
		},
		methods: {
			changeAction(select, value) {
				console.log(value.value)
				console.log(value.id)
			}
		},
		components: {
			rdSelect
		},
		events: {
			getCompany () {
				console.log('select')
			}
		}
	}
</script>