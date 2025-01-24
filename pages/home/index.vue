<template>
  <view>
    <view style="position: relative;">
      
      <u-image src="/static/home.jpg" width="100%" ></u-image>
      <view style="display: flex; flex-direction: column; justify-content: center; align-items: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"> 
	      <text style="font-size: 60rpx; font-weight: bold; text-wrap: nowrap; width: 100%; text-align: center;">急救物资 就选"air"</text>
        <view style="text-wrap: nowrap; margin-top: 30rpx;  font-size: 30rpx; text-align: center; font-weight: 500;" >提升急救速度，我们势在必行</view>
      </view>

      

    </view>

    <view style="padding: 20rpx; display: flex; width: 80%; margin: 0 auto;  flex-direction: row; border-radius: 20rpx; box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);" @click="toSaveNow">
        <view style=" padding: 20rpx; border-radius: 50%;  background-color: #9376F5;">
          <u-image src="/static/savefirst.png" width="60rpx" height="60rpx" ></u-image>
        </view>
        <view style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-left: 20rpx;">
          <u-text text='立即急救' size="30rpx" style="text-wrap: nowrap;" ></u-text>
          <u-text text='现在已遇到紧急情况，需要立即急救' size="20rpx" style="text-wrap: nowrap;" ></u-text>
        </view>
      </view>

      <br/>

      <view style="padding: 20rpx; display: flex; width: 80%; margin: 0 auto;  flex-direction: row; border-radius: 20rpx; box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);" @click="toInformationPut">
        <view style=" padding: 20rpx; border-radius: 50%;  background-color: #62D4A6;">
          <u-image src="/static/informationput.png" width="60rpx" height="60rpx" ></u-image>
        </view>
        <view style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-left: 20rpx;">
          <u-text text='信息填写' size="30rpx" style="text-wrap: nowrap;" ></u-text>
          <u-text text='填写个人基本信息' size="20rpx" style="text-wrap: nowrap;" ></u-text>
        </view>
      </view>

      <br/>

      <view style="padding: 20rpx; display: flex; width: 80%; margin: 0 auto; flex-direction: row; border-radius: 20rpx; box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);" @click="toPlatform"> 
        <view style=" padding: 20rpx; border-radius: 50%;  background-color: #62CCD4;">
          <u-image src="/static/nearbystation.png" width="60rpx" height="60rpx" ></u-image>
        </view>
        <view style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-left: 20rpx;">
          <u-text text='周围急救站信息查询' size="30rpx" style="text-wrap: nowrap;" ></u-text>
          <u-text text='提供最近急救站位置信息、各急救站物资储备情况、各急救站无人机信息查询服务' size="20rpx"  ></u-text>
        </view>
      </view>
    <BottomTabBar />
  </view>
	
</template>
<script>
import BottomTabBar from '@/components/BottomTabBar.vue'; // 根据实际路径调整

export default {
    
  components: {
    BottomTabBar,
  },
  onLoad() {
    uni.hideTabBar();
  },
  methods: {
    toSaveNow() {
      uni.navigateTo({
        url: '/pages/savenow/index'
      });
    },
    toInformationPut() {
      uni.navigateTo({
        url: '/pages/informationput/index'
      });
    },
    toPlatform() {
      uni.navigateTo({
        url: '/pages/platform/index'
      });
    }
  }
}
</script>

<style>

</style>

