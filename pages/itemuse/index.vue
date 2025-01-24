<template>
  <view>
    <view
      style="background-color: #70C0DB ; padding: 20rpx; height: 200rpx; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <view
        style="font-size: 40rpx; font-weight: bold; color: #fff; text-align: center; padding: 10rpx; background-color: #C63F47;">
        急救物品使用查询服务</view>
    </view>
    <view
      style="transform: translateY(-40rpx); z-index: 100; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <view
        style="display: flex; flex-direction: column;  width: 80%; border-radius: 20rpx; box-shadow: 0 0 10rpx #ccc; padding: 40rpx; background-color: #fff; height: 300rpx;">
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; ">
          <view style="font-size: 35rpx; font-weight: bold; ">无人机路线查询</view>
          <image src="/static/error.png" style="width: 40rpx; height: 40rpx;"></image>
        </view>
        <u-divider></u-divider>
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; ">
          <u-input type="text" v-model="form.code" placeholder="请输入编号" />
          <image src="/static/error.png" style="width: 40rpx; height: 40rpx;"></image>
        </view>
        <u-divider></u-divider>
        <u-button type="primary" @click="handleClick" style="width: 90%;"> 查询 </u-button>
      </view>
      <br>
      <!-- 急救车电话 -->
      <view
        style="display: flex; flex-direction: column; width: 80%; border-radius: 20rpx; box-shadow: 0 0 10rpx #ccc; padding: 40rpx; background-color: #fff; height: 150rpx;">
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
          <view style="font-size: 35rpx; font-weight: bold;">急救车电话</view>
        </view>
        <u-divider></u-divider>
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
          <view style="font-size: 25rpx; font-weight: bold;">120热线</view>
          <view style="font-size: 25rpx; font-weight: bold; color: #70C0DB;">拨打热线</view>
        </view>
      </view>
      <br>

      <!-- 急救小知识查询
      遇到煤气泄漏应该怎么办?
      心跳停止后该做些什么?
      被毒蛇咬伤应该怎么办?
      路上遇到骨折患者是否要立即搬运?
      硝酸甘油如何服用? -->
      <view style="display: flex; flex-direction: column; width: 80%; border-radius: 20rpx; box-shadow: 0 0 10rpx #ccc; padding: 40rpx; background-color: #fff; height: 500rpx;">
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
          <view style="font-size: 35rpx; font-weight: bold;">急救小知识查询</view>
        </view>
        <u-divider></u-divider>
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
          <view style="font-size: 25rpx; font-weight: bold;">遇到煤气泄漏应该怎么办?</view>
        </view>
        <u-divider></u-divider>
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
          <view style="font-size: 25rpx; font-weight: bold;">心跳停止后该做些什么?</view>
        </view>
        <u-divider></u-divider>
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
          <view style="font-size: 25rpx; font-weight: bold;">被毒蛇咬伤应该怎么办?</view>
        </view>
        <u-divider></u-divider>
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
          <view style="font-size: 25rpx; font-weight: bold;">路上遇到骨折患者是否要立即搬运?</view>
        </view>
        <u-divider></u-divider>
        <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
          <view style="font-size: 25rpx; font-weight: bold;">硝酸甘油如何服用?</view>
        </view>
      </view>

    </view>

  </view>


</template>
<script>


export default {
  data() {
    return {
      form: {
        code: ''
      }

    }
  },

  onLoad() {
    uni.hideTabBar();
  },
  methods: {
    handleClick() {
      console.log('分享');
    }
  }

}
</script>

<style></style>