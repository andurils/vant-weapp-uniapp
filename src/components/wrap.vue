<template>
	<view class="wrap-demo">
		<view v-if="title" class="wrap-title">{{ title }}</view>
		<view v-if="$slots.default">
			<slot></slot>
		</view>
	</view>
</template>
<script>
	export default {
		name: "wrap",
		props: {
			title: {
				default: ''
			}
		}
	};
</script>
<style lang="scss" scoped>
	.wrap-demo {
		margin: 12rpx 32rpx;
		padding: 12rpx 0;

		.wrap-title {
			font-weight: 500;
			font-size: 28rpx;
			line-height: 1.5;
			color: rgba(69, 90, 100, 0.6);
		}
	}
</style>
