<template>
	<view class="app">
		<wrap title="基础用法"></wrap>
		<van-nav-bar :safe-area-inset-top="false" title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
		 @click-right="onClickRight" />
		<wrap title="高级用法"></wrap>
		<van-nav-bar :safe-area-inset-top="false" title="标题" left-text="返回" left-arrow @click-left="onClickLeft" >
			<van-icon name="search" slot="right" custom-class="icon" @tap="onClickIcon" />
		</van-nav-bar>

		<van-toast id="van-toast" />
	</view>
</template>

<script>
	import Page from '../../common/page';
	import wrap from '@/components/wrap';
	import Toast from '@/wxcomponents/vant/toast/toast';
	export default {
		components: {
			wrap
		},
		data() {
			return {};
		},
		methods: {
			onClickLeft() {
				Toast('点击返回');
			},

			onClickRight() {
				Toast('点击按钮');
			},
			onClickIcon() {
				Toast('点击Icon');
			}
		}
	};
</script>

<style>
	.icon {
		color: #1989fa;
	}
</style>
