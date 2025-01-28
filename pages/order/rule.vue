<template>
    <view style="padding: 20rpx;">
        <u-parse :content="rule"></u-parse>
    </view>
</template>
<script>
export default {
    data() {
        return {
            rule: '<p><span style="text-wrap-mode: nowrap;">以下为快车实时单取消规则。</span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;">1.为了保证平台公平性，因您责任导致订单取消时，您需支付一定的取消费，用于补偿平台的空驶成本。如对系统判责有疑问，您可投诉反馈，我们会尽快核实并反馈您结果。</span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;">您需支付取消的场景</span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;">若您在3分钟后取消订单，需支付取消费(若平台原因造成取消，您可无需支付)。</span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;">您无需支付取消费的场景</span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;">1.您在3分钟内取消订单。</span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;">2.本平台的运输设备未在规定时间内(详见软件提示)到达指定位置。</span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;">取消费的计算方式</span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;">1.若本平台运输设备空驶小于1公里，您需支付4元取消费作为补偿。</span></p><p><span style="text-wrap-mode: nowrap;"><br/></span></p><p><span style="text-wrap-mode: nowrap;">2.若司机空驶超过1公里，超过1公里的部分每公里需支付10元取消费作为司机的补偿。最高支付100元。</span></p><p><br/></p>'
        }
    }
}
</script>
<style></style>