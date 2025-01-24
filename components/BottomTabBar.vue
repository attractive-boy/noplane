<template>
    <view style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 999;">
        <u-tabbar
            :value="value"
            @change="onChange"
            :fixed="false"
            :placeholder="false"
            :safeAreaInsetBottom="false"
    >
      <u-tabbar-item text="首页" icon="home" @click="onClick('home')"></u-tabbar-item>
      <u-tabbar-item text="商城" icon="shopping-cart" @click="onClick('shop')"></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account" @click="onClick('my')"></u-tabbar-item>
    </u-tabbar>
    </view>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: String,
        default: 'home',
      },
    },
    methods: {
      onChange(newValue) {
        
      },
      onClick(tab) {
        uni.switchTab({
          url: `/pages/${tab}/index`
        });
      },
    },
  };
  </script>
  
  <style>
  /* 添加样式（如果需要） */
  </style> 