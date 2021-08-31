<template>
	<view>
		<wrap title="基础用法" padding><van-switch :checked="checked" @change="onChange" /></wrap>

		<wrap title="禁用状态" padding><van-switch :checked="checked" disabled @change="onChange" /></wrap>

		<wrap title="加载状态" padding><van-switch :checked="checked" loading @change="onChange" /></wrap>

		<wrap title="自定义大小" padding><van-switch :checked="checked" size="24px" @change="onChange" /></wrap>

		<wrap title="自定义颜色" padding><van-switch :checked="checked" active-color="#07c160" inactive-color="#f44" @change="onChange" /></wrap>

		<wrap title="异步控制" padding><van-switch :checked="checked2" size="36px" @change="onChange2" /></wrap>

		<wrap title="搭配单元格使用" padding></wrap>
		<van-cell-group>
			<van-cell title="基础用法" center><van-switch :checked="checked3" @change="onChange3" /></van-cell>
			<van-cell title="禁用状态" center><van-switch :checked="checked3" @change="onChange3" disabled /></van-cell>
			<van-cell title="加载状态" center><van-switch :checked="checked3" @change="onChange3" loading /></van-cell>
		</van-cell-group>
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
			checked: true,
			checked2: true,
			checked3: true
		};
	},
	methods: {
		onChange(event) {
			this.checked = event.detail;
		},
		onChange2(event) {
			uni.showModal({
				title: '提示',
				content: '是否切换开关？',
				success: res => {
					if (res.confirm) {
						this.checked2 = event.detail;
					}
				}
			});
		},
		onChange3(event) {
			this.checked3 = event.detail;
		}
	}
};
</script>

<style></style>
