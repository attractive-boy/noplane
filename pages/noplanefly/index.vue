<template>
	<view>
		<map id="map" style="width: 100%; height:60vh;" :latitude="latitude" :longitude="longitude" :markers="markers"
			scale="16" :show-compass='true' :circles="circles" :controls="controls" show-location>
		</map>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 23.132303,
				longitude: 113.334521,
				markers: [],
				circles: [],
				controls: []
			}
		},
		onLoad() {
			// 获取当前位置
			uni.getLocation({
				type: 'wgs84',
				success: (res) => {
					this.latitude = res.latitude;
					this.longitude = res.longitude;
					console.log('当前位置的经度：' + this.longitude);
					console.log('当前位置的纬度：' + this.latitude);
					//获取 设备信息
					uni.getSystemInfo({
						success: (res) => {						//调用云函数
							uniCloud.callFunction({
								name: 'user_location',
								data: {
									type: 'init',
									deviceId: res.deviceId,
									deviceModel: res.deviceModel,
									latitude: this.latitude,
									longitude: this.longitude
								},
								success: (res) => {
									this.initMap(res);
								},
							})
						}
					});
				}
			});
			
		},
		methods: {
			initMap(res) {
				
			}
		}
	}
</script>

<style></style>