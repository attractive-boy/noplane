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
			const subnvue = uni.getSubNVueById('map') // 获取nvue
			subnvue.show()  // 显示nvue
		}
	}
}
</script>

<style>
</style>