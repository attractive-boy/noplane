<template>
  <view style="margin: 20rpx 30rpx;">
    <u-search placeholder="请输入商品名称" v-model="searchValue"></u-search>
    <view
      style="display: flex; flex-direction: row; justify-content: space-between; width: 100%; margin-top: 20rpx;">
      <view style="width: 30%; height: 1200rpx; background-color: #f0f0f0; margin-top: 20rpx;">
        <view style="text-align: center; height: 80rpx; text-wrap: nowrap; font-size: 30rpx; margin-top: 20rpx; line-height: 80rpx;" @click="goToCategory('急救物资类别')" :class="{ 'active-category': selectedCategory == '急救物资类别' }">
          急救物资类别
        </view>
        <view style="text-align: center;  text-wrap: nowrap; font-size: 30rpx; height: 80rpx; line-height: 80rpx;" @click="goToCategory('急救药品')" :class="{ 'active-category': selectedCategory == '急救药品' }">
          急救药品
        </view>
        <view style="text-align: center;  text-wrap: nowrap; font-size: 30rpx; height: 80rpx; line-height: 80rpx;" @click="goToCategory('急救设备')" :class="{ 'active-category': selectedCategory == '急救设备' }">
          急救设备
        </view>
        <view style="text-align: center;  text-wrap: nowrap; font-size: 30rpx; height: 80rpx;  line-height: 80rpx;" @click="goToCategory('更多')" :class="{ 'active-category': selectedCategory == '更多' }">
          更多
        </view>
      </view>
      <view style="width: 68%; height: 1200rpx; margin-top: 20rpx;">
        <u-tabs :list="tabs" @click="tabsClick"></u-tabs>
        
        <view style="display: flex; flex-direction: row; justify-content: space-between; flex-wrap: wrap;">
          <view v-for="item in goodsFilter" :key="item.name" style="padding: 0 20rpx; width: 40%; height: 350rpx; background-color: #f0f0f0; margin-top: 20rpx; display: flex; align-items: center; flex-direction: column;">
            <image :src="item.image" style="width: 150rpx; height: 150rpx; aspect-ratio: 1; margin-top: 20rpx;"></image> 
            <view style="margin-top: 10rpx; display: flex; flex-direction: column; align-items: center; width: 100%;">
              <view v-if="!item.category" style="font-size: 25rpx;">{{ item.name }}</view>
              <view v-else style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: space-around;">
                <view style="font-size: 25rpx;  text-align: center;">{{ item.name }}</view>
                <image src="/static/addo.svg" style="width: 30rpx; height: 30rpx; margin-left: 10rpx; margin-right: 10rpx; font-size: 30rpx;"></image>
              </view>
              <br/>
              <view style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: space-around;">
                <view v-if="item.price" style="font-size: 25rpx; margin-right: 30rpx;">￥{{ item.price }}</view>
                <u-button type="primary" size="small" @click="goToDetail(item)" style="font-size: 20rpx; text-wrap: nowrap;" >{{ item.btntext }}</u-button>
              </view>
              
            </view>
          </view>  
            

        </view>
      </view>

    </view>
    <BottomTabBar />
  </view>

</template>
<script>
import BottomTabBar from '@/components/BottomTabBar.vue';

export default {
  data() {
    return {
      searchValue: '',
      selectedCategory: '急救物资类别',
      allCategory: [
        { name: '急救物资类别' },
        { name: '急救药品' },
        { name: '急救设备' },
        { name: '更多' }
      ],
      allGoods: [
        { name: '速效救心丸', price: 10, image:"/static/speed_heart_pill.png", category: '急救药品',btntext: "立即配送" },
        { name: '毒蛇血清', price: 20, image:"/static/venom_serum.png", category: '急救药品',btntext: "立即配送" },
        { name: '葡糖糖溶液', price: 20, image:"/static/glucose_solution.png", category: '急救药品',btntext: "立即配送" },
        { name: '云南白药', price: 10, image:"/static/yunnan_baiyao.png", category: '急救药品',btntext: "立即配送" },
        { name:'便携式AED', price: 50, image:"/static/portable_aed.png", category: '急救设备',btntext: "立即配送" },
        { name: '纱布', price: 10, image:"/static/gauze.png", category: '急救设备',btntext: "立即配送" },
        { name: '烫伤膏药', price: 10, image:"/static/burn_ointment.png", category: '急救设备',btntext: "立即配送" }, 
        { name: '绷带', price: 10, image:"/static/bandage.png", category: '急救设备',btntext: "立即配送" },
        { name: '三角巾', price: 10, image:"/static/triangle_scarf.png", category: '急救设备',btntext: "立即配送" },
        { name: '酒精', price: 10, image:"/static/alcohol.png", category: '急救设备',btntext: "立即配送" },
        { name: '未完待续', price: 10, image:"/static/coming_soon.png", category: '更多',btntext: "不可用" }, 
        { name: '急救药品', image: "/static/emergency_medicine.png",btntext: "查看更多" },
        { name: '急救设备', image: "/static/emergency_equipment.png",btntext: "查看更多" },
        { name: '更多', image: "/static/more.png",btntext: "查看更多" }
      ],
      goods: [
        { name: '急救药品', image: "/static/emergency_medicine.png",btntext: "查看更多" }, 
        { name: '急救设备', image: "/static/emergency_equipment.png",btntext: "查看更多" },
        { name: '更多', image: "/static/more.png",btntext: "查看更多" }
      ],
      goodsFilter: [
        { name: '急救药品', image: "/static/emergency_medicine.png",btntext: "查看更多" },
        { name: '急救设备', image: "/static/emergency_equipment.png",btntext: "查看更多" },
        { name: '更多', image: "/static/more.png",btntext: "查看更多" }
      ],
      tabs: [
        { name: '全部' },
        { name: '急救药品' },
        { name: '急救设备' },
        { name: '更多' }
      ]
    }
  },
  components: {
    BottomTabBar,
  },
  onLoad() {
    uni.hideTabBar();
  },
  methods: {
    goToCategory(category) {
      this.selectedCategory = category;
      if(category == '急救物资类别') {
        this.goodsFilter = this.allGoods.filter(item => !item.category);
        this.goods = this.goodsFilter;
        this.tabs = [
          { name: '全部' },
          { name: '急救药品' },
          { name: '急救设备' },
          { name: '更多' }
        ];
      } else {
        this.goodsFilter = this.allGoods.filter(item => item.category == category);
        this.goods = this.goodsFilter;
        this.tabs = this.goodsFilter.map(item => ({ name: item.name })); 
      }
      console.log(this.selectedCategory);
    },
    tabsClick(item1) {
      if(item1.name == '全部') {
        this.goodsFilter = this.goods;
      } else {
        this.goodsFilter = this.goods.filter(item => item.name == item1.name);
      }
    },
    goToDetail(item) {
      console.log(item);
      uni.navigateTo({
        url: `/pages/noplanefly/index`
      });
    } 
  }
}
</script>

<style>
.active-category {
  background-color: white;
}
</style>
