<template>
    <view style="width: 100%; height: 100vh; background-color: #f0f0f0;">
        <view style="width: 90%;margin: 20rpx;">
            <u-radio-group v-model="reason" iconPlacement="right" placement="column">
                <u-text text="平台相关" size="20" align="left" bold style=" width: 90%;margin-bottom: 20rpx;"></u-text>
                <view
                    style="width: 100%; border-radius: 10rpx; background-color: white;  padding: 20rpx; margin-bottom: 20rpx;">
                    <u-radio label="平台派单太远" name="1"></u-radio>
                    <br>
                    <u-radio label="位置错误/找不到当前位置" name="2"></u-radio>
                </view>
                <u-text text="平台相关" size="20" align="left" bold style=" width: 100%;margin-bottom: 20rpx;"></u-text>
                <view style="width: 100%; border-radius: 10rpx; background-color: white;  padding: 20rpx;">
                    <u-radio label="联系不上客服" name="3"></u-radio>
                    <br>
                    <u-radio label="货物点击超过储备数量" name="4"></u-radio>
                    <br>
                    <u-radio label="已有救护车到达" name="5"></u-radio>
                    <br>
                    <u-radio label="已有专业设备及专业人员" name="6"></u-radio>
                    <br>
                    <u-radio label="位置太远" name="7"></u-radio>
                    <br>
                    <u-radio label="外力因素" name="8"></u-radio>
                    <br>
                    <u-radio label="其他" name="9"></u-radio>
                </view>
                <u-text text="自己原因" size="20" align="left" bold style=" width: 100%;margin-bottom: 20rpx;"></u-text>
                <view style="width: 100%; border-radius: 10rpx; background-color: white;  padding: 20rpx;">
                    <u-radio label="行程有变" name="10"></u-radio>
                    <br>
                    <u-radio label="目的地有误" name="11"></u-radio>
                    <br>
                    <u-radio label="选择其他工具" name="12"></u-radio>
                </view>
            </u-radio-group>
            <br>
            <u-button type="primary" @click="submit">确认提交</u-button>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            orderId: '',
            reason: 1
        }
    },
    onLoad(options) {
        this.orderId = options.orderId;
    },
    methods: {
        submit() {
            console.log(this.reason);
            uniCloud.callFunction({
                name: 'order_cancel',
                data: {
                    orderId: this.orderId
                }
            }).then(res => {
                console.log(res);
                uni.navigateTo({
                    url: '/pages/order/index?orderId=' + this.orderId
                });
            });

        }
    }
}
</script>
<style></style>