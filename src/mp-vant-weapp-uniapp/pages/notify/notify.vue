<template>
	<view class="app">
		<wrap padding title="基础用法">
			<van-button type="danger" @click="showNotify">基础用法</van-button>
		</wrap>

		<wrap padding title="通知类型">
			<view class="demo-margin-bottom">
				<van-button class="demo-margin-right" type="info" data-type="primary" @click="showNotifyByType">主要通知</van-button>
				<van-button type="primary" data-type="success" @click="showNotifyByType">成功通知</van-button>
			</view>
			<view class="demo-margin-bottom">
				<van-button class="demo-margin-right" type="danger" data-type="danger" @click="showNotifyByType">危险通知</van-button>
				<van-button type="warning" data-type="warning" @click="showNotifyByType">警告通知</van-button>
			</view>
		</wrap>

		<wrap padding title="自定义通知">
			<van-button type="primary" class="demo-margin-right" @click="showCustomColor">自定义颜色</van-button>
			<van-button type="primary" @click="showCustomDuration">自定义时长</van-button>
		</wrap>

		<wrap padding title="插入状态栏高度">
			<van-button type="primary" class="demo-margin-right" @click="showSafe">插入状态栏高度</van-button>
		</wrap>

		<van-notify id="van-notify" />
		<van-notify id="custom-selector" />

		<wrap padding title="备注">
			使用自定义导航 notify 样式中 top:0 无法动态设置！！
		</wrap>
	</view>
</template>
<script>
	import Page from '../../common/page';
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
			}
		},
		methods: {
			showNotify() {
				this.$notify('通知内容');
			},

			showCustomColor() {
				this.$notify({
					message: '自定义颜色',
					color: '#ad0000',
					background: '#ffe1e1'
				});
			},

			showCustomDuration() {
				this.$notify({
					duration: 10000,
					message: '自定义时长',
					selector: '#custom-selector',
					backgroundColor: '#1989fa',
					safeAreaInsetTop: true
				});
			},

			showNotifyByType(event) {
				const {
					type
				} = event.currentTarget.dataset;
				this.$notify({
					type,
					message: '通知内容'
				});
			},

			showSafe() {
				this.$notify({
					message: '通知内容',
					safeAreaInsetTop: true
				});
			},
		},
	};
</script>

<style>
</style>
