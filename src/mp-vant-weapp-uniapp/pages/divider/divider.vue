<template>
	<view class="app">
		<wrap custom-class="white" title="基础用法">
			<van-divider />
		</wrap>

		<wrap custom-class="white" title="使用hairline">
			<van-divider hairline />
		</wrap>

		<wrap custom-class="white" title="虚线">
			<van-divider dashed content-position="center">文本</van-divider>
		</wrap>

		<wrap custom-class="white" title="内容位置">
			<van-divider content-position="center">文本</van-divider>
			<van-divider content-position="left">文本</van-divider>
			<van-divider content-position="right">文本</van-divider>
		</wrap>

		<wrap custom-class="white" title="自定义属性">
			<van-divider contentPosition="center" textColor="#1989fa">文本颜色</van-divider>
			<van-divider contentPosition="center" borderColor="#1989fa">border颜色</van-divider>
			<van-divider contentPosition="center" fontSize="18">字体大小</van-divider>
		</wrap>

		<wrap custom-class="white" title="自定义样式" padding>
			<van-divider content-position="center" custom-style="color: #1989fa;border-color: #1989fa;font-size: 18px;">文本</van-divider>
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
		computed: {},
		methods: {}
	}
</script>

<style>
	.app {
		background-color: white;
	}
</style>
