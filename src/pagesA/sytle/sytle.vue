<template>
	<view class="app">
		<wrap title="引入内置样式">
			<view class="wrap-content  ">
				@import '@/wxcomponents/vant/common/index.wxss';
			</view>
		</wrap>
		<wrap title="文字省略">
			<gap height="24"></gap>
			<!-- 当文本内容长度超过容器最大宽度时，自动省略多余的文本。 -->
			<view class="van-ellipsis block">
				这是一段宽度限制 250px 的文字，后面的内容会省略这是一段宽度限制 250px 的文字，后面的内容会省略这是一段宽度限制 250px 的文字，后面的内容会省略
			</view>
			<gap height="24"></gap>
			<!-- 最多显示两行 -->
			<view class="van-multi-ellipsis--l2 block">
				这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略
			</view>
			<gap height="24"></gap>
			<!-- 最多显示三行 -->
			<view class="van-multi-ellipsis--l3 block">
				这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略
			</view>
		</wrap>

		<wrap title="1px 边框">
			<gap height="24"></gap>
			<!-- 上边框 -->
			<view class="van-hairline--top block-ex">上边框</view>
			<gap height="24"></gap>
			<!-- 下边框 -->
			<view class="van-hairline--bottom block-ex">下边框</view>
			<gap height="24"></gap>
			<!-- 左边框 -->
			<view class="van-hairline--left block-ex">左边框</view>
			<gap height="24"></gap>
			<!-- 右边框 -->
			<view class="van-hairline--right block-ex">右边框</view>
			<gap height="24"></gap>
			<!-- 上下边框 -->
			<view class="van-hairline--top-bottom block-ex">上下边框</view>
			<gap height="24"></gap>
			<!-- 全边框 -->
			<view class="van-hairline--surround block-ex">全边框</view>
		</wrap>
		<gap height="200"></gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	@import '@/wxcomponents/vant/common/index.wxss';

	.block {
		background-color: #FFFFFF;
	}

	.block-ex {
		background-color: #FFFFFF;
		min-height: 60rpx;
	}
</style>
