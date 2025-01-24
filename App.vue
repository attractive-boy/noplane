<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			uni.getLocation({
				type: 'wgs84',
				success: (res) => {
					this.latitude = res.latitude;
					this.longitude = res.longitude;
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
										console.log(res);
									},
							})
						}
					});
				}
			});
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
