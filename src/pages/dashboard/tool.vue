<template>
 	<view class="app">
 		<view class="title"> 
 			<view class="title-text">Tools</view>
 		</view> 

 		<view class="mobile-nav" v-for="(group, index) in list" :key="index">
 			<view class="mobile-nav__title">{{ group.groupName }}({{ group.list.length }})</view>
 			<van-cell v-for="(item, key) in group.list" :key="key" is-link :url="'/pagesA' + item.path + item.path"
 				:title="item.title" :border="false" custom-class="cus-root"></van-cell>
 		</view>
 		<view class="clear"></view>
 	</view>
 </template>

 <!-- 工具页面
		ConfigProvider 全局配置
		自定义图标 
		内置样式 -->

 <script>
 	import list from '@/common/tools.js'; 
 	export default {
 		data() {
 			return {
 				list: list,
 				logoPath: require('../../static/logo.png')
 			};
 		},
 		onLoad() {},
 		methods: {}
 	};
 </script>

 <style lang="scss">
 	.app {
 		padding: 18px 15px 0;
 		background-color: $uni-bg-color;
 	}

 	.title {
 		margin: 0 0 15px;
 		text-align: center;
 		user-select: none;
 	}

 	.logo,
 	.title-text {
 		display: inline-block;
 		vertical-align: middle;
 	}

 	.title-text {
 		font-size: 32px;
 		margin-left: 15px;
 		font-weight: 400;
 		font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
 	}

 	.logo {
 		width: 36px;
 		height: 36px;
 	}

 	.desc {
 		font-size: 14px;
 		color: #455a64;
 		margin: 0 0 60px;
 		text-align: center;
 	}

 	.mobile-nav {
 		margin-bottom: 20px;
 		min-height: 400rpx;
 	}

 	.mobile-nav__title {
 		font-size: 16px;
 		color: $uni-text-color;
 		padding: 15upx 30upx;
 	}



 	.clear {
 		min-height: 100upx;
 	}

 	.cus-cellgroup {
 		// background-color: $uni-text-color-grey;
 		border: 0rpx solid;
 	}

 	.cus-root {
 		margin: 24rpx 0;
 		border-radius: 40rpx;
 		background-color: $uni-bg-color-grey !important;
 	}
 </style>
