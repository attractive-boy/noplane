<template>
	<view style="margin: 0 30rpx;">
		<uni-section v-bind:title="logintype" titleFontSize="40rpx"></uni-section>
		<u-input placeholder="请输入手机号">
			<u-text text="+86" slot="prefix" margin="0 3px 0 0" type="tips" ></u-text>
		</u-input>
		<u-divider text=""></u-divider>
		<u-input prefixIcon="lock" v-bind:placeholder="logintype === '验证码登录' ? '请输入验证码' : '请输入密码'">
			<template slot="suffix" v-if="logintype === '验证码登录'">
				<u-code ref="uCode" @change="codeChange" seconds="20" changeText="X秒重新获取哈哈哈"></u-code>
				<u-button @tap="getCode" :text="tips" type="success" size="mini"></u-button>
			</template>
		</u-input>
		<u-divider text=""></u-divider>
		<u-button type="primary" size="large" text="登录" @click="login"></u-button>

		<view style="display: flex; justify-content: space-around;margin-top: 20rpx;">
			<u-text type="info"  v-bind:text="logintype === '验证码登录' ? '密码登录' : '验证码登录'" @click="updateLoginType( logintype === '验证码登录' ? '密码登录' : '验证码登录')"></u-text>
			<u-text type="info" align="right"  text="忘记密码"></u-text>
		</view>
		
		<view style="position: absolute; bottom: 50rpx; display: flex; justify-content: center;">
			<view style="display: flex; justify-content: space-around; text-wrap: nowrap; margin-left:70rpx;">登录即同意<text  style="text-wrap: nowrap; color: #007AFF;">《用户服务协议》</text>和<text style="text-wrap: nowrap; color: #007AFF;">《隐私政策》</text> </view>
		</view>
	</view>




</template>

<script>
	export default {
		data() {
			return {
				logintype: '验证码登录',
				phonenumber: '',
				tips: '',
				value: ''
			}
		},
		onLoad() {
			uni.hideTabBar();
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			change(e) {
				console.log('change', e);
			},
			updateLoginType(newType) {
				this.logintype = newType;
			},
			login() {
				//跳转首页
				uni.switchTab({
					url: '/pages/home/index'
				});
			}
		}
	}
</script>

<style>

</style>