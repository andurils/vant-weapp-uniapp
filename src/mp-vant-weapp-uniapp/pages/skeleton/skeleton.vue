<template>
	<view class="app">
		<wrap title="基础用法">
			<van-skeleton title row="3" row-width="['100%', '100%', '80%']" />
		</wrap>

		<wrap title="显示头像">
			<van-skeleton title avatar row="3" />
		</wrap>

		<wrap title="展示子组件">
			<van-switch :checked="show" size="24px" @change="onChange" />
			<van-skeleton title avatar row="3" :loading="show">
				<view class="demo-preview">
					<image class="demo-preview-img" src="https://img.yzcdn.cn/vant/logo.png" />
					<view class="demo-content">
						<view class="demo-content-h3">关于 Vant Weapp</view>
						<view class="domo-content-p">Vant Weapp 是移动端 Vue 组件库 Vant 的小程序版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。</view>
					</view>
				</view>
			</van-skeleton>
		</wrap>


	</view>
</template>

<script>
	import Page from '../../common/page';
	export default {
		data() {
			return {
				show: false
			}
		},
		computed: {},
		methods: {
			onChange(event) {
				const {
					detail
				} = event;
				this.show = detail;
			},
		}
	}
</script>

<style>
	page {
		background-color: white;
	}

	.van-switch {
		margin: 0 16px 8px;
	}

	.demo-preview {
		display: flex;
		padding: 0 16px;
	}

	.demo-content {
		padding-top: 6px;
	}

	.demo-content-h3 {
		margin: 0;
		font-size: 18px;
		line-height: 20px;
	}

	.demo-content-p {
		margin: 13px 0 0;
		font-size: 14px;
		line-height: 20px;
	}

	.demo-preview-img {
		flex-shrink: 0;
		width: 32px;
		height: 32px;
		margin-right: 16px;
	}
</style>
