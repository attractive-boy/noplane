<script>


	export default {
		onLaunch: function() {
			uni.getPushClientId({
				success: (res) => {
					let push_clientid = res.cid
					uni.setStorageSync('push_clientid', push_clientid)
				},
				fail(err) {
					console.log(err)
				}
			})
			uni.onPushMessage((res) => {  
				// 监听通知栏消息的点击  
				if(res.type == 'click'){  
					console.log("收到一条消息=>",res);  
					uni.navigateTo({
						url: '/pages/order/index?orderId=' + res.data.payload.orderId
					});   
				}  
				// 监听在线推送消息，若云函数设置了 "force_notification":true，则不会触发此 receive。  
				if(res.type == 'receive'){  
					console.log("接收到的消息内容",res);  
				}  
			}) 
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
