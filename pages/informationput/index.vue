<template>
  <view style="margin: 0 30rpx;">
    <view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx;">基本信息</view>
    <u-form :model="form" ref="uForm" labelPosition="top">
      <u-form-item label="姓名" prop="name" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.name" placeholder="请输入您的姓名" />
      </u-form-item>
      <u-form-item label="手机号码" prop="phone" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.phone" placeholder="请输入您的手机号码" />
      </u-form-item>
      <u-form-item label="证件类型" prop="idType" style="text-wrap: nowrap;">
        <u-cell titleStyle="color: gray;" style="width: 100%;" title="请选择证件类型" :value="form.idType.length > 0 ? form.idType[0] : ''" @click="showIdType = true" :isLink="true"  arrow-direction="right"></u-cell>
      </u-form-item>
      <u-form-item label="证件号码" prop="idNumber" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.idNumber" placeholder="请输入您的证件号码" />
      </u-form-item>
      <!-- 性别 -->
      <u-form-item label="性别" prop="sex" style="text-wrap: nowrap;">
        <u-radio-group v-model="form.sex" :wrap="true">
          <u-radio :name="1" label="男" value="男"></u-radio>
          <u-radio :name="2" label="女" value="女"></u-radio>
        </u-radio-group>
      </u-form-item>
      <!-- 出生日期 -->
      <u-form-item label="出生日期" prop="birthday" style="text-wrap: nowrap;">
        <u-cell titleStyle="color: gray;" style="width: 100%;" title="请选择出生日期" :value="form.birthday" @click="showBirthday = true" :isLink="true"  arrow-direction="right"></u-cell>
      </u-form-item>
      <!-- 居住地址 -->
      <u-form-item label="居住地址" prop="address" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.address" placeholder="请输入您的居住地址" />
      </u-form-item>
      <!-- 楼栋门牌号（或详细住址） -->
      <u-form-item label="楼栋门牌号（或详细住址）" prop="address" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.address" placeholder="请输入您的楼栋门牌号（或详细住址）" />
      </u-form-item>  
      <!-- 单位（学校）名称 -->
      <u-form-item label="单位（学校）名称" prop="unit" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.unit" placeholder="请输入您的单位（学校）名称" />
      </u-form-item>
      <!-- 是否持有个人无人机 -->
      <u-form-item label="是否持有个人无人机" prop="isDrone" style="text-wrap: nowrap;">
        <u-radio-group v-model="form.isDrone" :wrap="true">
          <u-radio :name="1" label="是" value="是"></u-radio>
          <u-radio :name="2" label="否" value="否"></u-radio>
        </u-radio-group>
      </u-form-item>
      <!-- 目前所在城市 -->
      <u-form-item label="目前所在城市" prop="city" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.city" placeholder="请输入您的目前所在城市" />
      </u-form-item>
      <!-- 反馈人信息 -->
      <view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx;">人员类型（必选且可多选最后一项）</view>
      <!-- 单选三排  无需立即急救人员 副标题[现属于健康人群，或不需要立即急救人员] 有（被）急救史人员 [有被他人急救史或对他人进行过急救措施] 持有运输设备人员[持有运输设备人员]  -->
      <u-radio-group v-model="form.rescueType"  placement="column">
        <u-radio :name="1" label="无需立即急救人员" value="无需立即急救人员"></u-radio>
        <u-radio :name="2" label="有（被）急救史人员" value="有（被）急救史人员"></u-radio>
        <u-radio :name="3" label="持有运输设备人员" value="持有运输设备人员"></u-radio>
      </u-radio-group>
      <view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx;">是否具有医师资格证或救护员证</view>
        <!-- 相关资格证书 -->
      <u-form-item label="相关资格证书" prop="certificate" style="text-wrap: nowrap;">
        <u-input type="text" v-model="form.certificate" placeholder="请输入您的相关资格证书" />
      </u-form-item>

    </u-form>
    <u-picker :show="showRescueType" :columns="rescueTypeList" @confirm="onRescueTypeConfirm" @cancel="showRescueType = false"></u-picker>
    <u-picker :show="showRescueAddress" :columns="rescueAddressList" @confirm="onRescueAddressConfirm" @cancel="showRescueAddress = false"></u-picker>
    <u-picker :show="showIdType" :columns="idTypeList" @confirm="onIdTypeConfirm" @cancel="showIdType = false"></u-picker>
    <u-datetime-picker
                :show="showBirthday"
                v-model="form.birthday"
                mode="date"
                @confirm="onBirthdayConfirm"
                @cancel="showBirthday = false"
        ></u-datetime-picker>
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
      showBirthday: false,
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
    onBirthdayConfirm(e) {
      this.showBirthday = false;
    },
    onCertificateConfirm(e) {
      this.form.certificate = e.value;
      this.showCertificate = false;
    },
    onDroneConfirm(e) {
      this.form.drone = e.value;
      this.showDrone = false;
    },
  }

}
</script>

<style>

</style>

