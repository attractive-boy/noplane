<template>
    <view style="margin: 0 30rpx;">
        <view style="background-color: #539DB6; border-radius: 20rpx; margin-top: 20rpx; padding: 20rpx;">
            <view style="font-size: 35rpx; font-weight: bold; color: #fff; text-align: start;">
                登记规则: <br>
                1. 请如实填写，以便相关部门了解情况 <br>
                2. 请勿重复登记，以免影响他人 <br>
                3. 请勿上传虚假信息，否则将承担法律责任 <br>
            </view>
        </view>
        <u-form :model="form" ref="uForm" labelPosition="top">
        <view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx;">登记门店</view>
        <u-form-item label="门店" prop="shop" style="text-wrap: nowrap;">
          <u-cell style="width: 100%;" titleStyle="color: gray;" title="请选择门店" :value="form.shop.length > 0 ? form.shop[0] : ''" @click="showShop = true" :isLink="true"  arrow-direction="right"></u-cell>
        </u-form-item>
        <u-form-item label="地址" prop="address" style="text-wrap: nowrap;">
          <u-input type="text" v-model="form.address" placeholder="请输入您的地址" />
        </u-form-item>
       
        <view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx;">个人信息</view>
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
        <!-- 我已阅读并同意运输登记规则 -->
        <u-form-item label="" prop="agree" style="text-wrap: nowrap;">
          <u-checkbox-group v-model="form.agree" :wrap="true">
            <u-checkbox :name="1" label="我已阅读并同意运输登记规则" value="我已阅读并同意运输登记规则"></u-checkbox>
          </u-checkbox-group>
        </u-form-item>
      </u-form>
      <u-picker :show="showRescueType" :columns="rescueTypeList" @confirm="onRescueTypeConfirm" @cancel="showRescueType = false"></u-picker>
      <u-picker :show="showRescueAddress" :columns="rescueAddressList" @confirm="onRescueAddressConfirm" @cancel="showRescueAddress = false"></u-picker>
      <u-picker :show="showIdType" :columns="idTypeList" @confirm="onIdTypeConfirm" @cancel="showIdType = false"></u-picker>
      <u-picker :show="showShop" :columns="shopList" @confirm="onShopConfirm" @cancel="showShop = false"></u-picker>
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
          phone: '',
          shop: [],
          address: '',
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
        shopList: [
          ['门店1','门店2','门店3','门店4','其他'],
        ],
        showShop: false,
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
      onShopConfirm(e) {
        this.form.shop = e.value;
        this.showShop = false;
      },
    }
  
  }
  </script>
  
  <style>
  
  </style>
  
  