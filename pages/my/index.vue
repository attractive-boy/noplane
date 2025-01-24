<template>
  <view style="padding: 40rpx;">
    <view style="display: flex; justify-content: space-between;">
      <view style="display: flex; flex-direction: row;">
        <view style="display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden; width: 150rpx; height: 150rpx;">
          <u-image src="/static/avatar.png" width="150rpx" height="150rpx" ></u-image>
        </view>
        <view style="margin-left: 20rpx;">
          <u-text text="AIR" size="30rpx" style="text-wrap: nowrap;" ></u-text>
          <view style="font-size: 20rpx; color: #62CCD4; text-wrap: nowrap; border: 1px solid #62CCD4; border-radius: 10rpx; padding: 5rpx 10rpx; text-wrap: nowrap; margin-top: 10rpx;">
            已实名
          </view>
        </view>
        
      </view>

      <u-image src="/static/usershop.png" width="60rpx" height="60rpx" ></u-image>
      
    </view>
    <view style="margin-top: 40rpx; border: 1px solid gray; border-radius: 10rpx; padding: 20rpx;">
      <view style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; width: 100%; "> 
        <view style="font-size: 30rpx; font-weight: bold;">订单管理</view>
        <view style="font-size: 20rpx; color: gray;">查看全部</view>
      </view>
      <u-grid :border="false"  col="5" >
        <u-grid-item>
          <u-icon
                customStyle="padding-top:20rpx;"
                name="bag"
                :size="22"
                ></u-icon>
                <text class="grid-text" style="font-size: 30rpx;">待付款</text>
        </u-grid-item>
        <u-grid-item>
          <u-icon
                customStyle="padding-top:20rpx;"
                name="gift" 
                :size="22"
                ></u-icon>
                <text class="grid-text" style="font-size: 30rpx;">待启航</text>
        </u-grid-item>
        <u-grid-item>
          <u-icon
                customStyle="padding-top:20rpx;"
                name="shopping-cart" 
                :size="22"
                ></u-icon>
                <text class="grid-text" style="font-size: 30rpx;">待收货</text>
        </u-grid-item>
        <u-grid-item>
          <u-icon
                customStyle="padding-top:20rpx;"
                name="tags" 
                :size="22"
                ></u-icon>
                <text class="grid-text" style="font-size: 30rpx;">待评价</text>
        </u-grid-item>
        <u-grid-item>
          <u-icon
                customStyle="padding-top:20rpx;"
                name="shopping-cart-fill" 
                :size="22"
                ></u-icon>
                <text class="grid-text" style="font-size: 30rpx;">退款/售后</text>
        </u-grid-item>
      </u-grid>
  
    </view>
    <view style="margin-top: 40rpx; border: 1px solid gray; border-radius: 10rpx; padding: 20rpx;">
      <u-grid  col="3" >
        <u-grid-item style="border-right: 1px solid gray;">
          <u-image src="/static/my/my_wallet.png" width="60rpx" height="60rpx" ></u-image>
          <text class="grid-text" style="font-size: 30rpx;">我的钱包</text>
        </u-grid-item>
        <u-grid-item style="border-right: 1px solid gray;">
          <u-image src="/static/my/my_coupon.png" width="60rpx" height="60rpx" ></u-image>
          <text class="grid-text" style="font-size: 30rpx;">优惠券</text>
        </u-grid-item>
        <u-grid-item>
          <u-image src="/static/my/my_collect.png" width="60rpx" height="60rpx" ></u-image>
          <text class="grid-text" style="font-size: 30rpx;">我的收藏</text>
        </u-grid-item>
      </u-grid>
    </view>
    <view style="margin-top: 40rpx;">
      <u-cell-group>
        <u-cell  title="我的设备" :isLink="true"  arrow-direction="right"></u-cell>
        <u-cell  title="我的历史" :isLink="true"  arrow-direction="right"></u-cell>
        <u-cell  title="地址管理" :isLink="true"  arrow-direction="right"></u-cell>
        <u-cell  title="用户协议" :isLink="true"  arrow-direction="right"></u-cell>
        <u-cell  title="关于我们" :isLink="true"  arrow-direction="right"></u-cell>
        <u-cell  title="联系我们" :isLink="true"  arrow-direction="right"></u-cell>
      </u-cell-group>
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
  
}
</script>

<style>

</style>

