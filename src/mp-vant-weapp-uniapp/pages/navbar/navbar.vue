<template>
	<view class="app">
		<wrap title="基础用法">
		</wrap>
		<van-nav-bar :safe-area-inset-top="false" title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
		 @click-right="onClickRight" />
		<wrap title="高级用法">
		</wrap>
		<van-nav-bar :safe-area-inset-top="false" title="标题" left-text="返回" left-arrow>
			<van-icon name="search" slot="right" custom-class="icon" />
		</van-nav-bar>
		<wrap title="//TODO">
			插槽样式生成跟官网样式不一样，图标出现移位！
		</wrap>
	</view>
</template>

<script>
	import Page from '../../common/page';
	export default {
		data() {
			return {};
		},
		methods: {
			onClickLeft() {
				uni.showToast({
					title: '点击返回',
					icon: 'none'
				});
			},

			onClickRight() {
				uni.showToast({
					title: '点击按钮',
					icon: 'none'
				});
			}
		},
	};
</script>

<style>
	.icon {
		color: #1989fa;
	}
</style>
