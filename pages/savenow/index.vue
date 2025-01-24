<template>
  <view style="margin: 0 30rpx;">
    <view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx;">现场情况</view>
    <u-form :model="form" ref="uForm" labelPosition="top">
      <u-form-item label="救援类型" prop="rescueType" style="text-wrap: nowrap;">
        <u-cell style="width: 100%;" titleStyle="color: gray;" title="请选择急救类型" :value="form.rescueType.length > 0 ? form.rescueType[0] : ''" @click="showRescueType = true" :isLink="true"  arrow-direction="right"></u-cell>
      </u-form-item>
      <u-form-item label="具体位置" prop="rescueAddress" style="text-wrap: nowrap;">
        <u-cell style="width: 100%;" titleStyle="color: gray;" title="请选择具体位置" :value="form.rescueAddress.length > 0 ? form.rescueAddress[0] : ''" @click="showRescueAddress = true" :isLink="true"  arrow-direction="right"></u-cell>
      </u-form-item>
      <!-- 情况描述 请详细描述问题，以便相关部门了解情况 -->
      <u-form-item label="情况描述" prop="description" style="text-wrap: nowrap;">
        <u-input type="textarea" v-model="form.description" placeholder="请详细描述问题，以便相关部门了解情况" />
      </u-form-item>
      <!-- 现场图片 -->
      <u-form-item label="现场图片" prop="images" style="text-wrap: nowrap;">
        <u-upload :action="uploadUrl" :fileList="form.images" @on-success="onUploadSuccess" @on-error="onUploadError" @on-delete="onUploadDelete"></u-upload>
      </u-form-item>
      <view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx;">反馈人信息</view>
      <!-- 姓名 请输入您的姓名 -->
      <u-form-item label="姓名" prop="name" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.name" placeholder="请输入您的姓名" />
      </u-form-item>
      <!-- 证件类型 居民身份证 护照 -->
      <u-form-item label="证件类型" prop="idType" style="text-wrap: nowrap;">
        <u-cell titleStyle="color: gray;" style="width: 100%;" title="请选择证件类型" :value="form.idType.length > 0 ? form.idType[0] : ''" @click="showIdType = true" :isLink="true"  arrow-direction="right"></u-cell>
      </u-form-item>
      <!-- 证件号码 请输入您的证件号码 -->
      <u-form-item label="证件号码" prop="idNumber" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.idNumber" placeholder="请输入您的证件号码" />
      </u-form-item>
      <!-- 手机号码 请输入您的手机号码 -->
      <u-form-item label="手机号码" prop="phone" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.phone" placeholder="请输入您的手机号码" />
      </u-form-item>

    </u-form>
    <u-picker :show="showRescueType" :columns="rescueTypeList" @confirm="onRescueTypeConfirm" @cancel="showRescueType = false"></u-picker>
    <u-picker :show="showRescueAddress" :columns="rescueAddressList" @confirm="onRescueAddressConfirm" @cancel="showRescueAddress = false"></u-picker>
    <u-picker :show="showIdType" :columns="idTypeList" @confirm="onIdTypeConfirm" @cancel="showIdType = false"></u-picker>
    <u-button type="primary" size="large" text="提交" @click="submit"></u-button>
  </view>

	
</template>
<script>


export default {
  data() {
    return {
      form: {
        rescueType: [],
        rescueAddress: [],
        images: [],
        name: '',
        idType: [],
        idNumber: '',
        phone: ''
      },
      rescueTypeList: [
        ['火灾','溺水','中毒','其他'],
      ],
      rescueAddressList: [
        ['森林','沙漠','海洋','其他'],
      ],
      idTypeList: [
        ['居民身份证','护照','港澳通行证','台湾通行证','其他'],
      ],
      showRescueType: false,
      showRescueAddress: false,
      showIdType: false,
      uploadUrl: 'https://www.baidu.com',
      uploadHeaders: {
        'Content-Type': 'multipart/form-data',
      },  
      uploadData: {
        token: '',
        type: 'image',
      },
    }
  },

  onLoad() {
    uni.hideTabBar();
  },
  methods: {
    submit() {
      console.log(this.form);
    },
    onRescueTypeConfirm(e) {
      this.form.rescueType = e.value;
      this.showRescueType = false;
    },
    onRescueAddressConfirm(e) {
      this.form.rescueAddress = e.value;
      this.showRescueAddress = false;
    },
    onIdTypeConfirm(e) {
      this.form.idType = e.value;
      this.showIdType = false;
    },
    onUploadSuccess(e) {
      console.log(e);
    },
    onUploadError(e) {
      console.log(e);
    },
    onUploadDelete(e) {
      console.log(e);
    },
  }

}
</script>

<style>

</style>

