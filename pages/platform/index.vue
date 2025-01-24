<template>
    <view style="padding: 20rpx;">
        <!-- 请选择查询内容 -->
         <view style="font-size: 28rpx; font-weight: bold;">请选择查询内容</view>
         <view style="display: flex; flex-direction: row; justify-content: space-around; align-items: center; background-color: #F4A439; padding: 20rpx; border-radius: 20rpx; height: 200rpx; margin-top: 20rpx;" @click="toTransformregister">
            <image src="/static/BackupTransportationRegistration.png" style="width: 100rpx; height: 100rpx;"></image> 
            <view style="font-size: 50rpx; font-weight: bold; color: #fff; text-align: start; width: 400rpx;">备用运输登记</view>
         </view>
         <view style="display: flex; flex-direction: row; justify-content: space-around; align-items: center; background-color: #06BEBE; padding: 20rpx; border-radius: 20rpx; height: 200rpx; margin-top: 20rpx;" @click="toTransformdevice">
            <image src="/static/TransportationEquipmentInformationQuery.png" style="width: 100rpx; height: 100rpx;"></image>
            <view style="font-size: 50rpx; font-weight: bold; color: #fff; text-align: start; width: 400rpx;">运输设备信息查询</view>
         </view>
         <view style="display: flex; flex-direction: row; justify-content: space-around; align-items: center; background-color: #2871FF; padding: 20rpx; border-radius: 20rpx; height: 200rpx; margin-top: 20rpx;" @click="toItemuse">
            <image src="/static/EmergencyItemUseQuery.png" style="width: 100rpx; height: 100rpx;"></image>
            <view style="font-size: 50rpx; font-weight: bold; color: #fff; text-align: start; width: 400rpx;">急救物品使用查询</view>
         </view>
    </view>
</template>
<script> 
export default {
    data() {
        return {
            
        }
    },
    methods: {
        toTransformregister() {
            uni.navigateTo({
                url: '/pages/transformregister/index'
            })
        },
        toTransformdevice() {
            uni.navigateTo({
                url: '/pages/transformdevice/index'
            })
        },
        toItemuse() {
            uni.navigateTo({
                url: '/pages/itemuse/index'
            })
        }
    }
}
</script>
<style>

</style>
