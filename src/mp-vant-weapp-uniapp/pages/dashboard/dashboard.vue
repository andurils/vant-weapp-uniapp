<template>
	<view class="app">
		<view class="title">
			<image class="logo" :src="logoPath" />
			<view class="title-text">Vant Weapp</view>
		</view>
		<view class="desc">轻量、可靠的小程序 UI 组件库</view>

		<!-- <view class="mobile-nav" v-if="activeName=='tab'+index" v-for="(group,index) in list" :key="index">
			<view class="mobile-nav__title">{{ group.groupName }}({{group.list.length}})</view>
			<van-cell-group>
				<van-cell v-for="(item,key) in group.list" :key="key" is-link :url="'/pages' + item.path + item.path" :title="item.title"></van-cell>
			</van-cell-group>
		</view> -->

		<view class="mobile-nav" v-for="(group, index) in list" :key="index">
			<view class="mobile-nav__title">{{ group.groupName }}({{ group.list.length }})</view>
			<van-cell-group><van-cell v-for="(item, key) in group.list" :key="key" is-link :url="'/pages' + item.path + item.path" :title="item.title"></van-cell></van-cell-group>
		</view>
		<view class="clear"></view>

		<!-- tabbar -->
		<view class="tabbar-wrapper">
			<van-tabbar :active="activeName" safe-area-inset-bottom="false" @change="onNameChange">
				<van-tabbar-item name="tab0" icon="apps-o">组件</van-tabbar-item>
				<van-tabbar-item name="tab1" icon="send-gift-o">工具</van-tabbar-item>
				<van-tabbar-item name="tab2" icon="other-pay">模板</van-tabbar-item> 
				<!-- 
				<van-tabbar-item name="tab3" icon="photo-o">展示</van-tabbar-item>
				<van-tabbar-item name="tab4" icon="cluster-o">导航</van-tabbar-item>
				<van-tabbar-item name="tab5" icon="points">业务</van-tabbar-item> -->
			</van-tabbar>
		</view>
		<!-- tabbar -->
	</view>
</template>

<script>
import list from '../../config';
import Page from '../../common/page';
export default {
	data() {
		return {
			list: list,
			logoPath: require('../../statics/images/logo.png'),
			activeName: 'tab0'
		};
	},
	onLoad() {
		// console.log(list);
	},
	methods: {
		onNameChange(event) {
			this.activeName = event.detail;
		}
	}
};
</script>

<style>
.app {
	padding: 18px 15px 0;
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
}

.mobile-nav__title {
	font-size: 16px;
	background-color: #fff;
	padding: 17px 15px;
}

/* tabbar */
.tabbar-wrapper {
	position: fixed;
	width: 100%;
	bottom: 0;
	z-index: 1024;
	box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
}

.clear {
	min-height: 100upx;
}
</style>
