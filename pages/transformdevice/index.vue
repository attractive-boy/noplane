<template>
  <view>
    <view
      style="background-color:#BBE0ED; padding: 20rpx; height: 200rpx; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <view style="font-size: 40rpx; font-weight: bold; color: #539EB7;">运输设备信息一览表</view>
      <view style="font-size: 25rpx; color: #fff; text-align: start;">线上查询、便民惠民、严格检查</view>
    </view>
    <u-row customStyle="margin-bottom: 10px" :style="{ backgroundColor: '#fff' }">
      <u-col span="4">
        <view style=" padding: 20rpx; font-size: 30rpx; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">省级行政区</view>
      </u-col>
      <u-col span="4">
        <view style=" padding: 20rpx; font-size: 30rpx; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">市级</view>
      </u-col>
      <u-col span="4">
        <view style=" padding: 20rpx; font-size: 30rpx; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">运输设备</view>
      </u-col>
    </u-row>
    <u-row customStyle="margin-bottom: 10px" v-for="(item, index) in list" :key="index" :style="{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#fff' }" >
      <u-col span="4">
        <view style=" padding: 20rpx; font-size: 30rpx; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">{{ item.province }}</view>
      </u-col>
      <u-col span="4">
        <view style=" padding: 20rpx; font-size: 30rpx; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">{{ item.city }}</view>
      </u-col>
      <u-col span="4">
        <view style=" padding: 20rpx; font-size: 30rpx; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #539EB7;">查看详情</view>
      </u-col>
    </u-row>
    <view style="height: 100rpx; background-color: #fff; width: 100%; display: flex; justify-content: center; align-items: center; position: fixed; bottom: 0rpx; left: 0rpx; right: 0rpx; width: 100%;">
      <u-button type="primary" @click="handleClick" style="width: 90%;"> 分享给急需急救的朋友 </u-button>
    </view>
  </view>


</template>
<script>


export default {
  data() {
    return {
      list: [
        {
          province: '北京市',
          city: '北京市',
        },
        {
          province: '天津市',
          city: '天津市',
        },
        {
          province: '河北省',
          city: '石家庄市',
        },
        {
          province: '山西省',
          city: '太原市',
        },
        {
          province: '内蒙古自治区',
          city: '呼和浩特市',
        },
        {
          province: '辽宁省',
          city: '沈阳市',
        },
        {
          province: '吉林省',
          city: '长春市',
        },
        {
          province: '黑龙江省',
          city: '哈尔滨市',
        },
        {
          province: '上海市',
          city: '上海市',
        },
        {
          province: '江苏省',
          city: '南京市',
        },
        {
          province: '浙江省',
          city: '杭州市',
        },
        {
          province: '安徽省',
          city: '合肥市',
        },
        {
          province: '福建省',
          city: '福州市',
        },
        {
          province: '江西省',
          city: '南昌市',
        },
        {
          province: '山东省',
          city: '济南市',
        },
        {
          province: '河南省',
          city: '郑州市',
        },
        {
          province: '湖北省',
          city: '武汉市',
        },
        {
          province: '湖南省',
          city: '长沙市',
        },
        {
          province: '广东省',
          city: '广州市',
        },
        {
          province: '重庆市',
          city: '重庆市',
        },
        {
          province: '四川省',
          city: '成都市',
        },
        {
          province: '陕西省',
          city: '西安市',
        },
        {
          province: '甘肃省',
          city: '兰州市',
        },
        {
          province: '青海省',
          city: '西宁市',
        },
        {
          province: '宁夏回族自治区',
          city: '银川市',
        },
        {
          province: '新疆维吾尔自治区',
          city: '乌鲁木齐市',
        },
        {
          province: '香港特别行政区',
          city: '香港特别行政区',
        },
        {
          province: '澳门特别行政区',
          city: '澳门特别行政区',
        },
        {
          province: '台湾省',
          city: '台湾省',
        },

      ]
      
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