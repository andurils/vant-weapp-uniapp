<template>
	<view> 
		<wrap title="基础用法">
			<van-cell-group>
				<van-cell title="单元格" value="内容" />
				<van-cell title="单元格" value="内容" label="描述信息" :border="false" />
			</van-cell-group>
		</wrap>

		<wrap title="单元格大小">
			<van-cell-group>
				<van-cell title="单元格" value="内容" size="large" />
				<van-cell title="单元格" value="内容" label="描述信息" size="large" :border="false" />
			</van-cell-group>
		</wrap>

		<wrap title="展示图标">
			<van-cell title="单元格" icon="location-o" :border="false" />
		</wrap>

		<wrap title="只设置 value">
			<van-cell title="内容" />
		</wrap>

		<wrap title="展示箭头">
			<van-cell title="单元格" is-link />
			<van-cell title="单元格" value="内容" is-link />
			<van-cell title="单元格" is-link arrow-direction="down" value="内容" :border="false" url="/pages/dashboard/dashboard" />
		</wrap>


		<wrap title="页面跳转">
			<van-cell is-link title="URL跳转" link-type="navigateTo" url="/pages/dashboard/dashboard" />
		</wrap>

		<wrap title="分组标题">
			<van-cell-group title="分组1">
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
			<van-cell-group title="分组2">
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
		</wrap>


		<wrap title="使用插槽">
			<van-cell value="内容" icon="shop-o" is-link>
				<view slot="title">
					<view class="title">单元格</view>
					<van-tag type="danger">标签</van-tag>
				</view>
			</van-cell> 
			<van-cell title="单元格" :border="false">
				<van-icon slot="right-icon" name="search" />
			</van-cell>
		</wrap>
		
		<wrap title="垂直居中">
			<van-cell center title="单元格" value="内容" label="描述信息" />
		</wrap>

	</view>
</template>

<script>
	import Page from '../../common/page';

	export default {
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {

		}
	}
</script>

<style>
	.title {
		margin-right: 5px;
		display: inline-block;
		vertical-align: middle;
	}
</style>
