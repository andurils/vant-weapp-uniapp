<template>
	<view class="">
		文字省略
		当文本内容长度超过容器最大宽度时，自动省略多余的文本。
		
		<view class="van-ellipsis">
		  这是一段宽度限制 250px 的文字，后面的内容会省略这是一段宽度限制 250px 的文字，后面的内容会省略这是一段宽度限制 250px 的文字，后面的内容会省略
		</view>
		
		<!-- 最多显示两行 -->
		<view class="van-multi-ellipsis--l2">
		  这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略
		</view>
		
		<!-- 最多显示三行 -->
		<view class="van-multi-ellipsis--l3">
		  这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略这是一段最多显示三行的文字，后面的内容会省略
		</view>
		
		
		1px 边框
		为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。
		
		<!-- 上边框 -->
		<view class="van-hairline--top"></view>
		
		<!-- 下边框 -->
		<view class="van-hairline--bottom"></view>
		
		<!-- 左边框 -->
		<view class="van-hairline--left"></view>
		
		<!-- 右边框 -->
		<view class="van-hairline--right"></view>
		
		<!-- 上下边框 -->
		<view class="van-hairline--top-bottom"></view>
		
		<!-- 全边框 -->
		<view class="van-hairline--surround"></view>
	</view>
</template>

<script>
</script>

<style>
</style>
