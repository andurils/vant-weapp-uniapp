<template>
	<view class="app">
		<wrap title="基础用法">
			<van-sidebar custom-class="custom-sidebar" :active-key="activeKey" @change="onChange">
				<van-sidebar-item title="标签名称" />
				<van-sidebar-item title="标签名称" disabled />
				<van-sidebar-item title="标签名称" />
			</van-sidebar>
		</wrap>

		<wrap title="提示信息">
			<van-sidebar custom-class="custom-sidebar" :active-key="activeKey" @change="onChange">
				<van-sidebar-item title="标签名称" dot />
				<van-sidebar-item title="标签名称" info="5" />
				<van-sidebar-item title="标签名称" info="99+" />
			</van-sidebar>
		</wrap>
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
			activeKey: 0
		};
	},
	methods: {
		onChange(event) {
			console.log(event);
			uni.showToast({
				icon: 'none',
				title: `切换至第${event.detail}项`
			});
		}
	}
};
</script>

<style>
/* .van-icon-question {
		margin-left: 5px;
		font-size: 15px !important;
		color: #1989fa;
		vertical-align: -3px;
	} */
</style>
