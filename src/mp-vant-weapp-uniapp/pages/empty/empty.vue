<template>
	<view class="app">
		<wrap title="基础用法">
		</wrap>
		<van-empty description="描述文字" />

		<wrap title="图片类型">
		</wrap>
		<van-tabs :active="activeTab" @change="onChange">
			<van-tab title="通用错误">
				<van-empty image="error" description="描述文字" />
			</van-tab>
			<van-tab title="网络错误">
				<van-empty image="network" description="描述文字" />
			</van-tab>
			<van-tab title="搜索提示">
				<van-empty image="search" description="描述文字" />
			</van-tab>
		</van-tabs>


		<wrap title="自定义图片">
		</wrap>
		<van-empty custom-class="custom-image" image="https://img.yzcdn.cn/vant/custom-empty-image.png" description="描述文字" />


		<wrap title="底部内容">
		</wrap>
		<van-empty description="描述文字">
			<van-button round type="danger" custom-class="bottom-button">
				按钮
			</van-button>
		</van-empty>
		
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
			return {
				activeTab: 0,
			}
		},
		methods: {
			onChange(event) {
				this.activeTab = event.detail.name;
			},
		}
	}
</script>

<style>
	.custom-image .van-empty__image {
		width: 90px;
		height: 90px;
	}

	.bottom-button {
		width: 160px;
		height: 40px;
	}
</style>
