<template>
	<view>


	</view>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	onLoad() {


	},
	methods: {
		nvueShow: function () {
			const subnvue = uni.getSubNVueById('map_order_hascancel') // 获取nvue
			subnvue.show()  // 显示nvue
		}
	}
}
</script>

<style>
</style>