<template>
	<view class="app">
		<wrap title="基础用法">
		</wrap>
		<van-cell title="基础用法">
			<van-tag class="demo-margin-right">标签</van-tag>
		</van-cell>
		<van-cell title="primary 类型">
			<van-tag class="demo-margin-right" type="primary">标签</van-tag>
		</van-cell>
		<van-cell title="success 类型">
			<van-tag class="demo-margin-right" type="success">标签</van-tag>
		</van-cell>
		<van-cell title="danger 类型">
			<van-tag class="demo-margin-right" type="danger">标签</van-tag>
		</van-cell>
		<van-cell title="warning 类型">
			<van-tag class="demo-margin-right" type="warning">标签</van-tag>
		</van-cell>


		<wrap title="样式风格"></wrap>
		<van-cell title="空心样式">
			<van-tag class="demo-margin-right" plain type="primary">标签</van-tag>
		</van-cell>
		<van-cell title="圆角样式">
			<van-tag class="demo-margin-right" round type="primary">标签</van-tag>
		</van-cell>
		<van-cell title="标记样式">
			<van-tag class="demo-margin-right" mark type="primary">标签</van-tag>
		</van-cell>
		<van-cell title="可关闭标签">
			<van-tag v-if="show.primary" class="demo-margin-right" type="primary" size="medium" closeable id="primary" @close="onClose">标签</van-tag>
		</van-cell>


		<wrap title="标签大小">
		</wrap>
		<van-cell title="小号标签">
			<van-tag class="demo-margin-right" type="danger">标签</van-tag>
		</van-cell>
		<van-cell title="中号标签">
			<van-tag class="demo-margin-right" type="danger" size="medium">标签</van-tag>
		</van-cell>
		<van-cell title="大号标签">
			<van-tag class="demo-margin-right" type="danger" size="large">标签</van-tag>
		</van-cell>

		<wrap title="自定义颜色">
		</wrap>
		<van-cell title="背景颜色">
			<van-tag class="demo-margin-right" color="#7232dd">标签</van-tag>
		</van-cell>
		<van-cell title="文字颜色">
			<van-tag class="demo-margin-right" color="#ffe1e1" text-color="#ad0000">标签</van-tag>
		</van-cell>
		<van-cell title="空心颜色">
			<van-tag class="demo-margin-right" color="#7232dd" plain>标签</van-tag>
		</van-cell>

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
				show: {
					success: true,
					primary: true
				}
			};
		},
		methods: {
			onClose(event) {
				this.show[`${event.target.id}`] = false;
			}
		}
	};
</script>

<style>
	.van-tag {
		margin: 5px;
	}
</style>
