<template>
	<view class="app">
		<wrap title="基本用法">
			<van-grid><van-grid-item icon="photo-o" :text="'文字' + (item + 1)" v-for="(item, index) in 4" :key="index" /></van-grid>
		</wrap>

		<wrap title="自定义列数">
			<van-grid column-num="3"><van-grid-item icon="photo-o" :text="'文字' + (item + 1)" v-for="(item, index) in 6" :key="index" /></van-grid>
		</wrap>

		<wrap title="自定义内容">
			<van-grid column-num="3" :border="false">
				<van-grid-item use-slot v-for="(item, index) in 6" :key="index">
					<image style="width: 100%; height: 90px;" :src="'https://img.yzcdn.cn/vant/apple-' + (index + 1) + '.jpg'" />
				</van-grid-item>
			</van-grid>
		</wrap>

		<wrap title="正方形格子">
			<van-grid square><van-grid-item icon="photo-o" :text="'文字' + (item + 1)" v-for="(item, index) in 8" :key="index" /></van-grid>
		</wrap>

		<wrap title="格子间距">
			<van-grid gutter="10"><van-grid-item icon="photo-o" :text="'文字' + (item + 1)" v-for="(item, index) in 8" :key="index" /></van-grid>
		</wrap>

		<wrap title="页面跳转">
			<van-grid clickable column-num="2">
				<van-grid-item icon="home-o" link-type="navigateTo" url="/pages/dashboard/dashboard" text="Navigate 跳转" />
				<van-grid-item icon="search" link-type="reLaunch" url="/pages/dashboard/dashboard" text="ReLaunch 跳转" />
			</van-grid>
		</wrap>

		<wrap title="提示信息">
			<van-grid column-num="2">
				<van-grid-item icon="home-o" text="文字" dot />
				<van-grid-item icon="search" text="文字" info="99+" />
			</van-grid>
		</wrap>
	</view>
</template>

<script>
import Page from '../../common/page';
import wrap from '@/components/wrap';
export default {
	components: {
		wrap
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.van-collapse-item__content {
	font-size: 13px;
	line-height: 1.5;
	color: #666;
}

/* .van-icon-question {
		margin-left: 5px;
		font-size: 15px !important;
		color: #1989fa;
		vertical-align: -3px;
	} */
</style>
