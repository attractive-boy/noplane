<template>
    <view> 
        <div style="text-align: center; margin-top: 20rpx; font-size: 50rpx; color: black; font-weight: bold; margin:20rpx"> 
            无人机正在备货，预计<text style="font-size: 50rpx; font-weight: bold;display: inline-block; color: #0078D7;">1分钟</text>后派送，请耐心等待。
        </div>
        <u-button icon="phone" type="primary" text="联系客服" shape="circle" size="normal" style="margin: 0 auto; width: 300rpx;" @click="callService"></u-button>
        <br>
        <u-alert title="本次取消免费，多次取消后可能会影响下次服务。" type = "info" effect="dark"  style="margin: 20rpx;"></u-alert>
        <br>
        <view style="display: flex; justify-content: center; width: 100vw; align-items: center;">
            <u-text type="primary" text="查看取消规则"    size="15" align="center" style="text-decoration: underline; color: #0078D7;" @click="goToRule"></u-text>
        </view>
        <view style="display: flex; justify-content: space-around; margin-top: 40rpx;">
            <u-button text="确认取消" type="error" @click="cancelOrder" style="width: 300rpx;"></u-button>
            <u-button text="暂不取消" type="info" @click="goBack" style="width: 300rpx;"></u-button>
        </view>
    </view>
</template>
<script>  
export default {
    data() {
        return {
            orderId: '',
        }
    },
    onLoad(options) {
        console.log("cancel", options);
        this.orderId = options.orderId;
    },
    methods: {
        cancelOrder() {
            console.log("取消订单");
            uni.navigateTo({
                url: '/pages/order/selectreason?orderId=' + this.orderId
            })
        },
        callService() {
            console.log("联系客服");
        },
        goBack() {
            console.log("返回");
            uni.navigateBack();
        },
        goToRule() {
            console.log("查看取消规则");
            uni.navigateTo({
                url: '/pages/order/rule'
            });
        },
    }
}
</script>
<style></style>
