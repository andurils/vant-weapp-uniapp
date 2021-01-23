<template>
	<view class="app">
		<wrap title="基础用法"></wrap>
		<view>
			<van-cell-group>
				<van-cell title="单元格" value="内容" required="true" clickable="true" />
				<van-cell title="单元格" value="内容" label="描述信息" border="true" />
			</van-cell-group>
		</view>

		<wrap title="单元格大小"></wrap>
		<view>
			<van-cell-group>
				<van-cell title="单元格" value="内容" size="large" />
				<van-cell title="单元格" value="内容" label="描述信息" size="large" :border="false" />
			</van-cell-group>
		</view>

		<wrap title="展示图标"></wrap>
		<view><van-cell title="单元格" icon="location-o" /></view>

		<wrap title="只设置 value"></wrap>
		<view><van-cell title="内容" /></view>

		<wrap title="展示箭头"></wrap>
		<view>
			<van-cell title="单元格" is-link />
			<van-cell title="单元格" value="内容" is-link />
			<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
		</view>

		<wrap title="页面跳转"></wrap>
		<view>
			<van-cell is-link title="navigateTo(default)" link-type="navigateTo" url="/pages/button/button" />
			<van-cell is-link title="reLaunch" link-type="reLaunch" url="/pages/cell/cell" />
			<!-- 使用tabbar -->
			<van-cell is-link title="switchTab" link-type="switchTab" url="/pages/dashboard/tool" />
			<!-- wx[this.data.linkType] is not a function -->
			<!-- <van-cell is-link title="redirectTo" link-type="redirectTo " url="/pages/dashboard/tool" /> -->
		</view>

		<wrap title="分组标题"></wrap>
		<view>
			<van-cell-group title="分组1"><van-cell title="单元格" value="内容" /></van-cell-group>
			<van-cell-group title="分组2"><van-cell title="单元格" value="内容" /></van-cell-group>
		</view>

		<wrap title="使用插槽"></wrap>
		<view>
			<van-cell value="内容" icon="shop-o" is-link>
				<view slot="title">
					<view class="title">单元格</view>
					<van-tag type="danger">标签</van-tag>
				</view>
			</van-cell>
			<van-cell title="单元格" value="内容" icon="location-o" use-label-slot="false"><view slot="label">自定义描述</view></van-cell>
			<van-cell title="单元格" icon="location-o"><van-icon slot="right-icon" name="search" /></van-cell>
		</view>

		<wrap title="垂直居中"></wrap>
		<view><van-cell center title="单元格" value="内容" label="描述信息" /></view>

		<wrap title="自定义样式"></wrap>
		<view>
			<van-cell-group custom-class="cus-cellgroup">
				<van-cell title="单元格" value="内容" label="描述信息" :border="false" title-class="cus-title" label-class="cus-label" value-class="cus-value" />
			</van-cell-group>
		</view>
		<view class="clear-blank"></view>
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
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss">
.cus-cellgroup {
	padding: 10rpx;
	border: $uni-color-primary 4rpx solid !important;
	background-color: #990055;
}
.cus-title {
	color: $uni-color-error !important;
	background-color: $uni-color-primary !important;
}
.cus-label {
	background-color: $uni-color-warning !important;
}
.cus-value {
	background-color: $uni-color-success !important;
}
</style>
