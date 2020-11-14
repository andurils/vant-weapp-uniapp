<template>
	<view class="app">
		<wrap title="基础用法"></wrap>
		<van-picker :columns="column1" @change="onChange1" />

		<wrap title="默认选中项"></wrap>
		<van-picker :columns="column1" default-index="2" @change="onChange1" />

		<wrap title="禁用选项"></wrap>
		<van-picker :columns="column2" />

		<wrap title="展示顶部栏"></wrap>
		<van-picker show-toolbar title="标题" :columns="column1" @change="onChange1" @confirm="onConfirm" @cancel="onCancel" />

		<wrap title="多列联动"></wrap>
		<van-picker :columns="column4" @change="onChange2" />

		<wrap title="加载状态"></wrap>
		<van-picker loading :columns="column4" />
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
			column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
			column2: [
				{
					text: '杭州',
					disabled: true
				},
				{
					text: '宁波'
				},
				{
					text: '温州'
				}
			],
			column3: {
				浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				福建: ['福州', '厦门', '莆田', '三明', '泉州']
			},
			column4: [
				{
					values: ['浙江', '福建'],
					className: 'column1'
				},
				{
					values: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
					className: 'column2',
					defaultIndex: 2
				}
			]
		};
	},
	onLoad() {},
	methods: {
		onChange1(event) {
			const { value, index } = event.detail;

			uni.showToast({
				title: `Value: ${value}, Index：${index}`,
				icon: 'none'
			});
		},

		onConfirm(event) {
			const { value, index } = event.detail;

			uni.showToast({
				title: `Value: ${value}, Index：${index}`,
				icon: 'none'
			});
		},

		onCancel() {
			uni.showToast({
				title: '取消',
				icon: 'none'
			});
		},

		onChange2(event) {
			console.log(event.detail);

			const { picker, value } = event.detail;
			picker.setColumnValues(1, this.column3[value[0]]);
			getApp().picker = picker;
		}
	}
};
</script>

<style></style>
